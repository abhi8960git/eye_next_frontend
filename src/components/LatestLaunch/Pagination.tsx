"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = []

    // Always show first page
    if (currentPage > 2) {
      pages.push(1)
    }

    // Show ellipsis if needed
    if (currentPage > 3) {
      pages.push("ellipsis")
    }

    // Show current page and adjacent pages
    for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
      pages.push(i)
    }

    // Show ellipsis if needed
    if (currentPage < totalPages - 2) {
      pages.push("ellipsis")
    }

    // Always show last page
    if (currentPage < totalPages - 1 && totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {/* Previous button - Changed border color to orange */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-8 h-8 flex items-center justify-center rounded ${
          currentPage === 1
            ? "border border-orange-200 text-orange-200"
            : "border border-orange-500 text-orange-500 hover:bg-orange-50"
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page numbers */}
      {getPageNumbers().map((page, index) =>
        page === "ellipsis" ? (
          <span key={`ellipsis-${index}`} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={`page-${page}`}
            onClick={() => typeof page === "number" && onPageChange(page)}
            className={`w-8 h-8 flex items-center justify-center rounded ${
              currentPage === page ? "bg-orange-500 text-white" : "border border-orange-500 hover:bg-orange-50"
            }`}
          >
            {page}
          </button>
        ),
      )}

      {/* Next button - Changed border color to orange */}
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-8 h-8 flex items-center justify-center rounded ${
          currentPage === totalPages
            ? "border border-orange-200 text-orange-200"
            : "border border-orange-500 text-orange-500 hover:bg-orange-50"
        }`}
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}
