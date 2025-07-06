// src/app/(shop)/checkout/page.tsx
"use client"

import { useState } from "react"
import { useCart } from "@/hooks/useCart"
import { useAuth } from "@/hooks/useAuth"
import { CheckoutForm } from "@/components/forms/CheckoutForm"
import { OrderSummary } from "@/components/cart/OrderSummary"

export default function CheckoutPage() {
  const { items, total } = useCart()
  const { user } = useAuth()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (formData: any) => {
    setIsProcessing(true)
    try {
      // Process checkout
      console.log("Processing checkout:", formData)
    } catch (error) {
      console.error("Checkout error:", error)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <CheckoutForm onSubmit={handleSubmit} isProcessing={isProcessing} />
        </div>

        <div>
          <OrderSummary items={items} total={total} />
        </div>
      </div>
    </div>
  )
}
