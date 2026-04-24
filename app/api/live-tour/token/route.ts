import { generateLiveKitToken } from '@/lib/livekit';
// @ts-ignore
import { NextRequest, NextResponse } from 'next/server';

/**
 * API route to generate an ephemeral LiveKit access token.
 * Requires 'room' and 'identity' as search parameters.
 */
export async function GET(req: NextRequest) {
  const room = req.nextUrl.searchParams.get('room');
  const identity = req.nextUrl.searchParams.get('identity');
  const name = req.nextUrl.searchParams.get('name') || identity;

  if (!room || !identity) {
    return NextResponse.json(
      { error: 'Missing room or identity' },
      { status: 400 }
    );
  }

  try {
    const token = await generateLiveKitToken({
      room,
      identity,
      name,
    });

    return NextResponse.json({ token });
  } catch (error) {
    console.error('LiveKit Token Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate token' },
      { status: 500 }
    );
  }
}
