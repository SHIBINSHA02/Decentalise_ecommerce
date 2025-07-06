"use client"

import { useCart } from "@/hooks/useCart"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export function CartSummary() {
  const { total, itemCount } = useCart()
  const shipping = 10.0
  const tax = total * 0.08

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Subtotal ({itemCount} items)</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t pt-2">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${(total + shipping + tax).toFixed(2)}</span>
          </div>
        </div>
      </div>

      <Link href="/checkout">
        <Button className="w-full">Proceed to Checkout</Button>
      </Link>
    </div>
  )
}
