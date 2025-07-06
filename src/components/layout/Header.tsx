"use client"

import Link from "next/link"
import { useCart } from "@/hooks/useCart"
import { useAuth } from "@/hooks/useAuth"
import { ShoppingCart, User, Search } from "lucide-react"
import { MiniCart } from "@/components/cart/MiniCart"
import { useState } from "react"

export function Header() {
  const { itemCount } = useCart()
  const { user } = useAuth()
  const [showMiniCart, setShowMiniCart] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            {process.env.NEXT_PUBLIC_SITE_NAME || "E-Commerce"}
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-blue-600">
              Shop
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/search" className="text-gray-700 hover:text-blue-600">
              <Search className="h-5 w-5" />
            </Link>

            <div className="relative">
              <button
                onClick={() => setShowMiniCart(!showMiniCart)}
                className="text-gray-700 hover:text-blue-600 relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
              {showMiniCart && <MiniCart onClose={() => setShowMiniCart(false)} />}
            </div>

            {user ? (
              <Link href="/account" className="text-gray-700 hover:text-blue-600">
                <User className="h-5 w-5" />
              </Link>
            ) : (
              <Link href="/auth/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
