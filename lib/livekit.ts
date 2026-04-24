// @ts-ignore
import { AccessToken } from 'livekit-server-sdk';

/**
 * Generate a LiveKit access token for a specific room and identity.
 * Tokens are ephemeral and expire after 1 hour by default.
 */
export async function generateLiveKitToken({
  room,
  identity,
  name,
}: {
  room: string;
  identity: string;
  name?: string;
}) {
  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;

  if (!apiKey || !apiSecret) {
    throw new Error('LIVEKIT_API_KEY and LIVEKIT_API_SECRET are not set');
  }

  const at = new AccessToken(apiKey, apiSecret, {
    identity,
    name: name || identity,
    ttl: '1h', // Ephemeral token valid for 1 hour
  });

  at.addGrant({
    roomJoin: true,
    room,
    canPublish: true,
    canSubscribe: true,
    canPublishData: true,
  });

  return await at.toJwt();
}
