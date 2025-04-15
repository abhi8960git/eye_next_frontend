"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Product } from "./data/products"
import ProductCard from "./ProductCard"

interface ProductGridProps {
  products: Product[]
  title: string
  productsPerPage?: number
}

export default function ProductGrid({ products, title, productsPerPage = 6 }: ProductGridProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const totalProducts = products.length
  const totalPages = Math.ceil(totalProducts / productsPerPage)

  // Current products to display based on pagination
  const currentProducts = products.slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage)

  // Go to specific page
  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <section className="container mx-auto px-4 py-4 sm:py-6">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading1">{title}</h2>
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => goToPage(Math.max(0, currentPage - 1))}
            className="h-6 w-6 sm:h-8 sm:w-8 rounded-md border border-orange-500 bg-white text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous page"
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
          <button
            onClick={() => goToPage(Math.min(totalPages - 1, currentPage + 1))}
            className="h-6 w-6 sm:h-8 sm:w-8 rounded-md border border-orange-500 bg-white text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next page"
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-4">
        {currentProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      {/* Pagination numbers */}
      <div className="flex justify-center mt-6 sm:mt-8">
        <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`h-8 w-8 flex items-center justify-center rounded-md transition-colors ${
                currentPage === index
                  ? "bg-orange-500 text-white"
                  : "bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

