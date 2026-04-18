"use client"

import { useState, useMemo } from "react"
import { Search, Filter, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TrackCard } from "./track-card"
import type { Track } from "@/lib/tracks"

interface TrackListProps {
  tracks: Track[]
  currentTrackId: number | null
  onTrackSelect: (track: Track) => void
}

type SortOption = "default" | "plays" | "likes" | "title"

export function TrackList({ tracks, currentTrackId, onTrackSelect }: TrackListProps) {
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState<SortOption>("default")
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null)

  const allGenres = useMemo(() => {
    const genreSet = new Set<string>()
    tracks.forEach(track => {
      track.genre.split(",").forEach(g => {
        const genre = g.trim().toLowerCase()
        if (genre.length > 2) genreSet.add(genre)
      })
    })
    return Array.from(genreSet).sort().slice(0, 20)
  }, [tracks])

  const filteredTracks = useMemo(() => {
    let result = [...tracks]

    if (search) {
      const searchLower = search.toLowerCase()
      result = result.filter(
        track =>
          track.title.toLowerCase().includes(searchLower) ||
          track.genre.toLowerCase().includes(searchLower)
      )
    }

    if (selectedGenre) {
      result = result.filter(track =>
        track.genre.toLowerCase().includes(selectedGenre)
      )
    }

    switch (sortBy) {
      case "plays":
        result.sort((a, b) => b.plays - a.plays)
        break
      case "likes":
        result.sort((a, b) => b.likes - a.likes)
        break
      case "title":
        result.sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    return result
  }, [tracks, search, sortBy, selectedGenre])

  return (
    <section className="px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold">All Tracks</h2>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search tracks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 sm:w-64"
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="max-h-64 overflow-y-auto">
                <DropdownMenuItem onClick={() => setSelectedGenre(null)}>
                  All Genres
                </DropdownMenuItem>
                {allGenres.map((genre) => (
                  <DropdownMenuItem
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={selectedGenre === genre ? "bg-accent" : ""}
                  >
                    {genre}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setSortBy("default")}>
                  Default Order
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("plays")}>
                  Most Played
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("likes")}>
                  Most Liked
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("title")}>
                  Alphabetical
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {selectedGenre && (
          <div className="mb-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setSelectedGenre(null)}
              className="gap-2"
            >
              {selectedGenre}
              <span className="text-xs">×</span>
            </Button>
          </div>
        )}

        <div className="mb-4 text-sm text-muted-foreground">
          Showing {filteredTracks.length} of {tracks.length} tracks
        </div>

        <div className="flex flex-col gap-2">
          {filteredTracks.map((track, index) => (
            <TrackCard
              key={track.id}
              track={track}
              index={index}
              isPlaying={currentTrackId === track.id}
              onPlay={() => onTrackSelect(track)}
            />
          ))}
        </div>

        {filteredTracks.length === 0 && (
          <div className="py-12 text-center text-muted-foreground">
            No tracks found matching your search.
          </div>
        )}
      </div>
    </section>
  )
}
