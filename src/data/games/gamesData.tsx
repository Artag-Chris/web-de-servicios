import { Trophy, Gamepad2, Heart, Star, Calendar, Zap } from "lucide-react"
import { useRef } from "react"
import Image from "next/image"

export interface Game {
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

export const favoriteGames: Game[] = [
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

export const GameCard = ({ game, index }: { game: Game; index: number }) => {
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
