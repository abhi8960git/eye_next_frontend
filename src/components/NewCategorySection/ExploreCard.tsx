import { ViewAllLink } from "./ViewAllLinks"

interface ExploreCardProps {
  title?: string
  href?: string
}

export function ExploreCard({ title = "Keep Exploring", href = "#" }: ExploreCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="bg-gradient-to-r from-red-600 to-red-900 h-[250px]"></div>
      <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm p-4">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <ViewAllLink href={href} />
      </div>
    </div>
  )
}
