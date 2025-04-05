import React from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { ChevronRight } from 'lucide-react'
import TypingAnimation from '../animations/typingAnimation'

function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-colors">
          <TypingAnimation
            phrases={[
              "Fullstack Developer",
              "UI/UX Designer",
              "Problem Solver"
            ]}
            typeSpeed={80}        // 80ms per character when typing
            eraseSpeed={40}       // 40ms per character when erasing
            delayBetweenPhrases={1500}  // 1.5s pause before erasing
            loop={true}           // Continuously cycle through phrases
          />
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Creating exceptional <span className="text-emerald-500">digital experiences</span> through code
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl mb-8 max-w-2xl">
            I build scalable, responsive, and user-friendly web applications using modern technologies and best
            practices.
          </p>
         
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              View Projects
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
              Contact Me
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero