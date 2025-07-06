// src/app/(shop)/cart/page.tsx
import { CartItem } from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/CartSummary';
import { getProducts } from '@/services/productService';

export default async function CartPage() {
  const products = await getProducts();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
        <CartSummary />
      </div>
    </div>
  );
}