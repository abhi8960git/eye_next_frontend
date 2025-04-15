"use client"

import { useState, useEffect } from "react"
import "./styles/animations.css"

// Data imports
import { generateProducts } from "./data/products"
import { categories } from "./data/categories"
import { heroSlides } from "./data/slides"

// Component imports
import Header from "./Header"
import MobileMenu from "./MobileMenu"
import HeroSlider from "./HeroSlider"
import ProductGrid from "./ProductGrid"
import SearchModal from "./SearchModel"
import MarqueeStrip from "./MarqueeStrip"

export default function DeauthHomepage() {
  // State for search modal and mobile menu
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [menuAnimating, setMenuAnimating] = useState(false)

  // Generate products
  const allProducts = generateProducts()

  // Handle mobile menu open with animation
  const handleOpenMobileMenu = () => {
    setMenuAnimating(true)
    setMobileMenuOpen(true)
    setTimeout(() => setMenuAnimating(false), 300)
  }

  // Prevent body scroll when modal or dropdown is open
  useEffect(() => {
    if (searchModalOpen || mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [searchModalOpen, mobileMenuOpen])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top banner */}
      <div className="bg-secondary text-secondary-foreground text-center py-2 text-xs sm:text-sm flex items-center justify-center">
        <span className="mr-2">SAVE UPTO 40%...</span>
        <span className="mr-2">|</span>
        <button className="btn-primary btn-sm btn-rounded">USE CODE PARENTS</button>
      </div>

      {/* Header */}
      <Header
        categories={categories}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenMobileMenu={handleOpenMobileMenu}
      />

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} categories={categories} />

      <main>
        {/* Hero Slider */}
        <HeroSlider slides={heroSlides} />

        {/* Bestsellers section with pagination */}
        <ProductGrid products={allProducts} title="Men's Bestsellers" productsPerPage={6} />
      </main>

      {/* Bottom sliding text strip */}
      <MarqueeStrip />

      {/* Search Modal */}
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} products={allProducts} />
    </div>
  )
}

