// src/app/[categorySlug]/page.tsx
import { ProductCard } from '@/components/product/ProductCard';
import { getProducts } from '@/services/productService';

type Props = {
  params: { categorySlug: string };
};

export default async function CategoryPage({ params }: Props) {
  const products = await getProducts(params.categorySlug);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Category: {params.categorySlug}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}