"use client"
import ArtistCarousel from "./ArtistCarasoul"
import PromotionalSection from "./PromotionalSection"
import { artists } from "./data/artist"

export default function ArtistToFollowPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Artists To Follow</h1>

      {/* Artist Carousel Section */}
      <ArtistCarousel artists={artists} />

      {/* Promotional Section */}
      <PromotionalSection />
    </div>
  )
}
