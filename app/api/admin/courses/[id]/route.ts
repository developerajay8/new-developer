import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin';
import { adminDb } from '@/lib/firebase-admin';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await requireAdmin(request);
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  try {
    const snap = await adminDb.collection('courses').doc(id).get();
    if (!snap.exists) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }
    return NextResponse.json({ id: snap.id, ...snap.data() });
  } catch (err) {
    console.error('Admin get course error:', err);
    return NextResponse.json({ error: 'Failed to get course' }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await requireAdmin(request);
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  try {
    const body = await request.json();
    const ref = adminDb.collection('courses').doc(id);
    const snap = await ref.get();
    if (!snap.exists) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }
    const allowed = ['title', 'subtitle', 'description', 'price', 'duration', 'level', 'sections', 'published'];
    const update: Record<string, unknown> = { updatedAt: new Date() };
    for (const key of allowed) {
      if (key in body) {
        if (key === 'price') update[key] = typeof body[key] === 'string' ? parseInt(body[key], 10) || 0 : Number(body[key]) || 0;
        else if (key === 'sections') update[key] = Array.isArray(body[key]) ? body[key] : snap.get(key);
        else if (key === 'published') update[key] = !!body[key];
        else update[key] = typeof body[key] === 'string' ? body[key].trim() : body[key];
      }
    }
    await ref.update(update);
    const updated = await ref.get();
    return NextResponse.json({ id: updated.id, ...updated.data() });
  } catch (err) {
    console.error('Admin update course error:', err);
    return NextResponse.json({ error: 'Failed to update course' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const admin = await requireAdmin(request);
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  try {
    const ref = adminDb.collection('courses').doc(id);
    const snap = await ref.get();
    if (!snap.exists) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }
    await ref.delete();
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Admin delete course error:', err);
    return NextResponse.json({ error: 'Failed to delete course' }, { status: 500 });
  }
}
