"use client"

import { Play, Headphones, Disc3 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  totalTracks: number
  totalPlays: number
  onPlayAll: () => void
}

export function Hero({ totalTracks, totalPlays, onPlayAll }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-20 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 right-1/4 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
          <Disc3 className="h-4 w-4 animate-spin text-primary" style={{ animationDuration: "3s" }} />
          <span className="text-sm text-muted-foreground">Now Streaming</span>
        </div>
        
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-balance md:text-7xl">
          DJ <span className="text-primary">Smoke Stream</span>
        </h1>
        
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground text-pretty">
          Hip-hop, house, trap, turntablism, and experimental electronic music. 
          From G-funk grooves to big room bangers - explore the complete discography.
        </p>
        
        <div className="mb-10 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Headphones className="h-5 w-5 text-primary" />
            <span className="text-lg font-medium">{totalPlays.toLocaleString()} Plays</span>
          </div>
          <div className="h-6 w-px bg-border" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <Disc3 className="h-5 w-5 text-primary" />
            <span className="text-lg font-medium">{totalTracks} Tracks</span>
          </div>
        </div>
        
        <Button size="lg" onClick={onPlayAll} className="gap-2">
          <Play className="h-5 w-5" />
          Play All Tracks
        </Button>
      </div>
    </section>
  )
}
