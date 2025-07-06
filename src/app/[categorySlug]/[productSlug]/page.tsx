import { getProductBySlug, getRelatedProducts } from "@/services/productService"
import { ProductDetails } from "@/components/product/ProductDetails"
import { ProductImageGallery } from "@/components/product/ProductImageGallery"
import { AddToCartButton } from "@/components/product/AddToCartButton"
import { ProductCard } from "@/components/product/ProductCard"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: {
    categorySlug: string
    productSlug: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.productSlug)

  if (!product) {
    notFound()
  }

  const relatedProducts = await getRelatedProducts(product.id, product.categoryId)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <ProductImageGallery images={product.images} />

        <div>
          <ProductDetails product={product} />
          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
