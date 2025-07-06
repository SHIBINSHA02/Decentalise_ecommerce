"use client"

import { useState } from "react"
import { useCart } from "@/hooks/useCart"
import type { Product } from "@/types/product"
import { Button } from "@/components/ui/Button"
import { ShoppingCart } from "lucide-react"

interface AddToCartButtonProps {
  product: Product
  size?: "sm" | "md" | "lg"
}

export function AddToCartButton({ product, size = "md" }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async () => {
    setIsAdding(true)
    try {
      await addItem(product, 1)
    } catch (error) {
      console.error("Failed to add item to cart:", error)
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isAdding || product.stock === 0}
      size={size}
      className="flex items-center gap-2"
    >
      <ShoppingCart className="h-4 w-4" />
      {isAdding ? "Adding..." : "Add to Cart"}
    </Button>
  )
}
