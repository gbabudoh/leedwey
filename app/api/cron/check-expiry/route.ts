import { prisma } from "@/lib/db";
import { triggerNotification } from "@/lib/novu";
import { NextResponse } from "next/server";

/**
 * Cron job to check for expiring business licenses and certifications.
 * Triggers Novu alerts 30 days and 7 days before expiry.
 */
export async function GET() {
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

  const sevenDaysFromNow = new Date();
  sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7);

  try {
    const expiringDocs = await (prisma as any).verificationDoc.findMany({
      where: {
        expiryDate: { lte: thirtyDaysFromNow },
        isExpired: false,
      },
      include: { user: true },
    });

    for (const doc of expiringDocs) {
      const daysLeft = Math.ceil((doc.expiryDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
      
      if (daysLeft <= 0) {
        // Mark as expired and restrict user
        await prisma.$transaction([
          (prisma as any).verificationDoc.update({
            where: { id: doc.id },
            data: { isExpired: true },
          }),
          prisma.user.update({
            where: { id: doc.userId },
            data: { status: "PENDING" }, // Revoke verification
          }),
        ]);

        await triggerNotification("doc-expired", doc.userId, {
          docType: doc.type,
        });
      } else if (daysLeft <= 7 || daysLeft === 30) {
        // Send reminders
        await triggerNotification("doc-expiry-reminder", doc.userId, {
          docType: doc.type,
          daysLeft,
        });
      }
    }

    return NextResponse.json({ success: true, processed: expiringDocs.length });
  } catch (error) {
    console.error("Expiry Cron Error:", error);
    return NextResponse.json({ error: "Failed to process expiries" }, { status: 500 });
  }
}
