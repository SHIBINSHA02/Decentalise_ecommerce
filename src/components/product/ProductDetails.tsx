// src/components/product/ProductDetails.tsx
import ProductDetails from '@/components/product/ProductDetails'; // Changed to default import
import { getProductBySlug } from '@/services/productService';

type Props = {
  params: { categorySlug: string; productSlug: string };
};

export default async function ProductPage({ params }: Props) {
  const product = await getProductBySlug(params.productSlug);
  return (
    <div className="container mx-auto p-4">
      <ProductDetails product={product} />
    </div>
  );
}