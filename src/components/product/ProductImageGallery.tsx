// src/components/product/ProductImageGallery.tsx
"use client"

import { useState } from "react"

interface ProductImageGalleryProps {
  images: string[]
}

export function ProductImageGallery({ images }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={images[selectedImage] || "/placeholder.svg?height=500&width=500"}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square bg-gray-200 rounded-md overflow-hidden border-2 ${
                selectedImage === index ? "border-blue-500" : "border-transparent"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
