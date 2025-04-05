import React from 'react'
import { Card, CardContent } from '../ui/card'

function Skills() {
  return (
    <div>
        {/* Skills Section */}
        <section id="skills" className="bg-zinc-900 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technical <span className="text-emerald-500">Skills</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "JavaScript", level: "Advanced" },
                { name: "TypeScript", level: "Advanced" },
                { name: "React", level: "Advanced" },
                { name: "Next.js", level: "Advanced" },
                { name: "Node.js", level: "Advanced" },
                { name: "Express", level: "Intermediate" },
                { name: "MongoDB", level: "Intermediate" },
                { name: "PostgreSQL", level: "Intermediate" },
                { name: "GraphQL", level: "Intermediate" },
                { name: "Docker", level: "Intermediate" },
                { name: "AWS", level: "Intermediate" },
                { name: "Git", level: "Advanced" },
              ].map((skill, index) => (
                <Card key={index} className="bg-zinc-800 border-zinc-700 hover:border-emerald-500 transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-1">{skill.name}</h3>
                    <p className="text-zinc-400 text-sm">{skill.level}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default Skills