
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { clsx } from "clsx"

const categories = [
  { name: "Electronics", slug: "electronics" },
  { name: "Clothing", slug: "clothing" },
  { name: "Home & Garden", slug: "home-garden" },
  { name: "Sports", slug: "sports" },
  { name: "Books", slug: "books" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-gray-50 p-6">
      <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
      <nav className="space-y-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/${category.slug}`}
            className={clsx(
              "block px-3 py-2 rounded-md text-sm font-medium",
              pathname === `/${category.slug}` ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100",
            )}
          >
            {category.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
