import { Metadata } from "next"
import ServiceWebDevelopment from "@/components/service-pages/WebDevelopmentPage"

export const metadata: Metadata = {
  title: "Desarrollo Web | Artag Services",
  description: "Construimos sitios web modernos y responsivos con tecnologías de vanguardia para impulsar tu negocio.",
}

export default function WebDevelopmentPage() {
  return <ServiceWebDevelopment />
}
