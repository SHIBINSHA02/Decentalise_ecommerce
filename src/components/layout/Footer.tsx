import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{process.env.NEXT_PUBLIC_SITE_NAME || "E-Commerce"}</h3>
            <p className="text-gray-400">Your trusted online shopping destination.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/shop" className="hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/electronics" className="hover:text-white">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/clothing" className="hover:text-white">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/home" className="hover:text-white">
                  Home & Garden
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Account</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/account" className="hover:text-white">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/account/orders" className="hover:text-white">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-white">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {process.env.NEXT_PUBLIC_SITE_NAME || "E-Commerce"}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
