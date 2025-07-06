// src/app/api/auth/route.ts
import { type NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, action } = body

    if (action === "login") {
      // Login logic here
      const user = { id: 1, email, name: "John Doe" } // Mock user
      const token = jwt.sign({ userId: user.id }, process.env.NEXTAUTH_SECRET!)

      return NextResponse.json({ user, token })
    }

    if (action === "register") {
      // Registration logic here
      const hashedPassword = await bcrypt.hash(password, 12)
      const user = { id: 1, email, name: body.name } // Mock user

      return NextResponse.json({ user })
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}
