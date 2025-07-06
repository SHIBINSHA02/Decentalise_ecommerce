import Link from "next/link"
import type { Product } from "@/types/product"
import { AddToCartButton } from "./AddToCartButton"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/${product.category.slug}/${product.slug}`}>
        <div className="aspect-square bg-gray-200">
          <img
            src={product.images[0] || "/placeholder.svg?height=300&width=300"}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/${product.category.slug}/${product.slug}`}>
          <h3 className="font-semibold text-gray-900 hover:text-blue-600 mb-2">{product.name}</h3>
        </Link>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <AddToCartButton product={product} size="sm" />
        </div>
      </div>
    </div>
  )
}
