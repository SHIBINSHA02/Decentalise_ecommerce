// src/components/cart/CartItem.tsx
'use client';

import { useCart } from '@/context/CartContext';
import { Product } from '@/types/product';

type Props = {
  product: Product;
};

export function CartItem({ product }: Props) {
  const { cart, removeFromCart } = useCart();
  const cartItem = cart.find((item) => item.productId === product.id);

  if (!cartItem) return null;

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h3 className="text-lg">{product.name}</h3>
        <p>Quantity: {cartItem.quantity}</p>
        <p>${product.price * cartItem.quantity}</p>
      </div>
      <button
        onClick={() => removeFromCart(product.id)}
        className="text-red-500"
      >
        Remove
      </button>
    </div>
  );
}