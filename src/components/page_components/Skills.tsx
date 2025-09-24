"use client"
import { useRef } from "react"
import { skillsData } from "@/data/skillsData"
import { SkillCard } from "../sub-sections/SkillCard"
import { GeometricBackground } from "../compontents/GeometricBackground"


function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <div>
      <section id="skills" className="bg-zinc-900 py-12 sm:py-20 relative overflow-hidden" ref={sectionRef}>
        {/* Geometric Background */}
        <GeometricBackground />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-12 text-center">
            Tools of the <span className='text-emerald-500'>Trade</span>
          </h2>
          
          {/* Mobile Carousel */}
          <div className="md:hidden w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            <div className="flex gap-4 pb-6 px-1">
              {skillsData.map((skill, index) => (
                <div key={index} className="snap-start shrink-0 w-[280px]">
                  <SkillCard skill={skill} index={index} />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <p className="text-zinc-400 text-sm">Swipe to see more →</p>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 text-white">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
