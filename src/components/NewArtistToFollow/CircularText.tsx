import Image from "next/image"

export default function CircularText() {
  return (
    <>
      {/* Rotating text */}
      <div className="absolute inset-0 w-[200%] h-[200%] -left-1/2 -top-1/2 animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path id="circle" d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" fill="none" />
          </defs>

          {/* Full circular text that covers the entire circle */}
          <text className="text-[7px] fill-black font-medium">
            <textPath xlinkHref="#circle" startOffset="0%">
              Empower Your Style, Personalize Your World With Deauth: Where Designers Thrive And Your Imagination Comes
              Alive! Empower Your Style, Personalize Your World With Deauth
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center image - positioned separately from the rotating text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full overflow-hidden bg-none z-10">
        <Image src="/ArtistToFollow/Circle-Logo.png" alt="Deauth Logo" fill className="object-cover bg-none" />
      </div>
    </>
  )
}
