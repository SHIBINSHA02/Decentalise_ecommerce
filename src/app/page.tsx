import { ProductCard } from '@/components/product/ProductCard';
import { getProducts } from '@/services/productService';

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to My Ecommerce</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}