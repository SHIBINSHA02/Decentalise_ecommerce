import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-lg font-bold">
          My Ecommerce
        </Link>
        <div>
          <Link href="/cart" className="mr-4">
            Cart
          </Link>
          <Link href="/account">Account</Link>
        </div>
      </nav>
    </header>
  );
}