"use server"

import { triggerNotification } from "@/lib/novu"

/**
 * Triggers a Live Factory Tour request notification via Novu.
 */
export async function triggerTourRequest({
  manufacturerId,
  buyerName,
  orderId,
}: {
  manufacturerId: string;
  buyerName: string;
  orderId: string;
}) {
  const roomName = `tour_${orderId}_${Math.floor(Date.now() / 1000)}`;

  try {
    await triggerNotification('factory-tour-request', manufacturerId, {
      buyerName,
      orderId,
      roomName,
      joinUrl: `${process.env.APP_URL}/dashboard/tour/${roomName}`,
    });

    return { success: true, roomName };
  } catch (error) {
    console.error("TourRequest Error:", error);
    return { error: "Failed to request tour" };
  }
}
