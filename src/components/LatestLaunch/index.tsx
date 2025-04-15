"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProductGrid from "./ProductGrid"
import CategoryTabs from "./CategoryTabs"
import Pagination from "./Pagination"
import { getProductsByCategory, paginateProducts, getTotalPages, getNewProducts } from "./data/products"

// Constants
const PRODUCTS_PER_PAGE = 6
const LATEST_PRODUCTS_PER_PAGE = 6

export default function LatestLaunchSection() {
  // State for category section
  const [activeCategory, setActiveCategory] = useState("hoodies")
  const [categoryPage, setCategoryPage] = useState(1)
  const [filteredProducts, setFilteredProducts] = useState(getProductsByCategory(activeCategory))
  const [categoryPaginatedProducts, setCategoryPaginatedProducts] = useState(
    paginateProducts(filteredProducts, categoryPage, PRODUCTS_PER_PAGE),
  )
  const [categoryTotalPages, setCategoryTotalPages] = useState(getTotalPages(filteredProducts, PRODUCTS_PER_PAGE))

  // State for latest products section
  const [latestPage, setLatestPage] = useState(1)
  const [latestProducts, setLatestProducts] = useState(getNewProducts())
  const [latestPaginatedProducts, setLatestPaginatedProducts] = useState(
    paginateProducts(latestProducts, latestPage, LATEST_PRODUCTS_PER_PAGE),
  )
  const [latestTotalPages, setLatestTotalPages] = useState(getTotalPages(latestProducts, LATEST_PRODUCTS_PER_PAGE))

  // Update filtered products when category changes
  useEffect(() => {
    const newFilteredProducts = getProductsByCategory(activeCategory)
    setFilteredProducts(newFilteredProducts)
    setCategoryTotalPages(getTotalPages(newFilteredProducts, PRODUCTS_PER_PAGE))
    setCategoryPage(1) // Reset to first page when category changes
  }, [activeCategory])

  // Update paginated products when page or filtered products change
  useEffect(() => {
    setCategoryPaginatedProducts(paginateProducts(filteredProducts, categoryPage, PRODUCTS_PER_PAGE))
  }, [categoryPage, filteredProducts])

  // Update latest paginated products when page changes
  useEffect(() => {
    setLatestPaginatedProducts(paginateProducts(latestProducts, latestPage, LATEST_PRODUCTS_PER_PAGE))
  }, [latestPage, latestProducts])

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
  }

  // Handle category page change
  const handleCategoryPageChange = (page: number) => {
    setCategoryPage(page)
    // Scroll to top of category section
    document.getElementById("category-section")?.scrollIntoView({ behavior: "smooth" })
  }

  // Handle latest page change
  const handleLatestPageChange = (page: number) => {
    setLatestPage(page)
    // Scroll to top of latest section
    document.getElementById("latest-section")?.scrollIntoView({ behavior: "smooth" })
  }

  // Handle next set of latest products
  const handleNextLatest = () => {
    if (latestPage < latestTotalPages) {
      setLatestPage(latestPage + 1)
    }
  }

  // Handle previous set of latest products
  const handlePrevLatest = () => {
    if (latestPage > 1) {
      setLatestPage(latestPage - 1)
    }
  }

  return (
    <div className="w-full bg-white">
      {/* Responsive container: full width on mobile, 80% width on desktop */}
      <main className="w-[95%] md:w-[80%] mx-auto py-8">
        {/* Latest Launch Section */}
        <div id="latest-section" className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Latest Launch</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">See More</span>
              <div className="flex gap-1">
                <button
                  onClick={handlePrevLatest}
                  className={`w-6 h-6 flex items-center justify-center rounded border ${
                    latestPage === 1
                      ? "border-orange-200 text-orange-200"
                      : "border-orange-500 text-orange-500 hover:bg-orange-50"
                  }`}
                  disabled={latestPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextLatest}
                  className={`w-6 h-6 flex items-center justify-center rounded border ${
                    latestPage === latestTotalPages
                      ? "border-orange-200 text-orange-200"
                      : "border-orange-500 text-orange-500 hover:bg-orange-50"
                  }`}
                  disabled={latestPage === latestTotalPages}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Latest Products Grid */}
          <ProductGrid products={latestPaginatedProducts} />

          {/* Latest Products Pagination */}
          <Pagination currentPage={latestPage} totalPages={latestTotalPages} onPageChange={handleLatestPageChange} />
        </div>

        {/* Category Section */}
        <div id="category-section">
          {/* Category Tabs */}
          <CategoryTabs activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

          {/* Category Products */}
          <ProductGrid products={categoryPaginatedProducts} />

          {/* Category Pagination */}
          <Pagination
            currentPage={categoryPage}
            totalPages={categoryTotalPages}
            onPageChange={handleCategoryPageChange}
          />
        </div>
      </main>
    </div>
  )
}
