// src/components/cart/MiniCart.tsx
"use client"

import { useCart } from "@/hooks/useCart"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { useEffect, useRef } from "react"

interface MiniCartProps {
  onClose: () => void
}

export function MiniCart({ onClose }: MiniCartProps) {
  const { items, total, itemCount } = useCart()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [onClose])

  return (
    <div
      ref={ref}
      className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
    >
      <div className="p-4">
        <h3 className="font-semibold mb-4">Shopping Cart ({itemCount})</h3>

        {items.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
              {items.slice(0, 3).map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <img
                    src={item.product.images[0] || "/placeholder.svg?height=40&width=40"}
                    alt={item.product.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.product.name}</p>
                    <p className="text-xs text-gray-600">
                      {item.quantity} × ${item.product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              {items.length > 3 && <p className="text-sm text-gray-600">+{items.length - 3} more items</p>}
            </div>

            <div className="border-t pt-3">
              <div className="flex justify-between font-semibold mb-3">
                <span>Total: ${total.toFixed(2)}</span>
              </div>

              <div className="space-y-2">
                <Link href="/cart" onClick={onClose}>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Cart
                  </Button>
                </Link>
                <Link href="/checkout" onClick={onClose}>
                  <Button className="w-full">Checkout</Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
