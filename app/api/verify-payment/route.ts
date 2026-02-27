import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { adminAuth, adminDb } from '@/lib/firebase-admin';

export const dynamic = 'force-dynamic';
import { getRazorpayInstance } from '@/lib/razorpay';

function verifyRazorpaySignature(
  orderId: string,
  paymentId: string,
  signature: string,
  secret: string
): boolean {
  const body = `${orderId}|${paymentId}`;
  const expected = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');
  return expected === signature;
}

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
    const { orderId, paymentId, signature, courseId } = body as {
      orderId: string;
      paymentId: string;
      signature: string;
      courseId: string;
    };

    if (!orderId || !paymentId || !signature) {
      return NextResponse.json(
        { error: 'Missing orderId, paymentId or signature' },
        { status: 400 }
      );
    }

    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      return NextResponse.json({ error: 'Server config error' }, { status: 500 });
    }

    if (!verifyRazorpaySignature(orderId, paymentId, signature, secret)) {
      return NextResponse.json({ error: 'Invalid payment signature' }, { status: 400 });
    }

    const orderRef = adminDb.collection('orders').doc(orderId);
    const orderSnap = await orderRef.get();
    if (!orderSnap.exists) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    const orderData = orderSnap.data();
    if (orderData?.userId !== userId) {
      return NextResponse.json({ error: 'Order does not belong to this user' }, { status: 403 });
    }

    const resolvedCourseId = courseId || orderData?.courseId;
    if (!resolvedCourseId) {
      return NextResponse.json({ error: 'Course id missing' }, { status: 400 });
    }

    await adminDb.runTransaction(async (transaction) => {
      transaction.update(orderRef, {
        status: 'paid',
        razorpayPaymentId: paymentId,
      });
      const enrollmentId = `${userId}_${resolvedCourseId}`;
      transaction.set(adminDb.collection('enrollments').doc(enrollmentId), {
        userId,
        courseId: resolvedCourseId,
        orderId,
        enrolledAt: new Date(),
      });
    });

    return NextResponse.json({
      success: true,
      message: 'Payment verified and enrollment created',
    });
  } catch (err) {
    console.error('Verify payment error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Verification failed' },
      { status: 500 }
    );
  }
}
