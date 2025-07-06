// src/components/cart/CartSummary.tsx
'use client';

import { useCart } from '@/context/CartContext';
import { getProducts } from '@/services/productService';
import { useState, useEffect } from 'react';

export function CartSummary() {
  const { cart } = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = async () => {
      const products = await getProducts();
      const totalPrice = cart.reduce((sum, item) => {
        const product = products.find((p) => p.id === item.productId);
        return product ? sum + product.price * item.quantity : sum;
      }, 0);
      setTotal(totalPrice);
    };
    calculateTotal();
  }, [cart]);

  return (
    <div className="border p-4">
      <h2 className="text-xl font-bold">Cart Summary</h2>
      <p>Total: ${total.toFixed(2)}</p>
      <button className="bg-green-500 text-white p-2 mt-4 w-full">
        Proceed to Checkout
      </button>
    </div>
  );
}