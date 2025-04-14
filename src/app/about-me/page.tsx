import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import CosmicNavbar from "@/components/compontents/cosmic-navbar";
import {navLinks} from "@/data/navlinks";
import AdvancedHorizontalScroll from "@/components/compontents/AdvancedHorizontalScroll";
import {contentSections} from "@/data/cardsContentSections";


export default function AboutMePage() {

  return (
      <main className="bg-zinc-900 min-h-screen">
        {/* Cosmic Navbar */}
        <CosmicNavbar links={navLinks} currentPath="/about-me" />

        <div className="container mx-auto px-4 py-10">
          {/* Botón de regresar */}
          <Link href="/#about" className="inline-flex items-center text-emerald-500 hover:text-emerald-400 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          {/* Contenido de la sección */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            My <span className="text-emerald-500">Journey</span>
          </h1>

          <div className="prose prose-lg prose-invert max-w-none prose-headings:text-emerald-400 prose-a:text-emerald-400">
            <p className="lead text-xl text-zinc-300">
              This page will contain more detailed information about your personal and professional journey.
            </p>
            <p>
              You can add your complete story, education, work experience, achievements, and anything else you'd like to
              share with visitors who want to learn more about you.
            </p>
          </div>
          <AdvancedHorizontalScroll
              contentSections={contentSections}
              afterScrollContent={afterScrollContent}
              // videoSrc="/path-to-your-video.mp4" // Opcional: URL del video de fondo
          />
        </div>
      </main>
  )
}
const afterScrollContent = (
    <div className="max-w-2xl text-center">
      <h2 className="text-4xl font-bold mb-6">Tu Aventura Continúa</h2>
      <p className="text-xl mb-8">
        Has visto solo el comienzo. Hay muchos más mundos por explorar y desafíos que enfrentar.
      </p>
      <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition">
        Comenzar Aventura
      </button>
    </div>
)