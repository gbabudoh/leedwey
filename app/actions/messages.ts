"use server"

import { prisma } from "@/lib/db"
import { Prisma } from "@prisma/client"
import { sanitizeCommunication, hasProtectedContent } from "@/lib/utils/sanitizer"
import { revalidatePath } from "next/cache"

/**
 * Sends a message with real-time sanitization and platform leakage protection.
 */
export async function sendMessage(formData: FormData) {
  const content = formData.get("content") as string
  const conversationId = formData.get("conversationId") as string
  const senderId = formData.get("senderId") as string
  const receiverId = formData.get("receiverId") as string

  if (!content || !conversationId || !senderId) {
    return { error: "Missing required fields" }
  }

  const sanitizedContent = sanitizeCommunication(content)
  const isFlagged = hasProtectedContent(content)

  try {
    const message = await prisma.$transaction(async (tx: any) => {
      // 1. Create the message
      const msg = await tx.message.create({
        data: {
          content: sanitizedContent,
          conversationId,
          senderId,
          receiverId,
          wasFlagged: isFlagged,
        },
      })

      // 2. If flagged, increment user strikes and log a flag for admin review
      if (isFlagged) {
        await tx.user.update({
          where: { id: senderId },
          data: { strikes: { increment: 1 } },
        })

        await tx.flag.create({
          data: {
            userId: senderId,
            messageId: msg.id,
            reason: "Attempted to share restricted contact information",
          },
        })
      }

      return msg
    })

    revalidatePath(`/messages/${conversationId}`)
    return { success: true, message }
  } catch (error) {
    console.error("SendMessage Error:", error)
    return { error: "Failed to send message" }
  }
}
