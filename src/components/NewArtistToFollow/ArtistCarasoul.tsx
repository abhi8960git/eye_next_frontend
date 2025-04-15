"use client"

import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import type { EmblaOptionsType } from "embla-carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ArtistCard from "./ArtistCard"
import type { Artist } from "./types/index"

interface ArtistCarouselProps {
  artists: Artist[]
}

export default function ArtistCarousel({ artists }: ArtistCarouselProps) {
  // Embla carousel options
  const options: EmblaOptionsType = {
    loop: true,
    align: "start",
    slidesToScroll: 1,
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [isPlaying, setIsPlaying] = useState(true)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi || !isPlaying) return

    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [emblaApi, isPlaying])

  return (
    <div className="relative" onMouseEnter={() => setIsPlaying(false)} onMouseLeave={() => setIsPlaying(true)}>
      {/* Desktop Navigation - Top Right */}
      <div className="hidden md:flex absolute -top-12 right-0 gap-2 z-10">
        <button
          onClick={scrollPrev}
          className="w-8 h-8 flex items-center justify-center border border-orange-500 text-orange-500 rounded-sm hover:bg-orange-50 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={scrollNext}
          className="w-8 h-8 flex items-center justify-center border border-orange-500 text-orange-500 rounded-sm hover:bg-orange-50 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Embla Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] min-w-0 pl-4 first:pl-0"
            >
              <ArtistCard
                name={artist.name}
                followers={artist.followers}
                designs={artist.designs}
                backgroundUrl={artist.backgroundUrl}
                profileUrl={artist.profileUrl}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation - Bottom Center */}
      <div className="md:hidden flex justify-center gap-4 mt-6 z-10">
        <button
          onClick={scrollPrev}
          className="w-10 h-10 flex items-center justify-center border border-orange-500 text-orange-500 rounded-sm hover:bg-orange-50 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollNext}
          className="w-10 h-10 flex items-center justify-center border border-orange-500 text-orange-500 rounded-sm hover:bg-orange-50 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
