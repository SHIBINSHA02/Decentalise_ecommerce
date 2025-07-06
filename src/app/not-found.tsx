// src/app/not-found.tsx
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
        <p className="mt-4 text-gray-600">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}