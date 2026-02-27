import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const admin = await requireAdmin(request);
    return NextResponse.json({ isAdmin: !!admin });
  } catch (err) {
    console.error('[api/admin/me]', err);
    return NextResponse.json({ isAdmin: false, error: 'Server error' });
  }
}
