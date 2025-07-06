// src/services/cartService.ts
export async function addToCart(productId: string, quantity: number): Promise<void> {
  const response = await fetch("/api/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, quantity }),
  })

  if (!response.ok) {
    throw new Error("Failed to add item to cart")
  }
}

export async function updateCartItem(itemId: string, quantity: number): Promise<void> {
  const response = await fetch("/api/cart", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ itemId, quantity }),
  })

  if (!response.ok) {
    throw new Error("Failed to update cart item")
  }
}

export async function removeFromCart(itemId: string): Promise<void> {
  const response = await fetch(`/api/cart/${itemId}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error("Failed to remove item from cart")
  }
}
