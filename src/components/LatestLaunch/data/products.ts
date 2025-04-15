export interface Product {
    id: string
    name: string
    brand: string
    price: number
    frontImage: string
    backImage: string
    colors: string[]
    category: "jackets" | "hoodies" | "tshirts" | "shirts"
    isNew?: boolean
  }
  
  export function getColorClass(color: string): string {
    switch (color.toLowerCase()) {
      case "black":
        return "bg-black"
      case "white":
        return "bg-white"
      case "red":
        return "bg-red-600"
      case "blue":
        return "bg-blue-600"
      case "green":
        return "bg-green-600"
      case "yellow":
        return "bg-yellow-400"
      case "purple":
        return "bg-purple-600"
      case "gray":
      case "grey":
        return "bg-gray-500"
      case "beige":
      case "cream":
        return "bg-amber-100"
      case "navy":
        return "bg-indigo-900"
      case "brown":
        return "bg-amber-800"
      case "orange":
        return "bg-orange-500"
      case "pink":
        return "bg-pink-500"
      case "teal":
        return "bg-teal-500"
      default:
        return "bg-gray-300"
    }
  }
  
  // All products in one array
  export const allProducts: Product[] = [
    // Hoodies
    {
      id: "h1",
      name: "Let's Go",
      brand: "Lexica Rom",
      price: 17.99,
      frontImage: "/classic-red-hoodie.png",
      backImage: "/black-hoodie.png", // Different back image
      colors: ["black", "gray", "white", "red"],
      category: "hoodies",
      isNew: true,
    },
    {
      id: "h2",
      name: "Noice",
      brand: "Lexica Rom",
      price: 14.99,
      frontImage: "/cream-hoodie-flatlay.png",
      backImage: "/gray-hoodie.png", // Different back image
      colors: ["black", "cream", "gray", "white"],
      category: "hoodies",
      isNew: true,
    },
    {
      id: "h3",
      name: "Urban Style",
      brand: "Lexica Rom",
      price: 24.99,
      frontImage: "/cream-green-graphic-hoodie.png",
      backImage: "/navy-hoodie.png", // Different back image
      colors: ["black", "gray", "green"],
      category: "hoodies",
      isNew: true,
    },
    {
      id: "h4",
      name: "Street Vibe",
      brand: "Lexica Rom",
      price: 19.99,
      frontImage: "/black-hoodie.png",
      backImage: "/classic-red-hoodie.png", // Different back image
      colors: ["red", "black", "blue"],
      category: "hoodies",
      isNew: true,
    },
    {
      id: "h5",
      name: "Cozy Comfort",
      brand: "Lexica Rom",
      price: 22.99,
      frontImage: "/gray-hoodie.png",
      backImage: "/cream-hoodie-flatlay.png", // Different back image
      colors: ["gray", "black", "white", "navy"],
      category: "hoodies",
      isNew: true,
    },
    {
      id: "h6",
      name: "Winter Warmth",
      brand: "Lexica Rom",
      price: 27.99,
      frontImage: "/navy-hoodie.png",
      backImage: "/cream-green-graphic-hoodie.png", // Different back image
      colors: ["navy", "black", "gray"],
      category: "hoodies",
      isNew: true,
    },
    {
      id: "h7",
      name: "Casual Comfort",
      brand: "Lexica Rom",
      price: 23.99,
      frontImage: "/green-hoodie.png",
      backImage: "/blue-hoodie.png", // Different back image
      colors: ["green", "black", "gray", "navy"],
      category: "hoodies",
      isNew: false,
    },
    {
      id: "h8",
      name: "Everyday Essential",
      brand: "Lexica Rom",
      price: 18.99,
      frontImage: "/blue-hoodie.png",
      backImage: "/green-hoodie.png", // Different back image
      colors: ["blue", "black", "gray", "navy"],
      category: "hoodies",
      isNew: false,
    },
    {
      id: "h9",
      name: "Weekend Chill",
      brand: "Lexica Rom",
      price: 21.99,
      frontImage: "/red-hoodie.png",
      backImage: "/purple-hoodie.png", // Different back image
      colors: ["red", "black", "gray", "navy"],
      category: "hoodies",
      isNew: false,
    },
    {
      id: "h10",
      name: "Relaxed Fit",
      brand: "Lexica Rom",
      price: 19.99,
      frontImage: "/purple-hoodie.png",
      backImage: "/red-hoodie.png", // Different back image
      colors: ["purple", "black", "gray", "navy"],
      category: "hoodies",
      isNew: false,
    },
    {
      id: "h11",
      name: "Sporty Style",
      brand: "Lexica Rom",
      price: 25.99,
      frontImage: "/orange-hoodie.png",
      backImage: "/teal-hoodie.png", // Different back image
      colors: ["orange", "black", "gray", "navy"],
      category: "hoodies",
      isNew: false,
    },
    {
      id: "h12",
      name: "Athleisure",
      brand: "Lexica Rom",
      price: 26.99,
      frontImage: "/teal-hoodie.png",
      backImage: "/orange-hoodie.png", // Different back image
      colors: ["teal", "black", "gray", "navy"],
      category: "hoodies",
      isNew: false,
    },
  
    // T-shirts
    {
      id: "t1",
      name: "Keep Rocking",
      brand: "Lexica Rom",
      price: 29.99,
      frontImage: "/graphic-black-tee.png",
      backImage: "/yellow-tshirt.png", // Different back image
      colors: ["black", "orange"],
      category: "tshirts",
      isNew: true,
    },
    {
      id: "t2",
      name: "Freedom Always",
      brand: "Lexica Rom",
      price: 21.99,
      frontImage: "/graphic-navy-shirt.png",
      backImage: "/red-tshirt.png", // Different back image
      colors: ["black", "blue"],
      category: "tshirts",
      isNew: true,
    },
    {
      id: "t3",
      name: "You Can Do Anything",
      brand: "Lexica Rom",
      price: 18.99,
      frontImage: "/yellow-tshirt.png",
      backImage: "/blue-tshirt.png", // Different back image
      colors: ["yellow", "white", "black"],
      category: "tshirts",
      isNew: true,
    },
    {
      id: "t4",
      name: "Bold Statement",
      brand: "Lexica Rom",
      price: 19.99,
      frontImage: "/red-tshirt.png",
      backImage: "/graphic-black-tee.png", // Different back image
      colors: ["red", "black", "white"],
      category: "tshirts",
      isNew: true,
    },
    {
      id: "t5",
      name: "Casual Cool",
      brand: "Lexica Rom",
      price: 16.99,
      frontImage: "/blue-tshirt.png",
      backImage: "/graphic-navy-shirt.png", // Different back image
      colors: ["blue", "black", "gray"],
      category: "tshirts",
      isNew: true,
    },
    {
      id: "t6",
      name: "Everyday Essential",
      brand: "Lexica Rom",
      price: 15.99,
      frontImage: "/white-tshirt.png",
      backImage: "/gray-tshirt.png", // Different back image
      colors: ["white", "black", "gray", "navy"],
      category: "tshirts",
      isNew: true,
    },
    {
      id: "t7",
      name: "Urban Explorer",
      brand: "Lexica Rom",
      price: 17.99,
      frontImage: "/green-tshirt.png",
      backImage: "/purple-tshirt.png", // Different back image
      colors: ["green", "black", "white"],
      category: "tshirts",
      isNew: false,
    },
    {
      id: "t8",
      name: "Street Smart",
      brand: "Lexica Rom",
      price: 18.99,
      frontImage: "/purple-tshirt.png",
      backImage: "/green-tshirt.png", // Different back image
      colors: ["purple", "black", "white"],
      category: "tshirts",
      isNew: false,
    },
    {
      id: "t9",
      name: "Weekend Warrior",
      brand: "Lexica Rom",
      price: 16.99,
      frontImage: "/orange-tshirt.png",
      backImage: "/pink-tshirt.png", // Different back image
      colors: ["orange", "black", "white"],
      category: "tshirts",
      isNew: false,
    },
    {
      id: "t10",
      name: "Graphic Art",
      brand: "Lexica Rom",
      price: 19.99,
      frontImage: "/pink-tshirt.png",
      backImage: "/orange-tshirt.png", // Different back image
      colors: ["pink", "black", "white"],
      category: "tshirts",
      isNew: false,
    },
    {
      id: "t11",
      name: "Minimalist",
      brand: "Lexica Rom",
      price: 15.99,
      frontImage: "/gray-tshirt.png",
      backImage: "/white-tshirt.png", // Different back image
      colors: ["gray", "black", "white", "navy"],
      category: "tshirts",
      isNew: false,
    },
    {
      id: "t12",
      name: "Classic Fit",
      brand: "Lexica Rom",
      price: 14.99,
      frontImage: "/teal-tshirt.png",
      backImage: "/blue-tshirt.png", // Different back image
      colors: ["teal", "black", "white"],
      category: "tshirts",
      isNew: false,
    },
  
    // Jackets
    {
      id: "j1",
      name: "Urban Explorer",
      brand: "Lexica Rom",
      price: 49.99,
      frontImage: "/black-jacket.png",
      backImage: "/navy-jacket.png", // Different back image
      colors: ["black", "navy", "olive"],
      category: "jackets",
      isNew: true,
    },
    {
      id: "j2",
      name: "City Slicker",
      brand: "Lexica Rom",
      price: 59.99,
      frontImage: "/navy-jacket.png",
      backImage: "/black-jacket.png", // Different back image
      colors: ["navy", "black", "gray"],
      category: "jackets",
      isNew: true,
    },
    {
      id: "j3",
      name: "Weekend Wanderer",
      brand: "Lexica Rom",
      price: 54.99,
      frontImage: "/brown-jacket.png",
      backImage: "/green-jacket.png", // Different back image
      colors: ["brown", "black", "olive"],
      category: "jackets",
      isNew: true,
    },
    {
      id: "j4",
      name: "Mountain Trek",
      brand: "Lexica Rom",
      price: 64.99,
      frontImage: "/green-jacket.png",
      backImage: "/brown-jacket.png", // Different back image
      colors: ["green", "black", "navy"],
      category: "jackets",
      isNew: true,
    },
    {
      id: "j5",
      name: "Street Smart",
      brand: "Lexica Rom",
      price: 52.99,
      frontImage: "/gray-jacket.png",
      backImage: "/red-jacket.png", // Different back image
      colors: ["gray", "black", "navy"],
      category: "jackets",
      isNew: true,
    },
    {
      id: "j6",
      name: "Urban Nomad",
      brand: "Lexica Rom",
      price: 57.99,
      frontImage: "/red-jacket.png",
      backImage: "/gray-jacket.png", // Different back image
      colors: ["red", "black", "navy"],
      category: "jackets",
      isNew: true,
    },
    {
      id: "j7",
      name: "Adventure Seeker",
      brand: "Lexica Rom",
      price: 62.99,
      frontImage: "/blue-jacket.png",
      backImage: "/white-jacket.png", // Different back image
      colors: ["blue", "black", "gray"],
      category: "jackets",
      isNew: false,
    },
    {
      id: "j8",
      name: "Winter Explorer",
      brand: "Lexica Rom",
      price: 69.99,
      frontImage: "/white-jacket.png",
      backImage: "/blue-jacket.png", // Different back image
      colors: ["white", "black", "gray"],
      category: "jackets",
      isNew: false,
    },
    {
      id: "j9",
      name: "Outdoor Enthusiast",
      brand: "Lexica Rom",
      price: 59.99,
      frontImage: "/orange-jacket.png",
      backImage: "/purple-jacket.png", // Different back image
      colors: ["orange", "black", "gray"],
      category: "jackets",
      isNew: false,
    },
    {
      id: "j10",
      name: "Trail Blazer",
      brand: "Lexica Rom",
      price: 64.99,
      frontImage: "/purple-jacket.png",
      backImage: "/orange-jacket.png", // Different back image
      colors: ["purple", "black", "gray"],
      category: "jackets",
      isNew: false,
    },
    {
      id: "j11",
      name: "Summit Seeker",
      brand: "Lexica Rom",
      price: 72.99,
      frontImage: "/yellow-jacket.png",
      backImage: "/teal-jacket.png", // Different back image
      colors: ["yellow", "black", "gray"],
      category: "jackets",
      isNew: false,
    },
    {
      id: "j12",
      name: "Alpine Adventure",
      brand: "Lexica Rom",
      price: 79.99,
      frontImage: "/teal-jacket.png",
      backImage: "/yellow-jacket.png", // Different back image
      colors: ["teal", "black", "gray"],
      category: "jackets",
      isNew: false,
    },
  
    // Shirts
    {
      id: "s1",
      name: "Business Casual",
      brand: "Lexica Rom",
      price: 34.99,
      frontImage: "/white-shirt.png",
      backImage: "/blue-shirt.png", // Different back image
      colors: ["white", "blue", "black"],
      category: "shirts",
      isNew: true,
    },
    {
      id: "s2",
      name: "Office Ready",
      brand: "Lexica Rom",
      price: 39.99,
      frontImage: "/blue-shirt.png",
      backImage: "/white-shirt.png", // Different back image
      colors: ["blue", "white", "black"],
      category: "shirts",
      isNew: true,
    },
    {
      id: "s3",
      name: "Weekend Brunch",
      brand: "Lexica Rom",
      price: 32.99,
      frontImage: "/checkered-shirt.png",
      backImage: "/striped-shirt.png", // Different back image
      colors: ["blue", "red", "green"],
      category: "shirts",
      isNew: true,
    },
    {
      id: "s4",
      name: "Smart Casual",
      brand: "Lexica Rom",
      price: 36.99,
      frontImage: "/striped-shirt.png",
      backImage: "/checkered-shirt.png", // Different back image
      colors: ["blue", "white", "black"],
      category: "shirts",
      isNew: true,
    },
    {
      id: "s5",
      name: "Dinner Date",
      brand: "Lexica Rom",
      price: 42.99,
      frontImage: "/black-shirt.png",
      backImage: "/formal-shirt.png", // Different back image
      colors: ["black", "navy", "white"],
      category: "shirts",
      isNew: true,
    },
    {
      id: "s6",
      name: "Formal Affair",
      brand: "Lexica Rom",
      price: 45.99,
      frontImage: "/formal-shirt.png",
      backImage: "/black-shirt.png", // Different back image
      colors: ["white", "black", "blue"],
      category: "shirts",
      isNew: true,
    },
    {
      id: "s7",
      name: "Casual Friday",
      brand: "Lexica Rom",
      price: 31.99,
      frontImage: "/green-shirt.png",
      backImage: "/red-shirt.png", // Different back image
      colors: ["green", "blue", "black"],
      category: "shirts",
      isNew: false,
    },
    {
      id: "s8",
      name: "Weekend Getaway",
      brand: "Lexica Rom",
      price: 33.99,
      frontImage: "/red-shirt.png",
      backImage: "/green-shirt.png", // Different back image
      colors: ["red", "blue", "black"],
      category: "shirts",
      isNew: false,
    },
    {
      id: "s9",
      name: "Boardroom Ready",
      brand: "Lexica Rom",
      price: 44.99,
      frontImage: "/purple-shirt.png",
      backImage: "/gray-shirt.png", // Different back image
      colors: ["purple", "blue", "black"],
      category: "shirts",
      isNew: false,
    },
    {
      id: "s10",
      name: "Evening Out",
      brand: "Lexica Rom",
      price: 38.99,
      frontImage: "/gray-shirt.png",
      backImage: "/purple-shirt.png", // Different back image
      colors: ["gray", "blue", "black"],
      category: "shirts",
      isNew: false,
    },
    {
      id: "s11",
      name: "Summer Vibes",
      brand: "Lexica Rom",
      price: 29.99,
      frontImage: "/yellow-shirt.png",
      backImage: "/teal-shirt.png", // Different back image
      colors: ["yellow", "blue", "white"],
      category: "shirts",
      isNew: false,
    },
    {
      id: "s12",
      name: "Classic Style",
      brand: "Lexica Rom",
      price: 37.99,
      frontImage: "/teal-shirt.png",
      backImage: "/yellow-shirt.png", // Different back image
      colors: ["teal", "blue", "white"],
      category: "shirts",
      isNew: false,
    },
  ]
  
  // Get new products
  export function getNewProducts(): Product[] {
    return allProducts.filter((product) => product.isNew)
  }
  
  // Helper function to get products by category
  export function getProductsByCategory(category: string): Product[] {
    if (category === "all") return allProducts
    return allProducts.filter((product) => product.category === category)
  }
  
  // Helper function to paginate products
  export function paginateProducts(products: Product[], page: number, perPage: number): Product[] {
    const start = (page - 1) * perPage
    const end = start + perPage
    return products.slice(start, end)
  }
  
  // Helper function to get total pages
  export function getTotalPages(products: Product[], perPage: number): number {
    return Math.ceil(products.length / perPage)
  }
  