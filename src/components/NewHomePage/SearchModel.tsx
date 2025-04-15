"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react"
import type { Product } from "./data/products"
import ProductCard from "./ProductCard"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  products: Product[]
}

export default function SearchModal({ isOpen, onClose, products }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [popularProductsPage, setPopularProductsPage] = useState(0)
  const popularProductsPerPage = 6

  // Popular products for search modal
  const popularProducts = [...products].sort(() => 0.5 - Math.random())

  // Calculate total popular products pages and current page items
  const totalPopularPages = Math.ceil(popularProducts.length / popularProductsPerPage)
  const currentPopularProducts = popularProducts.slice(
    popularProductsPage * popularProductsPerPage,
    (popularProductsPage + 1) * popularProductsPerPage,
  )

  // Handle search input change
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)

    if (query.trim() === "") {
      setSearchResults([])
    } else {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.brand.toLowerCase().includes(query.toLowerCase()),
      )
      setSearchResults(filtered)
    }
  }

  // Go to specific popular products page
  const goToPopularPage = (page: number) => {
    setPopularProductsPage(page)
  }

  // Reset search when opening modal
  useEffect(() => {
    if (isOpen) {
      setSearchQuery("")
      setSearchResults([])
      setPopularProductsPage(0)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center">
      <div className="bg-background w-full h-full sm:rounded-lg sm:w-full sm:max-w-4xl sm:h-auto sm:max-h-[90vh] overflow-auto p-4 sm:p-6 sm:m-4 animate-fade-in-50 sm:animate-zoom-in-95 sm:animate-slide-in-from-top-10 animate-slide-in-from-bottom-full duration-300">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-xl font-bold">Search Products</h2>
          <button
            onClick={() => {
              onClose()
              setSearchQuery("")
              setSearchResults([])
            }}
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        <div className="relative mb-4 sm:mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInput}
            placeholder="Search for products, designs, categories..."
            className="w-full border border-border rounded-lg py-2 sm:py-3 px-4 pr-10"
            autoFocus
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>

        {/* Search Results */}
        {searchQuery.trim() !== "" && (
          <div className="mb-6">
            <h3 className="font-medium mb-3">
              {searchResults.length > 0
                ? `Results for "${searchQuery}" (${searchResults.length})`
                : `No results for "${searchQuery}"`}
            </h3>

            {searchResults.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {searchResults.slice(0, 6).map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}

            {searchResults.length > 6 && (
              <div className="mt-4 text-center">
                <button className="btn-primary">View All {searchResults.length} Results</button>
              </div>
            )}
          </div>
        )}

        {/* Popular Products with Pagination */}
        <div>
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h3 className="text-lg">Popular Products</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => goToPopularPage(Math.max(0, popularProductsPage - 1))}
                className="h-7 w-7 rounded-md bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous page"
                disabled={popularProductsPage === 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-sm">
                {popularProductsPage + 1} / {totalPopularPages}
              </span>
              <button
                onClick={() => goToPopularPage(Math.min(totalPopularPages - 1, popularProductsPage + 1))}
                className="h-7 w-7 rounded-md bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next page"
                disabled={popularProductsPage === totalPopularPages - 1}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {currentPopularProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Pagination numbers for popular products */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPopularPages) }).map((_, index) => {
                const pageToShow = index
                return (
                  <button
                    key={index}
                    onClick={() => goToPopularPage(pageToShow)}
                    className={`h-8 w-8 flex items-center justify-center rounded-md transition-colors ${
                      popularProductsPage === pageToShow
                        ? "bg-orange-500 text-white"
                        : "bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white"
                    }`}
                  >
                    {pageToShow + 1}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

