import type { Product } from "@/types/product"
import { Star } from "lucide-react"

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

      <div className="flex items-center mb-4">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
            />
          ))}
        </div>
        <span className="ml-2 text-gray-600">({product.reviewCount} reviews)</span>
      </div>

      <div className="text-3xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</div>

      <div className="prose max-w-none mb-6">
        <p className="text-gray-700">{product.description}</p>
      </div>

      <div className="space-y-4">
        <div>
          <span className="font-medium text-gray-900">SKU: </span>
          <span className="text-gray-600">{product.sku}</span>
        </div>

        <div>
          <span className="font-medium text-gray-900">Category: </span>
          <span className="text-gray-600">{product.category.name}</span>
        </div>

        <div>
          <span className="font-medium text-gray-900">Stock: </span>
          <span className={`${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </span>
        </div>
      </div>
    </div>
  )
}
