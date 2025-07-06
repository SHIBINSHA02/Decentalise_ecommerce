// src/app/(shop)/page.tsx
import { getCategories } from "@/services/productService"
import Link from "next/link"

export default async function ShopPage() {
  const categories = await getCategories()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Shop</h1>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map((category) => (
          <Link key={category.id} href={`/${category.slug}`} className="group block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 group-hover:bg-gray-300 transition-colors">
                <img
                  src={category.image || "/placeholder.svg?height=200&width=300"}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
