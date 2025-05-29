"use client"

import { ArrowLeft, Star, Calendar, Trophy, Gamepad2, Zap, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Game {
  id: number
  title: string
  genre: string
  year: string
  rating: number
  hours: string
  description: string
  imageUrl: string
  platform: string
  status: "completed" | "playing" | "favorite"
  achievements: number
}

const favoriteGames: Game[] = [
  {
    id: 1,
    title: "The Witcher 3: Wild Hunt",
    genre: "RPG",
    year: "2015",
    rating: 5,
    hours: "200+",
    description: "An epic fantasy adventure with incredible storytelling and vast open world exploration.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    platform: "PC",
    status: "completed",
    achievements: 95,
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    genre: "Action RPG",
    year: "2020",
    rating: 4,
    hours: "150+",
    description: "A futuristic open-world adventure in Night City with stunning visuals and deep customization.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    platform: "PC",
    status: "playing",
    achievements: 78,
  },
  {
    id: 3,
    title: "Red Dead Redemption 2",
    genre: "Action Adventure",
    year: "2018",
    rating: 5,
    hours: "180+",
    description: "The ultimate western experience with unparalleled attention to detail and immersive gameplay.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    platform: "PlayStation",
    status: "favorite",
    achievements: 88,
  },
  {
    id: 4,
    title: "God of War",
    genre: "Action Adventure",
    year: "2018",
    rating: 5,
    hours: "60+",
    description: "A masterful reimagining of the franchise with emotional storytelling and brutal combat.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    platform: "PlayStation",
    status: "completed",
    achievements: 100,
  },
  {
    id: 5,
    title: "Elden Ring",
    genre: "Souls-like RPG",
    year: "2022",
    rating: 5,
    hours: "120+",
    description: "FromSoftware's masterpiece combining challenging gameplay with an open-world design.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    platform: "PC",
    status: "playing",
    achievements: 65,
  },
  {
    id: 6,
    title: "Horizon Zero Dawn",
    genre: "Action RPG",
    year: "2017",
    rating: 4,
    hours: "80+",
    description: "A post-apocalyptic world filled with robotic creatures and an engaging storyline.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    platform: "PC",
    status: "completed",
    achievements: 92,
  },
]

const GameCard = ({ game, index }: { game: Game; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "playing":
        return "bg-pink-500/20 text-pink-300 border-pink-500/30"
      case "favorite":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <Trophy className="h-4 w-4" />
      case "playing":
        return <Gamepad2 className="h-4 w-4" />
      case "favorite":
        return <Heart className="h-4 w-4" />
      default:
        return <Star className="h-4 w-4" />
    }
  }

  return (
    <div
      ref={cardRef}
      className="game-card group relative bg-zinc-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-pink-500/50 transition-all duration-500"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Image section */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent z-10"></div>
        <Image
          src={game.imageUrl || "/placeholder.svg"}
          alt={game.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Status badge */}
        <div
          className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(game.status)} backdrop-blur-sm flex items-center gap-1`}
        >
          {getStatusIcon(game.status)}
          {game.status.charAt(0).toUpperCase() + game.status.slice(1)}
        </div>

        {/* Rating */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-zinc-900/80 backdrop-blur-sm px-2 py-1 rounded-full">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-3 w-3 ${i < game.rating ? "text-pink-400 fill-pink-400" : "text-zinc-600"}`} />
          ))}
        </div>
      </div>

      {/* Content section */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
            {game.title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {game.year}
            </span>
            <span className="flex items-center gap-1">
              <Zap className="h-4 w-4" />
              {game.hours}
            </span>
          </div>
        </div>

        <p className="text-zinc-300 text-sm leading-relaxed">{game.description}</p>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-xs text-zinc-500">Genre</div>
            <div className="text-sm font-medium text-pink-300">{game.genre}</div>
          </div>
          <div className="space-y-1 text-right">
            <div className="text-xs text-zinc-500">Platform</div>
            <div className="text-sm font-medium text-pink-300">{game.platform}</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-zinc-500">
            <span>Achievements</span>
            <span>{game.achievements}%</span>
          </div>
          <div className="w-full bg-zinc-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-1000 achievement-bar"
              style={{ width: `${game.achievements}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  )
}

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
