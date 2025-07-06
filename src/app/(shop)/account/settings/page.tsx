// src/app/(shop)/account/settings/page.tsx
"use client"

import { AccountSettings } from "@/components/auth/AccountSettings"

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
      <AccountSettings />
    </div>
  )
}
