"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight,  SquareArrowOutUpRight } from "lucide-react"
import type { HeroSlide } from "./data/slides"

interface HeroSliderProps {
  slides: HeroSlide[]
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = slides.length

  // Auto-advance hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <section className="relative">
      <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.img}
              alt={slide.mainText}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* Bottom center navigation buttons */}
      <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center items-center z-20">
        <div className="flex gap-2 sm:gap-4">
          <button
            onClick={() => setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides)}
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-md border border-border bg-background flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={() => setCurrentSlide((currentSlide + 1) % totalSlides)}
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-md border border-border bg-background flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      {/* Bottom right link button */}
      <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 z-20">
        <Link
          href={`/collection`}
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-md bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
          aria-label={slides[currentSlide].buttonText}
        >
          <SquareArrowOutUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Link>
      </div>
    </section>
  )
}

