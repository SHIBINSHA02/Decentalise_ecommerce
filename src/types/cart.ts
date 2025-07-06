// src/types/cart.ts
import type { Product } from "./product"

export interface CartItem {
  id: string
  product: Product
  quantity: number
}

export interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}
