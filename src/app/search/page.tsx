// src/app/search/page.tsx
import { searchProducts } from "@/services/productService"
import { ProductCard } from "@/components/product/ProductCard"
import { SearchForm } from "@/components/forms/SearchForm"

interface SearchPageProps {
  searchParams: {
    q?: string
  }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ""
  const products = query ? await searchProducts(query) : []

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Search Products</h1>
        <SearchForm initialQuery={query} />
      </div>

      {query && (
        <div className="mb-6">
          <p className="text-gray-600">
            {products.length} results for "{query}"
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {query && products.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-600">No products found for "{query}"</p>
        </div>
      )}
    </div>
  )
}
