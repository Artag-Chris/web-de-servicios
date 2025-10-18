import FooterMain from "@/components/footers/FooterMain";
import About from "@/components/page_components/About";
import Contact from "@/components/page_components/Contact";
import HeaderMain from "@/components/page_components/Headermain";
import Hero from "@/components/page_components/Hero";
import Proyects from "@/components/page_components/Proyects";
import Skills from "@/components/page_components/Skills";
import { StatsSection } from "@/components/page_components/stats-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden">
      <HeaderMain />
      <main className="w-full max-w-[100vw]">
        <Hero />
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <StatsSection 
            title={"Statistics"}
            description={"Some interesting statistics about our platform."}
            stats={[
              { value: "100+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
              { value: "10+", label: "Awards Won" },
            ]}
          />
          <Proyects />
          <About />
        </div>
        <Contact />
      </main>
      <FooterMain />
    </div>
  )
}
  
