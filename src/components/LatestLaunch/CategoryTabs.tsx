"use client"

interface CategoryTabsProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  const categories = [
    { id: "jackets", label: "Jackets" },
    { id: "hoodies", label: "Hoodies" },
    { id: "tshirts", label: "Tshirts" },
    { id: "shirts", label: "Shirts" },
  ]

  return (
    <div className="mb-8">
      <div className="flex justify-center border-b overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-6 py-3 whitespace-nowrap ${
              activeCategory === category.id
                ? "text-black border-b-2 border-orange-500"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  )
}
