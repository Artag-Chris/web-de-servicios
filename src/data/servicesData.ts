export interface Service {
  id: string
  title: string
  description: string
  image: string
}

export const servicesData: Service[] = [
  {
    id: "brand-identity",
    title: "Identidad de marca",
    description: "Creamos identidades visuales únicas que capturan la esencia de tu marca y resuenan con tu audiencia.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    id: "web-development",
    title: "Desarrollo web",
    description: "Construimos sitios web modernos y responsivos con tecnologías de vanguardia para impulsar tu negocio.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  },
  {
    id: "content-creation",
    title: "Creación de contenido",
    description: "Elaboramos contenido atractivo que conecta con tu audiencia e impulsa interacciones significativas.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
  },
  {
    id: "motion-3d",
    title: "Motion & Modelado 3D",
    description: "Damos vida a tus ideas con animaciones impresionantes y experiencias 3D inmersivas.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
]
