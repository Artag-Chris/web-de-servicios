import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AboutMePage() {
  return (
    <main className="bg-zinc-900 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Link href="/#about" className="inline-flex items-center text-emerald-500 hover:text-emerald-400 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

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
      </div>
    </main>
  )
}
