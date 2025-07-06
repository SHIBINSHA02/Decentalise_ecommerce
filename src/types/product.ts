export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  images: string[]
  category: Category
  categoryId: string
  stock: number
  sku: string
  rating: number
  reviewCount: number
  createdAt: Date
  updatedAt: Date
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image?: string
}
