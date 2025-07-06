// src/services/authService.ts
import type { User } from "@/types/user"

export async function login(email: string, password: string): Promise<{ user: User; token: string }> {
  const response = await fetch("/api/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, action: "login" }),
  })

  if (!response.ok) {
    throw new Error("Login failed")
  }

  return response.json()
}

export async function register(email: string, password: string, name: string): Promise<User> {
  const response = await fetch("/api/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, name, action: "register" }),
  })

  if (!response.ok) {
    throw new Error("Registration failed")
  }

  return response.json()
}

export async function forgotPassword(email: string): Promise<void> {
  const response = await fetch("/api/auth/forgot-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  })

  if (!response.ok) {
    throw new Error("Failed to send reset email")
  }
}
