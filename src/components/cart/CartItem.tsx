// src/components/cart/CartItem.tsx
"use client"

import type { CartItem as CartItemType } from "@/types/cart"
import { useCart } from "@/hooks/useCart"
import { Button } from "@/components/ui/Button"
import { Minus, Plus, Trash2 } from "lucide-react"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
      <img
        src={item.product.images[0] || "/placeholder.svg?height=80&width=80"}
        alt={item.product.name}
        className="w-20 h-20 object-cover rounded-md"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
        <p className="text-gray-600">${item.product.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{item.quantity}</span>
        <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="text-right">
        <p className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => removeItem(item.id)}
          className="text-red-600 hover:text-red-700"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
