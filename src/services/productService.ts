// src/services/productService.ts
import { Product } from '@/types/product';

export async function getProducts(categorySlug?: string): Promise<Product[]> {
  const products = [
    {
      id: '1',
      name: 'Sample Product 1',
      price: 99.99,
      image: '/sample1.jpg',
      categorySlug: 'electronics',
      slug: 'sample-product-1',
    },
    {
      id: '2',
      name: 'Sample Product 2',
      price: 149.99,
      image: '/sample2.jpg',
      categorySlug: 'electronics',
      slug: 'sample-product-2',
    },
    {
      id: '3',
      name: 'Sample Product 3',
      price: 49.99,
      image: '/sample3.jpg',
      categorySlug: 'clothing',
      slug: 'sample-product-3',
    },
  ];
  return categorySlug ? products.filter((p) => p.categorySlug === categorySlug) : products;
}

export async function getProductBySlug(slug: string): Promise<Product> {
  const products = await getProducts();
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    throw new Error(`Product with slug ${slug} not found`);
  }
  return product;
}