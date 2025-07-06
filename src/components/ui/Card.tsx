// src/components/ui/card.tsx
import { type HTMLAttributes, forwardRef } from "react"
import { clsx } from "clsx"

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={clsx("rounded-lg border border-gray-200 bg-white shadow-sm", className)} {...props} />
  )
})

Card.displayName = "Card"

export const CardHeader = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={clsx("flex flex-col space-y-1.5 p-6", className)} {...props} />
})

CardHeader.displayName = "CardHeader"

export const CardContent = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={clsx("p-6 pt-0", className)} {...props} />
})

CardContent.displayName = "CardContent"
