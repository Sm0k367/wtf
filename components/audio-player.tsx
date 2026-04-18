"use client"

import { X, SkipBack, SkipForward, ExternalLink, Music, Play, Clock, Headphones, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Track } from "@/lib/tracks"

interface AudioPlayerProps {
  track: Track | null
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}

const SUNO_PROFILE = "https://suno.com/@dj_smoke_stream"

export function AudioPlayer({ track, onClose, onPrevious, onNext }: AudioPlayerProps) {
  if (!track) return null

  const genres = track.genre.split(",").slice(0, 4).map(g => g.trim())

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-gradient-to-t from-background via-card to-card/95 backdrop-blur-xl">
      <div className="mx-auto max-w-5xl">
        {/* Track Info Panel */}
        <div className="px-6 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Left: Track info */}
            <div className="flex items-center gap-4">
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20">
                <Music className="h-8 w-8 text-primary" />
                <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Play className="h-3 w-3" />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-lg font-semibold">{track.title}</h3>
                <p className="text-sm text-muted-foreground">DJ Smoke Stream</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {genres.map((genre) => (
                    <Badge key={genre} variant="secondary" className="text-xs">
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Stats and actions */}
            <div className="flex flex-col items-end gap-3">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {track.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Headphones className="h-4 w-4" />
                  {track.plays} plays
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="h-4 w-4" />
                  {track.likes}
                </span>
              </div>
              
              <a
                href={SUNO_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  <ExternalLink className="h-4 w-4" />
                  Play on Suno
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        {/* Controls Bar */}
        <div className="flex items-center justify-between border-t border-border/50 px-6 py-3">
          <p className="text-xs text-muted-foreground">
            Click &quot;Play on Suno&quot; to listen to this track
          </p>
          
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={onPrevious} className="gap-1">
              <SkipBack className="h-4 w-4" />
              <span className="hidden sm:inline">Previous</span>
            </Button>
            <Button variant="ghost" size="sm" onClick={onNext} className="gap-1">
              <span className="hidden sm:inline">Next</span>
              <SkipForward className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose} title="Close">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
