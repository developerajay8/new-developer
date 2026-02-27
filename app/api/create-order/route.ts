import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase-admin';

export const dynamic = 'force-dynamic';
import { getRazorpayInstance } from '@/lib/razorpay';

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    const idToken = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (!idToken) {
      return NextResponse.json({ error: 'Unauthorized – no token' }, { status: 401 });
    }

    const decoded = await adminAuth.verifyIdToken(idToken);
    const userId = decoded.uid;

    const body = await request.json();
    const { courseId, amount } = body as { courseId: string; amount: number };

    if (!courseId || !amount || amount < 1) {
      return NextResponse.json(
        { error: 'Invalid courseId or amount' },
        { status: 400 }
      );
    }

    const razorpay = getRazorpayInstance();
    const order = await razorpay.orders.create({
      amount: Math.round(amount), // Razorpay expects amount in paise
      currency: 'INR',
      receipt: `course_${courseId}_${userId}_${Date.now()}`,
      notes: { courseId, userId },
    });

    await adminDb.collection('orders').doc(order.id).set({
      orderId: order.id,
      userId,
      courseId,
      amount: order.amount,
      currency: order.currency,
      status: 'pending',
      createdAt: new Date(),
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (err) {
    console.error('Create order error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to create order' },
      { status: 500 }
    );
  }
}
