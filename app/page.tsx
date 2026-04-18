"use client"

import { useState, useMemo, useCallback } from "react"
import { Hero } from "@/components/hero"
import { TrackList } from "@/components/track-list"
import { AudioPlayer } from "@/components/audio-player"
import { tracks } from "@/lib/tracks"
import type { Track } from "@/lib/tracks"

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)

  const totalPlays = useMemo(() => {
    return tracks.reduce((sum, track) => sum + track.plays, 0)
  }, [])

  const handleTrackSelect = useCallback((track: Track) => {
    setCurrentTrack(track)
  }, [])

  const handlePlayAll = useCallback(() => {
    if (tracks.length > 0) {
      setCurrentTrack(tracks[0])
    }
  }, [])

  const handleClose = useCallback(() => {
    setCurrentTrack(null)
  }, [])

  const handlePrevious = useCallback(() => {
    if (!currentTrack) return
    const currentIndex = tracks.findIndex(t => t.id === currentTrack.id)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : tracks.length - 1
    setCurrentTrack(tracks[prevIndex])
  }, [currentTrack])

  const handleNext = useCallback(() => {
    if (!currentTrack) return
    const currentIndex = tracks.findIndex(t => t.id === currentTrack.id)
    const nextIndex = currentIndex < tracks.length - 1 ? currentIndex + 1 : 0
    setCurrentTrack(tracks[nextIndex])
  }, [currentTrack])

  return (
    <main className="min-h-screen bg-background pb-24">
      <Hero
        totalTracks={tracks.length}
        totalPlays={totalPlays}
        onPlayAll={handlePlayAll}
      />
      <TrackList
        tracks={tracks}
        currentTrackId={currentTrack?.id ?? null}
        onTrackSelect={handleTrackSelect}
      />
      <AudioPlayer
        track={currentTrack}
        onClose={handleClose}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />

      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
        <p>DJ Smoke Stream - All tracks available on Suno</p>
        <a
          href="https://suno.com/@dj_smoke_stream"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-primary hover:underline"
        >
          Visit Suno Profile
        </a>
      </footer>
    </main>
  )
}
