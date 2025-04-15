import { CategoryCard } from "./CategoryCard"
import { ExploreCard } from "./ExploreCard"

export function CategoriesSection() {
  return (
    <div className="bg-black text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12">Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hoodies */}
          <CategoryCard title="Hoodies" imageUrl="/hoodie.png" query="person wearing white hoodie outdoors" />

          {/* T-shirts */}
          <CategoryCard
            title="T-shirts"
            imageUrl="/tshirt.png"
            query="person wearing black t-shirt with colorful back design, yellow beanie"
          />

          {/* Shirts */}
          <CategoryCard title="Shirts" imageUrl="/shirt.png" query="men in formal shirts, studio portrait" />

          {/* Stickers */}
          <CategoryCard title="Stickers" imageUrl="/sticker.png" query="hands holding colorful stickers" />

          {/* Sweat Shirts */}
          <CategoryCard
            title="Sweat Shirts"
            imageUrl="/hoodie.png"
            query="person wearing dark sweatshirt in forest"
          />

          {/* Keep Exploring */}
          <ExploreCard />
        </div>

        <p className="text-center mt-12 max-w-3xl mx-auto text-sm md:text-base">
          Empower Your Style, Personalize Your World With Deauth: Where Designers Thrive And Your Imagination Comes
          Alive!
        </p>
      </div>
    </div>
  )
}
