import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';
import { getCourseById, getSectionsByCourseId } from '@/lib/courses';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  try {
    const snap = await adminDb.collection('courses').doc(id).get();
    if (snap.exists) {
      const d = snap.data()!;
      const createdAt = d.createdAt && typeof d.createdAt === 'object' && 'toMillis' in d.createdAt
        ? (d.createdAt as { toMillis: () => number }).toMillis()
        : null;
      return NextResponse.json({
        id: snap.id,
        title: d.title,
        subtitle: d.subtitle ?? '',
        description: d.description ?? '',
        price: d.price ?? 0,
        duration: d.duration ?? '',
        level: d.level ?? '',
        sections: d.sections ?? [],
        createdAt,
      });
    }
    const staticCourse = getCourseById(id);
    if (staticCourse) {
      const sections = getSectionsByCourseId(id);
      return NextResponse.json({
        id: staticCourse.id,
        title: staticCourse.title,
        subtitle: staticCourse.subtitle,
        description: '',
        price: 0,
        duration: staticCourse.duration,
        level: staticCourse.level,
        sections,
        createdAt: null,
      });
    }
    return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  } catch (err) {
    console.error('Get course error:', err);
    return NextResponse.json({ error: 'Failed to get course' }, { status: 500 });
  }
}
