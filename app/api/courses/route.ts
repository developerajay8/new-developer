import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';

export const dynamic = 'force-dynamic';

/** Public API: returns only published courses for the courses page. */
export async function GET() {
  try {
    const snap = await adminDb
      .collection('courses')
      .where('published', '==', true)
      .get();

    const courses = snap.docs.map((doc) => {
      const d = doc.data();
      const createdAt = d.createdAt && typeof d.createdAt === 'object' && 'toMillis' in d.createdAt
        ? (d.createdAt as { toMillis: () => number }).toMillis()
        : 0;
      return { id: doc.id, ...d, createdAt };
    });

    courses.sort((a, b) => (b.createdAt as number) - (a.createdAt as number));
    return NextResponse.json(courses);
  } catch (err) {
    console.error('Public courses list error:', err);
    return NextResponse.json({ error: 'Failed to list courses' }, { status: 500 });
  }
}
