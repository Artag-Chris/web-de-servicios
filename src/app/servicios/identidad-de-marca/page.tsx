import { Metadata } from "next"
import ServiceBrandIdentity from "@/components/service-pages/BrandIdentityPage"

export const metadata: Metadata = {
  title: "Identidad de Marca | Artag Services",
  description: "Creamos identidades visuales únicas que capturan la esencia de tu marca y resuenan con tu audiencia.",
}

export default function BrandIdentityPage() {
  return <ServiceBrandIdentity />
}
