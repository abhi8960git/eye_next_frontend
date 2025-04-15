"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, User } from "lucide-react"

interface ArtistCardProps {
  name: string
  followers: number
  designs: number
  backgroundUrl: string
  profileUrl: string
}

export default function ArtistCard({ name, followers, designs, backgroundUrl, profileUrl }: ArtistCardProps) {
  const [isFollowing, setIsFollowing] = useState(false)

  // Default placeholder images with specific dimensions and queries
  const defaultBgPlaceholder = "/chromatic-explosion.png"
  const defaultProfilePlaceholder = "/abstract-user-icon.png"

  // Ensure we have valid image sources
  const bgImage = backgroundUrl && backgroundUrl.trim() !== "" ? backgroundUrl : defaultBgPlaceholder
  const profileImage = profileUrl && profileUrl.trim() !== "" ? profileUrl : defaultProfilePlaceholder

  return (
    <div className="w-full transition-all duration-300">
      {/* Card with proper spacing for the profile image */}
      <div className="relative mb-10">
        {/* Background image container */}
        <div className="h-[150px] rounded-t-lg overflow-hidden">
          <Image src={bgImage || "/placeholder.svg"} alt={`${name}'s artwork`} fill className="object-cover rounded-t-lg" />
        </div>

        {/* Profile image positioned at bottom center with high z-index */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-50">
          <div className="w-[70px] h-[70px] rounded-full border-4 border-white bg-white shadow-md overflow-hidden">
            <Image
              src={profileImage || "/placeholder.svg"}
              alt={name}
              width={70}
              height={70}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Text content with proper spacing */}
      <div className="pt-6 text-center">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-600">
          {followers} Followers &nbsp; {designs} Designs
        </p>
        <div className="mt-2 flex flex-col items-center gap-2">
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`w-full max-w-[120px] ${
              isFollowing ? "bg-green-500" : "bg-orange-500"
            } text-white px-4 py-1 rounded-full text-sm flex items-center justify-center gap-1 transition-colors`}
          >
            {isFollowing ? (
              <>
                <Check className="h-3 w-3" /> Following
              </>
            ) : (
              "Follow"
            )}
          </button>

          {isFollowing && (
            <button className="w-full max-w-[140px] border border-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm flex items-center justify-center gap-1 whitespace-nowrap hover:bg-gray-50 transition-colors">
              <User className="h-3 w-3 flex-shrink-0" />
              <span className="flex-shrink-0">View Profile</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
