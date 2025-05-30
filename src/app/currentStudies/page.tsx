"use client"

import CosmicNavbar from "@/components/compontents/cosmic-navbar"
import CurrentStudiesPage from "@/components/sub-sections/current-studies-page"
import { navLinks } from "@/data/navlinks"



export default function Page() {

  return(
    <main>
      <CosmicNavbar links={navLinks} currentPath="/currentStudies" />
      <div className="prose prose-lg prose-invert max-w-none prose-headings:text-emerald-400 prose-a:text-emerald-400">
      <CurrentStudiesPage / >
      </div>
    </main>
  )
}
