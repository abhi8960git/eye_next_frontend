import { ArrowRight } from "lucide-react"

export default function MarqueeStrip() {
  return (
    <div className=" relative overflow-hidden bg-orange-500 py-2 sm:py-3">
      <div className="marquee-container">
        <div className="marquee-content">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center text-white space-x-4 sm:space-x-8">
              <div className="flex items-center">
                <span className="text-lg sm:text-2xl font-medium font-heading1">Fashionable</span>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
              </div>
              <div className="flex items-center">
                <span className="text-lg sm:text-2xl font-medium font-heading1">Cool Designs</span>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 rotate-45" />
              </div>
              <div className="flex items-center">
                <span className=" text-lg sm:text-2xl font-medium font-heading1">Hand Crafted</span>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
              </div>
              <div className="flex items-center">
                <span className="text-lg sm:text-2xl font-medium font-heading1"># Deauth</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg sm:text-2xl font-medium font-heading1">Fashionable</span>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
              </div>
              <div className="flex items-center">
                <span className="text-lg sm:text-2xl font-medium font-heading1">Cool Designs</span>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

