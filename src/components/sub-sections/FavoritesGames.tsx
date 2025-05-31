"use client"

import { ArrowLeft, Star, Calendar, Trophy, Gamepad2, Zap, Heart } from "lucide-react"
import Link from "next/link"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { favoriteGames, GameCard } from "@/data/games/gamesData"

gsap.registerPlugin(ScrollTrigger)


export default function FavoriteGamesPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Floating animation for cards
      gsap.utils.toArray(".game-card").forEach((card, index) => {
        // Initial animation - cards fly in from different directions
        const directions = [
          { x: -100, y: -50, rotation: -15 },
          { x: 100, y: -30, rotation: 10 },
          { x: -80, y: 50, rotation: 8 },
          { x: 120, y: -40, rotation: -12 },
          { x: -60, y: 30, rotation: 15 },
          { x: 90, y: -20, rotation: -8 },
        ]

        const direction = directions[index % directions.length]

        gsap.from(card as Element, {
          x: direction.x,
          y: direction.y,
          rotation: direction.rotation,
          opacity: 0,
          scale: 0.8,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card as Element,
            start: "top 85%",
          },
          delay: index * 0.1,
        })

        // Continuous floating animation
        gsap.to(card as Element, {
          y: "random(-10, 10)",
          rotation: "random(-2, 2)",
          duration: "random(3, 5)",
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.2,
        })

        // Hover tilt effect
        const cardElement = card as HTMLElement
        cardElement.addEventListener("mouseenter", () => {
          gsap.to(card as Element, {
            rotationY: 5,
            rotationX: 5,
            z: 50,
            duration: 0.3,
            ease: "power2.out",
          })
        })

        cardElement.addEventListener("mouseleave", () => {
          gsap.to(card as Element, {
            rotationY: 0,
            rotationX: 0,
            z: 0,
            duration: 0.3,
            ease: "power2.out",
          })
        })
      })

      // Animate achievement bars
      gsap.utils.toArray(".achievement-bar").forEach((bar) => {
        gsap.from(bar as Element, {
          width: "0%",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar as Element,
            start: "top 80%",
          },
        })
      })

      // Title animation
      gsap.from(".page-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })

      // Stagger animation for stats
      gsap.from(".game-stat", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5,
      })
    },
    { scope: containerRef },
  )

  const totalHours = favoriteGames.reduce((acc, game) => {
    const hours = Number.parseInt(game.hours.replace("+", ""))
    return acc + hours
  }, 0)

  const averageRating = (favoriteGames.reduce((acc, game) => acc + game.rating, 0) / favoriteGames.length).toFixed(1)

  return (
    <main ref={containerRef} className="bg-zinc-900 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        {/* Botón de regresar */}
        <Link
          href="/#about"
          className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="page-title text-4xl md:text-6xl font-bold mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Favorite Games
            </span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-8">
            A curated collection of the games that have shaped my gaming journey and provided countless hours of
            entertainment.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="game-stat text-center">
              <div className="text-3xl font-bold text-pink-400">{favoriteGames.length}</div>
              <div className="text-sm text-zinc-400">Games</div>
            </div>
            <div className="game-stat text-center">
              <div className="text-3xl font-bold text-pink-400">{totalHours}+</div>
              <div className="text-sm text-zinc-400">Hours Played</div>
            </div>
            <div className="game-stat text-center">
              <div className="text-3xl font-bold text-pink-400">{averageRating}</div>
              <div className="text-sm text-zinc-400">Avg Rating</div>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {favoriteGames.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 py-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
            <Gamepad2 className="h-8 w-8 text-pink-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">Gaming Never Stops</h3>
          <p className="text-zinc-300 max-w-md mx-auto">
            Always on the lookout for the next great adventure. What game should I play next?
          </p>
        </div>
      </div>
    </main>
  )
}
