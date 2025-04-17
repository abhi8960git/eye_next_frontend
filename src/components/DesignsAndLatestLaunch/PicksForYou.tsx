"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProductCard from "./ProductCard"
import PaginationButton from "./PaginationButton"
import { allPicks } from "./data/products"

export default function PicksForYou() {
  const [picksPage, setPicksPage] = useState(1)
  const [animatingButton, setAnimatingButton] = useState<string | null>(null)

  const picksPerPage = 5
  const totalPicksPages = Math.ceil(allPicks.length / picksPerPage)

  // Calculate which picks to show based on current page
  const startPicksIndex = (picksPage - 1) * picksPerPage
  const visiblePicks = allPicks.slice(startPicksIndex, startPicksIndex + picksPerPage)

  const handlePicksPageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPicksPages) {
      const buttonId = `picks-${newPage}`
      setAnimatingButton(buttonId)
      setTimeout(() => setAnimatingButton(null), 300)
      setPicksPage(newPage)
    }
  }

  return (
    <div className="w-full bg-white">
      {/* Content container with same width and alignment as Explore Designs */}
      <div className="md:w-[90%] w-full mx-auto p-4 md:p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Picks For You</h2>

          {/* Pagination controls styled like the provided image - square with slight rounding */}
          <div className="flex items-center gap-2">
            <PaginationButton
              onClick={() => handlePicksPageChange(picksPage - 1)}
              disabled={picksPage === 1}
              isAnimating={animatingButton === `picks-${picksPage - 1}`}
              variant="orange"
            >
              <ChevronLeft className="h-4 w-4" />
            </PaginationButton>
            <PaginationButton
              onClick={() => handlePicksPageChange(picksPage + 1)}
              disabled={picksPage === totalPicksPages}
              isAnimating={animatingButton === `picks-${picksPage + 1}`}
              variant="orange"
            >
              <ChevronRight className="h-4 w-4" />
            </PaginationButton>
          </div>
        </div>

        {/* Responsive grid: 2 cards on mobile, 3 on small screens, 4 on medium, 5 on large */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {visiblePicks.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {totalPicksPages > 1 && (
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPicksPages }).map((_, i) => (
                <PaginationButton
                  key={i}
                  onClick={() => handlePicksPageChange(i + 1)}
                  isActive={picksPage === i + 1}
                  isAnimating={animatingButton === `picks-${i + 1}`}
                  variant="orange"
                  number={i + 1}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
