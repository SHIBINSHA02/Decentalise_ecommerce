import type { Product, Category } from "@/types/product"

// Mock data - replace with actual API calls
const mockCategories: Category[] = [
  { id: "1", name: "Electronics", slug: "electronics", description: "Latest electronic devices" },
  { id: "2", name: "Clothing", slug: "clothing", description: "Fashion and apparel" },
  { id: "3", name: "Home & Garden", slug: "home-garden", description: "Home improvement and garden supplies" },
]

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Smartphone",
    slug: "smartphone",
    description: "Latest smartphone with advanced features",
    price: 699.99,
    images: ["/placeholder.svg?height=400&width=400"],
    category: mockCategories[0],
    categoryId: "1",
    stock: 10,
    sku: "PHONE-001",
    rating: 4.5,
    reviewCount: 128,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Add more mock products...
]

export async function getProducts(options?: {
  category?: string | null
  search?: string | null
  limit?: number
  offset?: number
}): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  let filteredProducts = mockProducts

  if (options?.category) {
    filteredProducts = filteredProducts.filter((p) => p.category.slug === options.category)
  }

  if (options?.search) {
    const searchTerm = options.search.toLowerCase()
    filteredProducts = filteredProducts.filter(
      (p) => p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm),
    )
  }

  const start = options?.offset || 0
  const end = start + (options?.limit || filteredProducts.length)

  return filteredProducts.slice(start, end)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockProducts.find((p) => p.slug === slug) || null
}

export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockProducts.filter((p) => p.categoryId === categoryId)
}

export async function getFeaturedProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockProducts.slice(0, 4)
}

export async function getRelatedProducts(productId: string, categoryId: string): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockProducts.filter((p) => p.categoryId === categoryId && p.id !== productId).slice(0, 4)
}

export async function searchProducts(query: string): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  const searchTerm = query.toLowerCase()
  return mockProducts.filter(
    (p) => p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm),
  )
}

export async function getCategories(): Promise<Category[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockCategories
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockCategories.find((c) => c.slug === slug) || null
}
