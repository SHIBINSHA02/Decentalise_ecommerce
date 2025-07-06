// src/constants/index.ts
export const API_ENDPOINTS = {
  PRODUCTS: "/api/products",
  CART: "/api/cart",
  AUTH: "/api/auth",
  ORDERS: "/api/orders",
} as const

export const ROUTES = {
  HOME: "/",
  SHOP: "/shop",
  CART: "/cart",
  CHECKOUT: "/checkout",
  ACCOUNT: "/account",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
} as const

export const PRODUCT_LIMITS = {
  FEATURED: 4,
  RELATED: 4,
  PER_PAGE: 12,
} as const
