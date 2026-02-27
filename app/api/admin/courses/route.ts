import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin';
import { adminDb } from '@/lib/firebase-admin';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const admin = await requireAdmin(request);
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const snap = await adminDb.collection('courses').get();
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
    console.error('Admin courses list error:', err);
    return NextResponse.json({ error: 'Failed to list courses' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const admin = await requireAdmin(request);
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = await request.json();
    const {
      title,
      subtitle,
      description = '',
      price,
      duration,
      level = '',
      sections = [],
      published = false,
    } = body as {
      title: string;
      subtitle?: string;
      description?: string;
      price?: number | string;
      duration?: string;
      level?: string;
      sections?: Array<{ id: string; title: string; lessons: Array<{ id: string; title: string; type: string; duration: string; videoUrl?: string }> }>;
      published?: boolean;
    };
    if (!title || typeof title !== 'string' || title.trim() === '') {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }
    const now = new Date();
    const doc = {
      title: title.trim(),
      subtitle: (subtitle ?? '').trim(),
      description: (description ?? '').trim(),
      price: typeof price === 'string' ? parseInt(price, 10) || 0 : Number(price) || 0,
      duration: (duration ?? '').trim(),
      level: (level ?? '').trim(),
      sections: Array.isArray(sections) ? sections : [],
      published: !!published,
      createdAt: now,
      updatedAt: now,
    };
    const ref = await adminDb.collection('courses').add(doc);
    return NextResponse.json({ id: ref.id, ...doc });
  } catch (err) {
    console.error('Admin create course error:', err);
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 });
  }
}
