"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import type { Design } from "@/data/designs"

interface DesignCardProps {
  design: Design
  showNumber?: boolean
  number?: number
  showLinkIcon?: boolean
}

export default function DesignCard({ design, showNumber = false, number, showLinkIcon = false }: DesignCardProps) {
  return (
    <div className="relative rounded-lg overflow-hidden group">
      <div className="relative aspect-square">
        <Image src={design.imageUrl || "/placeholder.svg"} alt={design.title} fill className="object-cover" />

        {/* Show numbering if requested */}
        {showNumber && number && (
          <div className="absolute top-2 left-2 bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg border-2 border-white">
            #{number}
          </div>
        )}

        {/* Link icon */}
        {showLinkIcon && (
          <a
            href="#"
            className="absolute top-2 right-2 bg-orange-500 text-white w-8 h-8 rounded-md flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.preventDefault()
              // Add your link action here
              console.log(`Clicked on design: ${design.title}`)
            }}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-sm text-white">
        <h3 className="text-sm font-medium truncate">{design.title}</h3>
        <p className="text-xs text-white/90 truncate">by {design.artist}</p>
      </div>
    </div>
  )
}
