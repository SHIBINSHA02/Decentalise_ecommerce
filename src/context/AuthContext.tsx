// src/context/AuthContext.tsx
"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface AuthState {
  user: { id: string; email: string } | null
  isAuthenticated: boolean
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => void
  logout: () => void
}

// Export AuthContext as a named export
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthState["user"]>(null)

  const login = (email: string, password: string) => {
    // Sample login logic (replace with your actual authentication logic)
    setUser({ id: "1", email })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}