"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Play, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface VideoCardProps {
  title: string
  description: string
  thumbnailUrl: string
  videoUrl: string
  category: string
  buttonStyle?: string
  labelStyle?: string
  isVertical?: boolean
  customOverlayOpacity?: string
}

export function VideoCard({
  title,
  description,
  thumbnailUrl,
  videoUrl,
  category,
  buttonStyle,
  labelStyle,
  isVertical = false,
  customOverlayOpacity,
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Calculate aspect ratio padding
  // For vertical videos, use a smaller aspect ratio on mobile
  const verticalAspectRatio = "pt-[177.78%] sm:pt-[160%] md:pt-[177.78%]"
  const horizontalAspectRatio = "pt-[56.25%]"

  return (
    <Card className="bg-black/50 border-0 overflow-hidden group rounded-lg">
      <CardContent className="p-0 relative">
        {isPlaying ? (
          <div className={`relative w-full ${isVertical ? verticalAspectRatio : horizontalAspectRatio}`}>
            <iframe
              src={`${videoUrl}?autoplay=1`}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 bg-black/70 rounded-full p-2 hover:bg-black/90 transition-colors z-10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <div
              className={`w-full ${isVertical ? verticalAspectRatio : horizontalAspectRatio} bg-cover bg-center transition-transform duration-500 group-hover:scale-105`}
              style={{ backgroundImage: `url(${thumbnailUrl})` }}
            />
            <div
              className={`absolute inset-0 bg-black/10 flex items-center justify-center ${customOverlayOpacity || "opacity-20 group-hover:opacity-80"} transition-opacity`}
            >
              <button
                onClick={() => setIsPlaying(true)}
                className={`rounded-full ${isVertical ? "p-4 sm:p-6" : "p-6"} transform transition-transform hover:scale-110 ${
                  buttonStyle || "bg-white text-black border-2 border-black shadow-lg"
                }`}
              >
                <Play className={cn("fill-current", isVertical ? "h-6 w-6 sm:h-8 sm:w-8" : "h-8 w-8")} />
              </button>
            </div>
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
              <span
                className={`px-2 py-1 sm:px-3 sm:py-1 text-xs font-medium rounded-full ${
                  labelStyle || "bg-black text-white border border-white"
                }`}
              >
                {category}
              </span>
            </div>
          </div>
        )}
        <div className={cn("p-3 sm:p-4", isVertical && "text-center")}>
          <h3 className={cn("font-semibold", isVertical ? "text-base sm:text-lg" : "text-lg")}>{title}</h3>
          <p className={cn("text-muted-foreground mt-1", isVertical ? "text-xs sm:text-sm" : "text-sm")}>
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

