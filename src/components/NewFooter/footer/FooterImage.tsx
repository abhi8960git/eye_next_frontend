import Image from "next/image"
import CircularText from "./CircularText"

export default function FooterImage() {
  return (
    <div className="relative mx-auto md:mx-0">
      {/* Square image container */}
      <div className="relative w-64 h-64 rounded-lg">
        <Image
          src="/footer.webp"
          alt="Deauth apparel model"
          width={256}
          height={256}
          className="object-cover w-full h-full rounded-lg"
        />

        {/* Circular Text Component at bottom right */}
        <CircularText />
      </div>
    </div>
  )
}
