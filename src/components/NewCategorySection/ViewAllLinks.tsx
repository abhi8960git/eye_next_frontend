"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ViewAllLinkProps {
  href?: string
}

export function ViewAllLink({ href = "#" }: ViewAllLinkProps) {
  return (
    <Link href={href} className="group inline-flex items-center text-sm font-medium">
      <span className="mr-1 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-orange-400">
        <ArrowRight className="h-4 w-4" />
      </span>
      <span className="transition-colors duration-200 group-hover:text-orange-400">View All Products</span>
    </Link>
  )
}
