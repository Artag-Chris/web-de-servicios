import React from 'react'
import Image from "next/image"
import { Link, ExternalLink, Github } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from '../ui/card'

function Proyects() {
    return (
        <div>
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
        </div>
    )
}

export default Proyects