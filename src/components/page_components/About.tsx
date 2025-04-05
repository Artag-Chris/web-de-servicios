import React from 'react'
import Image from "next/image"
import { Button } from '../ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

function About() {
  return (
    <div>
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
    </div>
  )
}

export default About