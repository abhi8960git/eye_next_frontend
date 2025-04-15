// Product data types
export interface Product {
    id: number
    name: string
    brand: string
    price: number
    colors: string[]
    frontImage: string
    backImage: string
  }
  
  // Generate product data
  export const generateProducts = (): Product[] => {
    return [
      {
        id: 1,
        name: "Let's Go",
        brand: "Letica Room",
        price: 17.99,
        colors: ["black", "gray", "lightgray", "white"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg"
      },
      {
        id: 2,
        name: "Keep Rocking",
        brand: "Letica Room",
        price: 29.99,
        colors: ["black", "orange"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg"   },
      {
        id: 3,
        name: "Freedom Always",
        brand: "Letica Room",
        price: 21.99,
        colors: ["black", "navy"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg"    },
      {
        id: 4,
        name: "Noice",
        brand: "Letica Room",
        price: 14.99,
        colors: ["black", "gray", "lightgray", "white"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg"  },
      {
        id: 5,
        name: "Urban Style",
        brand: "Letica Room",
        price: 24.99,
        colors: ["black", "gray", "green"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg"  },
      {
        id: 6,
        name: "Street Vibe",
        brand: "Letica Room",
        price: 19.99,
        colors: ["red", "black", "blue"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg"   },
      {
        id: 7,
        name: "Casual Comfort",
        brand: "Letica Room",
        price: 22.99,
        colors: ["black", "beige", "brown"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg"  },
      {
        id: 8,
        name: "Vintage Look",
        brand: "Letica Room",
        price: 26.99,
        colors: ["navy", "red", "white"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg"  },
      {
        id: 9,
        name: "Abstract Art",
        brand: "ArtVision",
        price: 34.99,
        colors: ["black", "white", "blue"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg"   },
      {
        id: 10,
        name: "Minimalist Design",
        brand: "ArtVision",
        price: 19.99,
        colors: ["white", "black", "gray"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg" },
      {
        id: 11,
        name: "Outdoor Explorer",
        brand: "NatureTrek",
        price: 32.99,
        colors: ["green", "brown", "black"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg" },
      {
        id: 12,
        name: "Mountain Range",
        brand: "NatureTrek",
        price: 27.99,
        colors: ["blue", "gray", "green"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg" },
      {
        id: 13,
        name: "Retro Vibes",
        brand: "Vintage Co.",
        price: 23.99,
        colors: ["orange", "brown", "beige"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg"},
      {
        id: 14,
        name: "Classic Style",
        brand: "Vintage Co.",
        price: 29.99,
        colors: ["navy", "red", "white"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg" },
      {
        id: 15,
        name: "Urban Legend",
        brand: "StreetWear",
        price: 36.99,
        colors: ["black", "gray", "white"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg" },
      {
        id: 16,
        name: "City Nights",
        brand: "StreetWear",
        price: 25.99,
        colors: ["black", "blue", "purple"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg"  },
      {
        id: 17,
        name: "Tech Enthusiast",
        brand: "DigitalArt",
        price: 24.99,
        colors: ["black", "blue", "green"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg"  },
      {
        id: 18,
        name: "Code Master",
        brand: "DigitalArt",
        price: 22.99,
        colors: ["black", "white", "gray"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg" },
      {
        id: 19,
        name: "Beach Vibes",
        brand: "CoastalWear",
        price: 21.99,
        colors: ["blue", "white", "lightgray"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg" },
      {
        id: 20,
        name: "Surf's Up",
        brand: "CoastalWear",
        price: 19.99,
        colors: ["blue", "green", "white"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg"  },
      {
        id: 21,
        name: "Athletic Performance",
        brand: "SportFit",
        price: 32.99,
        colors: ["black", "red", "blue"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg"  },
      {
        id: 22,
        name: "Training Zone",
        brand: "SportFit",
        price: 27.99,
        colors: ["gray", "red", "black"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg"  },
      {
        id: 23,
        name: "Cosmic Dreams",
        brand: "GalaxyDesigns",
        price: 25.99,
        colors: ["black", "purple", "blue"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg"  },
      {
        id: 24,
        name: "Starry Night",
        brand: "GalaxyDesigns",
        price: 23.99,
        colors: ["navy", "purple", "black"],
        frontImage: "/HomePageImages/front.jpg",
        backImage: "/HomePageImages/back.jpg" }
    ]
  }
  
  // Get color class based on color name
  export const getColorClass = (color: string): string => {
    switch (color) {
      case "black":
        return "bg-black"
      case "gray":
        return "bg-gray-500"
      case "lightgray":
        return "bg-gray-300"
      case "white":
        return "bg-white"
      case "orange":
        return "bg-orange-500"
      case "navy":
        return "bg-blue-900"
      case "red":
        return "bg-red-500"
      case "blue":
        return "bg-blue-500"
      case "green":
        return "bg-green-500"
      case "beige":
        return "bg-amber-100"
      case "brown":
        return "bg-amber-800"
      case "purple":
        return "bg-purple-600"
      default:
        return "bg-gray-200"
    }
  }