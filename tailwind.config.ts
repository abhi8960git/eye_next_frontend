import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
import { Jockey_One, Inter } from "next/font/google";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    "./*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      heading1: ["jockeyOne", "serif"],
      heading2: ["var(--font-heading)", "sans-serif"],
      sans: ["Inter", ...fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      buttons: {
        primary: {
          background: "#f97316", // orange-500
          text: "#ffffff",
          hover: "#ea580c", // orange-600
          active: "#c2410c", // orange-700
        },
        secondary: {
          background: "#292929", // secondary
          text: "#ffffff",
          hover: "#3d3d3d",
          active: "#1a1a1a",
        },
        outline: {
          border: "#f97316", // orange-500
          text: "#f97316",
          hover: {
            background: "#f97316",
            text: "#ffffff",
          },
          active: {
            background: "#ea580c", // orange-600
            text: "#ffffff",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "progress-loading": {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-50": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in-from-top-5": {
          from: { transform: "translateY(-5%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-left-10": {
          from: { transform: "translateX(-10%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-from-left-5": {
          from: { transform: "translateX(-5%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-from-bottom-5": {
          from: { transform: "translateY(5%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-from-right-10": {
          from: { transform: "translateX(10%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-from-top-10": {
          from: { transform: "translateY(-10%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-from-bottom-full": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "zoom-in-95": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.33%)" },
        },
      },
      animation: {
        "progress-loading": "progress-loading 2s infinite cubic-bezier(0.4, 0, 0.2, 1)",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-50": "fade-in-50 0.3s ease-out",
        "slide-in-from-bottom-5": "slide-in-from-bottom-5 0.4s ease-out forwards",
        "slide-in-from-right-10": "slide-in-from-right-10 0.3s ease-out forwards",
        "slide-in-from-left-10": "slide-in-from-left-10 0.3s ease-out forwards",
        "slide-in-from-left-5": "slide-in-from-left-5 0.2s ease-out forwards",
        "slide-in-from-top-10": "slide-in-from-top-10 0.3s ease-out forwards",
        "slide-in-from-bottom-full": "slide-in-from-bottom-full 0.3s ease-out forwards",
        "zoom-in-95": "zoom-in-95 0.2s ease-out",
        marquee: "marquee 20s linear infinite",
        "spin-slow": "spin 30s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
}

export default config