import { Star } from "lucide-react"
import Image from "next/image"
export default function CircularText() {
  return (
    <div className="absolute -right-6 -bottom-6 w-20 h-20">
      {/* Orange circle background */}
      <div className="absolute inset-0 bg-orange-500 rounded-full"></div>

      {/* Rotating text */}
      <div className="absolute inset-0 w-[200%] h-[200%] -left-1/2 -top-1/2 animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path id="circle" d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" fill="none" />
          </defs>

          {/* Full circular text that covers the entire circle */}
          <text className="text-[9px] fill-white font-bold">
            <textPath xlinkHref="#circle" startOffset="0%">
              Read Reviews • Read Reviews • Read Reviews • Read Reviews •
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/ArtistToFollow/Circle-Logo.png" alt="logo" width={40} height={40}></Image>
      </div>
    </div>
  )
}
