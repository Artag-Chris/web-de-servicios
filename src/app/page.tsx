import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import HeaderMain from "@/components/page_components/Headermain"
import Hero from "@/components/page_components/Hero"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <HeaderMain />

      <main>
       <Hero />

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

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Featured <span className="text-emerald-500">Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-Commerce Platform",
                  description:
                    "A full-featured online store with payment processing, user authentication, and admin dashboard.",
                  tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Task Management App",
                  description:
                    "A collaborative project management tool with real-time updates and team collaboration features.",
                  tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Social Media Dashboard",
                  description:
                    "Analytics dashboard for social media managers with data visualization and reporting tools.",
                  tech: ["TypeScript", "D3.js", "Express", "PostgreSQL"],
                  image: "/placeholder.svg?height=400&width=600",
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-emerald-500 transition-all"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-zinc-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-zinc-800">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <Link
                        href="#"
                        className="text-emerald-500 hover:text-emerald-400 flex items-center gap-1 text-sm"
                      >
                        View Project <ExternalLink className="h-3 w-3" />
                      </Link>
                      <Link
                        href="#"
                        className="text-emerald-500 hover:text-emerald-400 flex items-center gap-1 text-sm"
                      >
                        Source Code <Github className="h-3 w-3" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-zinc-900 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 blur-lg opacity-50"></div>
                  <div className="relative overflow-hidden rounded-full border-4 border-zinc-800 w-full h-full">
                    <Image
                      src="/placeholder.svg?height=256&width=256"
                      alt="Developer portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6">
                  About <span className="text-emerald-500">Me</span>
                </h2>
                <p className="text-zinc-300 mb-4">
                  I'm a passionate fullstack developer with over 5 years of experience building web applications. I
                  specialize in creating robust, scalable solutions that solve real-world problems.
                </p>
                <p className="text-zinc-300 mb-6">
                  My journey in software development began with a curiosity about how things work on the web. That
                  curiosity evolved into a career where I've had the opportunity to work with startups and established
                  companies alike, helping them bring their digital products to life.
                </p>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-zinc-700 hover:border-emerald-500 hover:bg-zinc-800"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-zinc-700 hover:border-emerald-500 hover:bg-zinc-800"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-zinc-700 hover:border-emerald-500 hover:bg-zinc-800"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Get In <span className="text-emerald-500">Touch</span>
              </h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 py-8 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">
              <span className="text-emerald-500">Dev</span>Portfolio
            </div>
            <div className="text-zinc-400 text-sm">© {new Date().getFullYear()} All rights reserved.</div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-emerald-500">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-emerald-500">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-emerald-500">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

