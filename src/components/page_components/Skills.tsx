'use client'
import { skillsData } from "@/data/skillsData"
import { SkillCard } from "../sub-sections/SkillCard"

function Skills() {
  return (
    <div>
      <section id="skills" className="bg-zinc-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technical <span className="text-emerald-500">Skills</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
