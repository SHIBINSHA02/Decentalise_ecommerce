import { Product } from '@/types/product';
import { AddToCartButton } from '@/components/product/AddToCartButton';

type Props = {
  product: Product;
};

export default function ProductDetails({ product }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-64 object-cover" />
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-xl text-gray-600">${product.price}</p>
        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <AddToCartButton productId={product.id} />
      </div>
    </div>
  );
}