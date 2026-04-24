"use server"

import { prisma } from "@/lib/db"
import { Prisma } from "@prisma/client"
import { revalidatePath } from "next/cache"

/**
 * Creates an order with automated milestones based on the order type.
 */
export async function createOrderWithMilestones(formData: FormData) {
  const buyerId = formData.get("buyerId") as string
  const sellerId = formData.get("sellerId") as string
  const totalAmount = parseFloat(formData.get("amount") as string)
  const category = formData.get("category") as string
  const orderType = formData.get("orderType") as "READY_TO_SHIP" | "CUSTOM"

  if (!buyerId || !sellerId || !totalAmount) {
    return { error: "Missing required fields" }
  }

  // 1. Calculate Milestones logic
  const milestoneMap = orderType === "READY_TO_SHIP"
    ? [{ desc: "100% Full Escrow Payment", pct: 1.0 }]
    : [
        { desc: "30% Initial Deposit", pct: 0.3 },
        { desc: "40% Production Proof", pct: 0.4 },
        { desc: "30% Final Inspection", pct: 0.3 }
      ]

  try {
    const newOrder = await prisma.$transaction(async (tx: any) => {
      const order = await tx.order.create({
        data: {
          buyerId,
          sellerId,
          total: totalAmount,
          subtotal: totalAmount,
          orderNumber: `LW-${Math.floor(100000 + Math.random() * 900000)}`,
          status: "PENDING",
          currency: "USD",
          shippingAddress: {}, // Placeholder
          milestones: {
            create: milestoneMap.map(m => ({
              description: m.desc,
              amount: totalAmount * m.pct,
              status: "PENDING"
            }))
          }
        }
      })
      return order
    })

    revalidatePath(`/dashboard/orders/${newOrder.id}`)
    return { success: true, orderId: newOrder.id }
  } catch (error) {
    console.error("CreateOrder Error:", error)
    return { error: "Failed to create order" }
  }
}
