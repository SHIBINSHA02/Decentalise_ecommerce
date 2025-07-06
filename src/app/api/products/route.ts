// src/app/api/products/route.ts
import { type NextRequest, NextResponse } from "next/server"
import { getProducts } from "@/services/productService"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const search = searchParams.get("search")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    const products = await getProducts({
      category,
      search,
      limit,
      offset,
    })

    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}
