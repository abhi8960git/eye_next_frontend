"use client"

import { ArrowRight, Sparkles, Palette, Upload } from "lucide-react"
import CircularText from "./CircularText"

export default function PromotionalSection() {
  return (
    <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="max-w-2xl w-full text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
          <Sparkles className="h-6 w-6 text-orange-500 flex-shrink-0 md:hidden" />
          <span>
            Empower Your Style, Personalize Your World With Deauth: Where Designers Thrive And Your Imagination Comes
            Alive!&quot;
          </span>
          <Palette className="h-6 w-6 text-orange-500 flex-shrink-0 md:hidden" />
        </h2>
        <p className="text-gray-700 mb-6">
          Empower Your Style, Personalize Your World With Deauth: Where Designers Thrive And Your Imagination Comes
          Alive!&quot;
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-orange-600 transition-colors">
            <Upload className="h-4 w-4" />
            Upload Your Design Here
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="relative w-40 h-40 md:w-48 md:h-48 mt-8 md:mt-0">
        <div className="absolute inset-0 bg-orange-500 rounded-full"></div>
        <CircularText />
      </div>
    </div>
  )
}
