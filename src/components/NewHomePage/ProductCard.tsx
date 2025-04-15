"use client"
import { useState } from "react"
import Image from "next/image"
import { Heart, RefreshCw, ShoppingBag } from "lucide-react"
import { type Product, getColorClass } from "./data/products"

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [showBackImage, setShowBackImage] = useState(false)
  
  // Toggle between front and back images
  const toggleImage = () => {
    setShowBackImage(!showBackImage)
  }
  
  return (
    <div
      className="group animate-fade-in-50 animate-slide-in-from-bottom-5"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative aspect-square bg-background overflow-hidden mb-2 transition-transform duration-300 group-hover:scale-[1.02] shadow-sm">
        {/* Product Image */}
        <Image
          src={showBackImage ? product.backImage : product.frontImage}
          alt={product.name}
          fill
          className="object-cover transition-opacity duration-500"
        />
        
        {/* Image Toggle Button - higher z-index */}
        <button
          onClick={toggleImage}
          className="absolute top-2 left-2 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm text-gray-800 flex items-center justify-center hover:bg-white transition-colors z-30"
          aria-label="Toggle product view"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
        
        {/* Wishlist Button - higher z-index */}
        <button className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm text-gray-800 flex items-center justify-center hover:bg-white transition-colors z-30 group-hover:animate-pulse">
          <Heart className="h-4 w-4" />
        </button>
        
        {/* Background Overlay - Only blurs the background, not the button */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 z-10"></div>
        
        {/* Buy Button - Appears on Hover (moved outside the overlay for clarity) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button className="bg-orange-500 hover:bg-blue-600 text-white px-6 py-2 flex items-center gap-2 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 font-medium">
            <ShoppingBag className="h-4 w-4" />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
      
      {/* Product Info - increased z-index */}
      <div className="relative z-40">
        <h3 className="font-medium text-lg font-heading2">{product.name}</h3>
        <p className="text-xs text-zinc-500">By {product.brand}</p>
        <p className="font-medium text-orange-500">$ {product.price}</p>
      </div>
      <div className="flex gap-1 mt-1 relative z-40">
        {product.colors.map((color, index) => (
          <span key={index} className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full border ${getColorClass(color)}`} />
        ))}
        {product.colors.length > 4 && <span className="text-xs text-zinc-500">+{product.colors.length - 4}</span>}
      </div>
    </div>
  )
}