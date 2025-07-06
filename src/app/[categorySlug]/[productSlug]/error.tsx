// src/app/[categorySlug]/[productSlug]/error.tsx
'use client';

import { useEffect } from 'react';

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    // Log the error for debugging (optional)
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-red-500">Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Try again
      </button>
    </div>
  );
}