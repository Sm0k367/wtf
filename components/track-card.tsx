"use client"

import { Play, Pause, Heart, MessageCircle, Headphones, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Track } from "@/lib/tracks"

interface TrackCardProps {
  track: Track
  index: number
  isPlaying: boolean
  onPlay: () => void
}

export function TrackCard({ track, index, isPlaying, onPlay }: TrackCardProps) {
  const genres = track.genre.split(",").slice(0, 3).map(g => g.trim())
  
  return (
    <div className="group relative rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-card/80">
      <div className="flex items-start gap-4">
        <button
          onClick={onPlay}
          className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <span className="absolute text-xs font-medium opacity-100 transition-opacity group-hover:opacity-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          {isPlaying ? (
            <Pause className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
          ) : (
            <Play className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
          )}
        </button>
        
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-medium text-foreground">{track.title}</h3>
          <div className="mt-1 flex flex-wrap gap-1">
            {genres.map((genre) => (
              <Badge key={genre} variant="secondary" className="text-xs">
                {genre}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex shrink-0 items-center gap-4 text-sm text-muted-foreground">
          <div className="hidden items-center gap-1 sm:flex">
            <Clock className="h-3.5 w-3.5" />
            <span>{track.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Headphones className="h-3.5 w-3.5" />
            <span>{track.plays}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="h-3.5 w-3.5" />
            <span>{track.likes}</span>
          </div>
          {track.comments > 0 && (
            <div className="hidden items-center gap-1 sm:flex">
              <MessageCircle className="h-3.5 w-3.5" />
              <span>{track.comments}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
