"use client"

import type { ReactNode } from "react"

interface PaginationButtonProps {
  onClick: () => void
  disabled?: boolean
  isActive?: boolean
  isAnimating?: boolean
  variant: "white" | "orange"
  children?: ReactNode
  number?: number
}

export default function PaginationButton({
  onClick,
  disabled = false,
  isActive = false,
  isAnimating = false,
  variant,
  children,
  number,
}: PaginationButtonProps) {
  // Determine styles based on variant and state
  const getButtonStyles = () => {
    const baseStyles = "flex items-center justify-center rounded-md"
    const animationStyles = isAnimating ? "animate-bounce-small" : ""

    if (number !== undefined) {
      // Number button styles
      if (variant === "white") {
        return `${baseStyles} w-6 h-6 text-xs font-medium ${
          isActive ? "bg-white text-orange-500" : "bg-transparent text-white border border-white"
        } ${animationStyles}`
      } else {
        return `${baseStyles} w-6 h-6 text-xs font-medium ${
          isActive ? "bg-orange-500 text-white" : "bg-transparent text-gray-800 border border-gray-300"
        } ${animationStyles}`
      }
    } else {
      // Arrow button styles
      if (variant === "white") {
        return `${baseStyles} h-8 w-8 border ${
          disabled ? "text-white/50" : "text-white"
        } border-white ${animationStyles}`
      } else {
        return `${baseStyles} h-8 w-8 border ${
          disabled ? "opacity-50" : ""
        } border-orange-500 text-orange-500 ${animationStyles}`
      }
    }
  }

  return (
    <button onClick={onClick} disabled={disabled} className={getButtonStyles()}>
      {children || number}
    </button>
  )
}
