import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const COOKIE_NAME = 'mvfrwd_visit_sess';
const COUNTER_KEY = 'mvfrwd:total_visits';
const SESSION_TTL_SECONDS = 60 * 60 * 24; // 24 hours

// Initialize Redis client using environment variables
function getRedisClient(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  return new Redis({ url, token });
}

// GET: Purely fetch current visit count without incrementing
export async function GET() {
  try {
    const redis = getRedisClient();
    if (!redis) {
      return NextResponse.json({ count: null }, { status: 200 });
    }

    const currentCount = (await redis.get<number>(COUNTER_KEY)) || 0;
    return NextResponse.json({ count: currentCount }, { status: 200 });
  } catch (error) {
    console.error('[VISITOR_COUNT GET ERROR]', error);
    return NextResponse.json({ count: null }, { status: 200 });
  }
}

// POST: Deduplicate session and increment total visits
export async function POST(req: NextRequest) {
  try {
    const redis = getRedisClient();
    if (!redis) {
      return NextResponse.json({ count: null }, { status: 200 });
    }

    const hasSessionCookie = req.cookies.get(COOKIE_NAME);

    // If the visitor already has an active 24h session cookie, do not increment
    if (hasSessionCookie) {
      const currentCount = (await redis.get<number>(COUNTER_KEY)) || 0;
      return NextResponse.json({ count: currentCount }, { status: 200 });
    }

    // Atomic increment for new sessions
    const newCount = await redis.incr(COUNTER_KEY);

    // Return updated count and set the 24-hour deduplication cookie
    const response = NextResponse.json({ count: newCount }, { status: 200 });
    response.cookies.set({
      name: COOKIE_NAME,
      value: '1',
      maxAge: SESSION_TTL_SECONDS,
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });

    return response;
  } catch (error) {
    console.error('[VISITOR_COUNT POST ERROR]', error);
    // Graceful fallback without breaking client UI
    return NextResponse.json({ count: null }, { status: 200 });
  }
}