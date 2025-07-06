import Link from 'next/link';
import { Product } from '@/types/product';

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-lg p-4">
      <Link href={`/${product.categorySlug}/${product.slug}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
      </Link>
    </div>
  );
}