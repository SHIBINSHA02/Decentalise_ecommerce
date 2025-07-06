// src/lib/api/strapi.ts
import axios from 'axios';
import { Product } from '@/types/product';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api';

export async function getProducts(categorySlug?: string): Promise<Product[]> {
  const response = await axios.get(`${API_URL}/products${categorySlug ? `?filters[categorySlug][$eq]=${categorySlug}` : ''}`);
  return response.data.data.map((item: any) => ({
    id: item.id,
    name: item.attributes.name,
    price: item.attributes.price,
    image: item.attributes.image,
    categorySlug: item.attributes.categorySlug,
    slug: item.attributes.slug,
  }));
}