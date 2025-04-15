"use client"

import { useState } from "react"
import Link from "next/link"
import { X, ChevronDown } from "lucide-react"
import type { Category } from "./data/categories"
import Image from "next/image"
interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  categories: Category[]
}

export default function MobileMenu({ isOpen, onClose, categories }: MobileMenuProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  // Toggle category expansion
  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category],
    )
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-background z-[1000] overflow-y-auto animate-slide-in-from-left-10 duration-300">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Link href="/" className="text-2xl font-bold font-heading1">
           <Image src={'/Deauth-Logo.png'} alt="DeauthLogo" width={90} height={30}></Image>
          </Link>
          <button
            onClick={onClose}
            className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-all duration-300 transform hover:rotate-90"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4">
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.name} className="border-b border-border pb-4">
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="flex items-center justify-between w-full py-2 transition-all duration-300 hover:pl-2"
                >
                  <span className="text-lg font-heading2">{category.name}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      expandedCategories.includes(category.name) ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedCategories.includes(category.name) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="mt-2 space-y-2 pl-4">
                    {category.subcategories.map((subcat, index) => (
                      <li
                        key={subcat}
                        className="animate-fade-in-50 animate-slide-in-from-left-5"
                        style={{ animationDelay: `${index * 30}ms` }}
                      >
                        <Link
                          href="#"
                          className="block py-1 text-muted-foreground hover:text-foreground hover:pl-2 transition-all duration-200"
                        >
                          {subcat}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto p-4 space-y-3">
          <Link
            href="/sell"
            className="font-heading1 bg-orange-500 text-white w-full block text-center px-4 py-2 rounded-md hover:bg-orange-600 transition-colors font-medium"
          >
            Sell Your Art
          </Link>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/login"
              className="border border-black text-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors font-medium block text-center"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="border border-black text-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors font-medium block text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

