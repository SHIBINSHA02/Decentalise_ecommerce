// src/app/(shop)/account/page.tsx
"use client"

import { useAuth } from "@/hooks/useAuth"
import { AccountDashboard } from "@/components/auth/AccountDashboard"
import { redirect } from "next/navigation"

export default function AccountPage() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!user) {
    redirect("/auth/login")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      <AccountDashboard user={user} />
    </div>
  )
}
