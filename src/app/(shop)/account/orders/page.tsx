// src/app/(shop)/account/orders/page.tsx
"use client"

import { useAuth } from "@/hooks/useAuth"
import { OrderHistory } from "@/components/auth/OrderHistory"

export default function OrdersPage() {
  const { user } = useAuth()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Order History</h1>
      <OrderHistory userId={user?.id} />
    </div>
  )
}
