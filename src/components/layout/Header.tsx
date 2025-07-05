// src/components/layout/Header.tsx
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          {process.env.NEXT_PUBLIC_SITE_NAME || 'E-Commerce'}
        </Link>
        <div className="flex space-x-4">
          <Link href="/shop" className="hover:underline">Shop</Link>
          <Link href="/cart" className="hover:underline">Cart</Link>
          <Link href="/account" className="hover:underline">Account</Link>
        </div>
      </nav>
    </header>
  );
}