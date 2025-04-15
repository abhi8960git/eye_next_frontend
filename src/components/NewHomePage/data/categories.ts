// Category data types
export interface Category {
    name: string
    subcategories: string[]
  }
  
  // Navigation categories with subcategories
  export const categories: Category[] = [
    {
      name: "Hoodies",
      subcategories: [
        "Pullover Hoodies",
        "Zip-Up Hoodies",
        "Oversized Hoodies",
        "Graphic Hoodies",
        "Premium Hoodies",
        "Vintage Hoodies",
        "Limited Edition",
        "New Arrivals",
      ],
    },
    {
      name: "Tshirts",
      subcategories: [
        "Graphic Tees",
        "Plain T-shirts",
        "V-Neck T-shirts",
        "Long Sleeve Tees",
        "Vintage Tees",
        "Printed T-shirts",
        "Limited Edition",
        "New Arrivals",
      ],
    },
    {
      name: "Shirts",
      subcategories: [
        "Casual Shirts",
        "Formal Shirts",
        "Denim Shirts",
        "Flannel Shirts",
        "Printed Shirts",
        "Oxford Shirts",
        "Limited Edition",
        "New Arrivals",
      ],
    },
    {
      name: "Accessories",
      subcategories: ["Caps & Hats", "Bags", "Socks", "Phone Cases", "Jewelry", "Wallets", "Belts", "Sunglasses"],
    },
    {
      name: "Explore",
      subcategories: [
        "New Arrivals",
        "Best Sellers",
        "Trending",
        "Collections",
        "Sale Items",
        "Collaborations",
        "Sustainable",
        "Gift Cards",
      ],
    },
  ]
  
  