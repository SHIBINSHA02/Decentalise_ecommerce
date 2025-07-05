// src/components/layout/Footer.tsx
export function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_NAME || 'E-Commerce'}. All rights reserved.</p>
      <div className="mt-2">
        <a href="/about" className="mx-2 hover:underline">About</a>
        <a href="/contact" className="mx-2 hover:underline">Contact</a>
        <a href="/privacy" className="mx-2 hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
}