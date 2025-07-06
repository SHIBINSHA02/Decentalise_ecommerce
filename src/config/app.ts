// src/config/app.ts
export const appConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "E-Commerce Store",
  description: "Modern e-commerce application built with Next.js",
  url: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  currency: "USD",
  defaultLocale: "en-US",
}
