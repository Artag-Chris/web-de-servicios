import {  Award, Briefcase, GraduationCap, Code } from "lucide-react"

export const tabs: TabItem[] = [
    {
      id: "experience",
      label: "Experience",
      icon: Briefcase,
      content: (
        <div className="space-y-4">
          <div className="relative pl-6 border-l-2 border-emerald-500/30">
            <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1"></div>
            <h4 className="text-white font-medium">Senior Developer</h4>
            <p className="text-emerald-400 text-sm">TechCorp Inc. • 2020 - Present</p>
            <p className="text-zinc-400 text-sm mt-2">
              Led development of multiple web applications using React and Node.js. Implemented CI/CD pipelines and
              mentored junior developers.
            </p>
          </div>
          <div className="relative pl-6 border-l-2 border-emerald-500/30">
            <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1"></div>
            <h4 className="text-white font-medium">Web Developer</h4>
            <p className="text-emerald-400 text-sm">Digital Solutions • 2018 - 2020</p>
            <p className="text-zinc-400 text-sm mt-2">
              Developed responsive websites and e-commerce platforms. Worked with React, Vue.js, and PHP backends.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "education",
      label: "Education",
      icon: GraduationCap,
      content: (
        <div className="space-y-4">
          <div className="relative pl-6 border-l-2 border-emerald-500/30">
            <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1"></div>
            <h4 className="text-white font-medium">Master's in Computer Science</h4>
            <p className="text-emerald-400 text-sm">Tech University • 2016 - 2018</p>
            <p className="text-zinc-400 text-sm mt-2">
              Specialized in web technologies and distributed systems. Graduated with honors.
            </p>
          </div>
          <div className="relative pl-6 border-l-2 border-emerald-500/30">
            <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1"></div>
            <h4 className="text-white font-medium">Bachelor's in Software Engineering</h4>
            <p className="text-emerald-400 text-sm">State University • 2012 - 2016</p>
            <p className="text-zinc-400 text-sm mt-2">
              Focused on programming fundamentals, algorithms, and software development methodologies.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "achievements",
      label: "Achievements",
      icon: Award,
      content: (
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-emerald-500/10 rounded-full text-emerald-500">
              <Award className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-white text-sm font-medium">Best Web Application Award</h4>
              <p className="text-zinc-400 text-xs">Regional Tech Conference 2022</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-emerald-500/10 rounded-full text-emerald-500">
              <Code className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-white text-sm font-medium">Open Source Contributor</h4>
              <p className="text-zinc-400 text-xs">100+ contributions to major projects</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-emerald-500/10 rounded-full text-emerald-500">
              <Award className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-white text-sm font-medium">Hackathon Winner</h4>
              <p className="text-zinc-400 text-xs">First place at CodeFest 2021</p>
            </div>
          </div>
        </div>
      ),
    },
  ]

  export interface TabItem {
    id: string
    label: string
    icon: React.ElementType
    content: React.ReactNode
  }