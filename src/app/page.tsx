import FooterMain from "@/components/footers/FooterMain";
import About from "@/components/page_components/About";
import Contact from "@/components/page_components/Contact";
import HeaderMain from "@/components/page_components/Headermain";
import Hero from "@/components/page_components/Hero";
import Proyects from "@/components/page_components/Proyects";
import Skills from "@/components/page_components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <HeaderMain />
      <main>
        <Hero />
        <Skills />
        <Proyects />
        <About />
        <Contact />
      </main>
      <FooterMain />
    </div>
  )
}

