"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import type { Product } from "./data/products"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square relative">
        <Image src={product.imageUrl || "/placeholder.svg"} alt={product.title} fill className="object-cover" />

        {/* Add link icon similar to design cards */}
        <a
          href="#"
          className="absolute top-2 right-2 bg-orange-500 text-white w-8 h-8 rounded-md flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.preventDefault()
            // Add your link action here
            console.log(`Clicked on product: ${product.title}`)
          }}
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <div className="mt-2">
        <h3 className="text-sm font-medium truncate">{product.title}</h3>
        <p className="text-xs text-gray-500 truncate">{product.category}</p>
        <p className="text-sm font-bold mt-1">${product.price}</p>
      </div>
    </div>
  )
}
