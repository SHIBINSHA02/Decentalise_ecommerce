// src/services/orderService.ts
import type { Order } from "@/types/order"

export async function createOrder(orderData: any): Promise<Order> {
  const response = await fetch("/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  })

  if (!response.ok) {
    throw new Error("Failed to create order")
  }

  return response.json()
}

export async function getOrderHistory(userId: string): Promise<Order[]> {
  const response = await fetch(`/api/orders?userId=${userId}`)

  if (!response.ok) {
    throw new Error("Failed to fetch order history")
  }

  return response.json()
}

export async function getOrderById(orderId: string): Promise<Order | null> {
  const response = await fetch(`/api/orders/${orderId}`)

  if (!response.ok) {
    return null
  }

  return response.json()
}
