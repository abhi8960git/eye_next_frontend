import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function SocialMedia() {
  return (
    <div className="flex flex-col space-y-3">
      <p className="text-sm font-bold text-white">Find & Follow Us On</p>
      <div className="flex space-x-4">
        <Link href="#" className="text-gray-400 hover:text-white">
          <Facebook size={24} />
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white">
          <Twitter size={24} />
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white">
          <Instagram size={24} />
        </Link>
      </div>
    </div>
  )
}
