// src/components/auth/RegisterForm.tsx
"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { useRouter } from "next/navigation"

export function RegisterForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const { register } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      await register(email, password, name)
      router.push("/account")
    } catch (err) {
      setError("Registration failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input label="Full Name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />

      <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <Input
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? "Creating account..." : "Create Account"}
      </Button>
    </form>
  )
}
