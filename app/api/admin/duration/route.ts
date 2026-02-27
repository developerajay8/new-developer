import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

/** Parse YouTube watch page HTML for lengthSeconds (no API key). */
function parseYouTubeDuration(html: string): number | null {
  const patterns = [
    /"lengthSeconds"\s*:\s*"(\d+)"/,
    /"lengthSeconds"\s*:\s*(\d+)/,
    /lengthSeconds["\s:]+(\d+)/,
  ];
  for (const p of patterns) {
    const m = html.match(p);
    if (m) return parseInt(m[1], 10);
  }
  return null;
}

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');
  if (!url || typeof url !== 'string') {
    return NextResponse.json({ error: 'Missing url' }, { status: 400 });
  }

  const trimmed = url.trim();

  if (/youtube\.com|youtu\.be/.test(trimmed)) {
    try {
      const res = await fetch(trimmed, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
      });
      const html = await res.text();
      const seconds = parseYouTubeDuration(html);
      if (seconds != null) return NextResponse.json({ seconds });
    } catch (err) {
      console.error('[duration] YouTube fetch error:', err);
    }
    return NextResponse.json({ error: 'Could not get YouTube duration' }, { status: 422 });
  }

  return NextResponse.json({ error: 'Only YouTube URLs supported for server duration' }, { status: 400 });
}
