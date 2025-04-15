import Image from "next/image"
import { ViewAllLink } from "./ViewAllLinks"

interface CategoryCardProps {
  title: string
  imageUrl: string
  query?: string
  href?: string
}

export function CategoryCard({ title, imageUrl, query, href = "#" }: CategoryCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={title}
        width={400}
        height={500}
        className="w-full h-[250px] object-cover"
        // @ts-ignore
        query={query}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm p-4">
        <h3 className="text-2xl font-bold mb-2 tracking-wide">{title}</h3>
        <ViewAllLink href={href} />
      </div>
    </div>
  )
}
