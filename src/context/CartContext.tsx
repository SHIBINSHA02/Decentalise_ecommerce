// src/context/CartContext.tsx
"use client"

import { createContext, useContext, useReducer, type ReactNode } from "react"
import type { Product } from "@/types/product"
import type { CartItem, CartState } from "@/types/cart"

// Threshold constants
const MAX_QUANTITY_PER_ITEM = 10
const MAX_CART_TOTAL = 1000
const MIN_QUANTITY = 1

interface CartContextType extends CartState {
  addItem: (product: Product, quantity: number) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
}

// Export CartContext to be used in useCart.ts
export const CartContext = createContext<CartContextType | undefined>(undefined)

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: { itemId: string } }
  | { type: "UPDATE_QUANTITY"; payload: { itemId: string; quantity: number } }
  | { type: "CLEAR_CART" }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, quantity } = action.payload

      // Validate quantity
      if (quantity < MIN_QUANTITY) {
        console.warn(`Quantity must be at least ${MIN_QUANTITY}`)
        return state
      }
      if (quantity > MAX_QUANTITY_PER_ITEM) {
        console.warn(`Cannot add more than ${MAX_QUANTITY_PER_ITEM} of this item`)
        return state
      }

      const existingItem = state.items.find((item) => item.product.id === product.id)

      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity
        // Check if new quantity exceeds threshold
        if (newQuantity > MAX_QUANTITY_PER_ITEM) {
          console.warn(`Total quantity for this item cannot exceed ${MAX_QUANTITY_PER_ITEM}`)
          return state
        }

        const updatedItems = state.items.map((item) =>
          item.product.id === product.id ? { ...item, quantity: newQuantity } : item
        )

        // Calculate potential new total
        const newTotal = updatedItems.reduce(
          (sum, item) => sum + item.product.price * item.quantity,
          0
        )
        // Check if cart total exceeds threshold
        if (newTotal > MAX_CART_TOTAL) {
          console.warn(`Cart total cannot exceed $${MAX_CART_TOTAL}`)
          return state
        }

        return {
          ...state,
          items: updatedItems,
          total: newTotal,
          itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
        }
      }

      const newItem: CartItem = {
        id: `${product.id}-${Date.now()}`,
        product,
        quantity,
      }

      const updatedItems = [...state.items, newItem]
      // Calculate potential new total
      const newTotal = updatedItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      )
      // Check if cart total exceeds threshold
      if (newTotal > MAX_CART_TOTAL) {
        console.warn(`Cart total cannot exceed $${MAX_CART_TOTAL}`)
        return state
      }

      return {
        ...state,
        items: updatedItems,
        total: newTotal,
        itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
      }
    }

    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter((item) => item.id !== action.payload.itemId)
      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
        itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
      }
    }

    case "UPDATE_QUANTITY": {
      const { itemId, quantity } = action.payload
      // Validate quantity
      if (quantity < MIN_QUANTITY) {
        console.warn(`Quantity must be at least ${MIN_QUANTITY}. Removing item instead.`)
        return cartReducer(state, { type: "REMOVE_ITEM", payload: { itemId } })
      }
      if (quantity > MAX_QUANTITY_PER_ITEM) {
        console.warn(`Quantity cannot exceed ${MAX_QUANTITY_PER_ITEM}`)
        return state
      }

      const updatedItems = state.items.map((item) => (item.id === itemId ? { ...item, quantity } : item))
      // Calculate potential new total
      const newTotal = updatedItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      )
      // Check if cart total exceeds threshold
      if (newTotal > MAX_CART_TOTAL) {
        console.warn(`Cart total cannot exceed $${MAX_CART_TOTAL}`)
        return state
      }

      return {
        ...state,
        items: updatedItems,
        total: newTotal,
        itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
      }
    }

    case "CLEAR_CART":
      return {
        items: [],
        total: 0,
        itemCount: 0,
      }

    default:
      return state
  }
}

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItem = (product: Product, quantity: number) => {
    dispatch({ type: "ADD_ITEM", payload: { product, quantity } })
  }

  const removeItem = (itemId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { itemId } })
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { itemId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}