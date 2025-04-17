"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import DesignCard from "./DesignCard"
import PaginationButton from "./PaginationButton"
import { allDesigns } from "./data/designs"

export default function ExploreDesigns() {
  const [expandedDesigns, setExpandedDesigns] = useState(false)
  const [designPage, setDesignPage] = useState(1)
  const [animatingButton, setAnimatingButton] = useState<string | null>(null)

  const designsPerPage = expandedDesigns ? 10 : 3
  const totalDesignPages = Math.ceil(allDesigns.length / designsPerPage)

  // Calculate which designs to show based on current page
  const startDesignIndex = (designPage - 1) * designsPerPage
  const visibleDesigns = allDesigns.slice(startDesignIndex, startDesignIndex + designsPerPage)

  const handleSeeMoreClick = () => {
    setExpandedDesigns(true)
    setDesignPage(1) // Reset to first page when expanding
  }

  const handleBackClick = () => {
    setExpandedDesigns(false)
    setDesignPage(1) // Reset to first page when going back
  }

  const handleDesignPageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalDesignPages) {
      const buttonId = `design-${newPage}`
      setAnimatingButton(buttonId)
      setTimeout(() => setAnimatingButton(null), 300)
      setDesignPage(newPage)
    }
  }

  return (
    <div className="bg-orange-500 p-4 md:p-6">
      <div className="md:w-[90%] w-full mx-auto p-4 md:p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-xl font-bold">Explore The Design</h2>

          {!expandedDesigns ? (
            <button onClick={handleSeeMoreClick} className="text-white flex items-center text-sm font-medium">
              See More <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={handleBackClick}
                className="text-white flex items-center text-sm font-medium bg-orange-600 hover:bg-orange-700 rounded-md px-3 py-1.5 mr-3"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
              </button>
              <PaginationButton
                onClick={() => handleDesignPageChange(designPage - 1)}
                disabled={designPage === 1}
                isAnimating={animatingButton === `design-${designPage - 1}`}
                variant="white"
              >
                <ChevronLeft className="h-4 w-4" />
              </PaginationButton>
              <PaginationButton
                onClick={() => handleDesignPageChange(designPage + 1)}
                disabled={designPage === totalDesignPages}
                isAnimating={animatingButton === `design-${designPage + 1}`}
                variant="white"
              >
                <ChevronRight className="h-4 w-4" />
              </PaginationButton>
            </div>
          )}
        </div>

        {!expandedDesigns ? (
          // Initial view with 3 cards
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {visibleDesigns.map((design, index) => (
              // @ts-ignore
              <DesignCard key={design.id} design={design} showNumber={true} number={index + 1} showLinkIcon={true} />
            ))}
          </div>
        ) : (
          // Expanded view with 2 cards per row on mobile
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {visibleDesigns.map((design) => (
              // @ts-ignore
              <DesignCard key={design.id} design={design} showNumber={false} showLinkIcon={true} />
            ))}
          </div>
        )}

        {expandedDesigns && totalDesignPages > 1 && (
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
              {Array.from({ length: totalDesignPages }).map((_, i) => (
                <PaginationButton
                  key={i}
                  onClick={() => handleDesignPageChange(i + 1)}
                  isActive={designPage === i + 1}
                  isAnimating={animatingButton === `design-${i + 1}`}
                  variant="white"
                  number={i + 1}
                />
              ))}
            </div>
          </div>
        )}

        <div className="text-xs text-white/80 mt-3">
          Discover. Take note. Personalize Your World With Designs. Browse Categories. Filter And Sort. Suggestions.
          Create Yours!
        </div>
      </div>
    </div>
  )
}
