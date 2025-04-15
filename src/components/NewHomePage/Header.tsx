"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, Heart, MessageCircle, ChevronDown, Menu } from 'lucide-react'

// Types
export type Subcategory = string;

export interface Category {
  name: string;
  subcategories: Subcategory[];
}

export interface StyleItem {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

interface HeaderProps {
  categories: Category[];
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
}

// Sample Data (could be moved to a separate file in actual implementation)
export const sampleCategories: Category[] = [
  {
    name: "Apparel",
    subcategories: ["T-Shirts", "Hoodies", "Jackets", "Pants", "Accessories"]
  },
  {
    name: "Accessories",
    subcategories: ["Hats", "Bags", "Jewelry", "Watches", "Sunglasses"]
  },
  {
    name: "Home Decor",
    subcategories: ["Wall Art", "Pillows", "Rugs", "Lighting", "Furniture"]
  }
];

export const popularStyles: StyleItem[] = [
  { id: "1", name: "Urban Style", price: "$24.99", imageUrl: "/HomePageImages/Urban-Style.jpg" },
  { id: "2", name: "Street Vibe", price: "$29.99", imageUrl: "/HomePageImages/Street-Style.jpg" },
  { id: "3", name: "Casual Fit", price: "$19.99", imageUrl: "/HomePageImages/Casual-Fit.jpg" },
  { id: "4", name: "Vintage Look", price: "$34.99", imageUrl: "/HomePageImages/Urban-Style.jpg" }
];

// Reusable Components
const NavLink = ({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className={className}
  >
    {children}
  </Link>
);

const NavIconLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-zinc-500 hover:text-foreground transition-colors">
    {children}
  </Link>
);

const PrimaryButton = ({ className = "", children, onClick }: { className?: string; children: React.ReactNode; onClick?: () => void }) => (
  <button 
    className={`bg-orange-500 text-white text-sm font-medium px-3 py-1.5 rounded-md hover:bg-orange-600 transition-all ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const OutlineButton = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <span className={`text-sm font-medium border border-black px-3 py-1.5 rounded-md hover:bg-black hover:text-white transition-all ${className}`}>
    {children}
  </span>
);

const StyleCard = ({ item }: { item: StyleItem }) => (
  <div className="bg-accent p-2 rounded-md">
    <div className="aspect-square relative mb-2">
      <Image
        src={item.imageUrl}
        alt={item.name}
        fill
        className="object-cover rounded"
      />
    </div>
    <p className="text-sm font-medium">{item.name}</p>
    <p className="text-xs text-zinc-500">{item.price}</p>
  </div>
);

// Category Dropdown Component
const CategoryDropdown = ({ 
  category, 
  isActive, 
  onToggle, 
  onClose 
}: { 
  category: Category; 
  isActive: boolean; 
  onToggle: () => void;
  onClose: () => void;
}) => {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="dropdown-trigger flex items-center gap-1 hover:text-zinc-500 transition-colors"
      >
        {category.name}{" "}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
        />
      </button>
      
      {isActive && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-[1000]">
          <div className="bg-background rounded-lg w-full max-w-4xl p-6 relative animate-zoom-in-95 shadow-lg">
            <div className="grid grid-cols-3 gap-6">
              {/* Subcategories */}
              <div className="col-span-1">
                <h3 className="text-xl font-heading1 mb-4">{category.name} Collection</h3>
                <ul className="space-y-3">
                  {category.subcategories.map((subcat) => (
                    <li key={subcat}>
                      <Link href="#" className="text-sm hover:text-orange-500 transition-colors">
                        {subcat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Popular Styles */}
              <div className="col-span-1">
                <h3 className="text-xl font-heading1 mb-4">Popular Styles</h3>
                <div className="grid grid-cols-2 gap-2">
                  {popularStyles.map((style) => (
                    <StyleCard key={style.id} item={style} />
                  ))}
                </div>
              </div>
              
              {/* Featured Item */}
              <div className="col-span-1">
                <div className="relative h-full rounded-lg overflow-hidden">
                  <Image
                    src="/HomePageImages/Premium-Mockup.jpg"
                    alt="Featured item"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white text-xl font-heading2">Premium Collection</h3>
                    <p className="text-white/80 text-sm mb-2">
                      Discover our premium items made with the finest materials
                    </p>
                    <button className="btn-primary btn-sm btn-rounded font-heading1">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <PrimaryButton onClick={onClose}>Close</PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Header Component
export default function Header({ categories = sampleCategories, onOpenSearch, onOpenMobileMenu }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown menu
  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };
  
  // Close dropdown
  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="border-b border-border sticky top-0 bg-background z-50">
      {/* Top Nav Bar */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          className="md:hidden text-zinc-500 hover:text-foreground transition-all duration-300 transform hover:scale-110 active:scale-95"
          onClick={onOpenMobileMenu}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-bold font-heading1">
          <Image src={'/Deauth-Logo.png'} alt="DeauthLogo" width={90} height={30} />
        </Link>

        {/* Navigation links */}
        <div className="flex items-center gap-2 sm:gap-4">
          <NavLink href="/sell" className="font-heading1 hidden md:block">
            <PrimaryButton>Sell Your Art</PrimaryButton>
          </NavLink>
          
          <NavLink href="/login" className="hidden md:block">
            <OutlineButton>Log In</OutlineButton>
          </NavLink>
          
          <NavLink href="/signup" className="hidden md:block">
            <OutlineButton>Sign Up</OutlineButton>
          </NavLink>
          
          <button
            className="text-zinc-500 hover:text-foreground transition-colors"
            onClick={onOpenSearch}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          
          <NavIconLink href="/cart">
            <ShoppingCart className="h-5 w-5" />
          </NavIconLink>
          
          <NavIconLink href="/wishlist">
            <Heart className="h-5 w-5 hidden sm:block" />
          </NavIconLink>
          
          <NavIconLink href="/messages">
            <MessageCircle className="h-5 w-5 hidden sm:block" />
          </NavIconLink>
        </div>
      </div>

      {/* Category navigation - desktop only */}
      <div className="hidden md:block container mx-auto px-4 py-2 overflow-x-auto hide-scrollbar" ref={dropdownRef}>
        <div className="flex space-x-6 text-sm font-medium font-heading2">
          {categories.map((category) => (
            <CategoryDropdown
              key={category.name}
              category={category}
              isActive={activeDropdown === category.name}
              onToggle={() => toggleDropdown(category.name)}
              onClose={closeDropdown}
            />
          ))}
        </div>
      </div>
    </header>
  );
}