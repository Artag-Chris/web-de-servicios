import FooterMain from "@/components/footers/FooterMain";
import About from "@/components/page_components/About";
import Contact from "@/components/page_components/Contact";
import HeaderMain from "@/components/page_components/Headermain";
import Hero from "@/components/page_components/Hero";
import Pricing from "@/components/page_components/Pricing";
import Proyects from "@/components/page_components/Proyects";
import Services from "@/components/page_components/Services";
import WhyChooseUs from "@/components/page_components/WhyChooseUs";
import { StatsSection } from "@/components/page_components/stats-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden">
      <HeaderMain />
      <main className="w-full max-w-[100vw]">
        <Hero />
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <StatsSection
            title={"Estadisticas"}
            description={"algunas estadisticas de nuestro trabajo"}
            stats={[
              { value: "100+", label: "Proyectos completados" },
              { value: "50+", label: "Clientes felices" },
              { value: "10+", label: "Premios ganados" },
            ]}
          />
        </div>
        <Services />
        <WhyChooseUs />
        <Pricing />
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <Proyects />
          <About />
        </div>
        <Contact />
      </main>
      <FooterMain />
    </div>
  )
}

