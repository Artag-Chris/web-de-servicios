import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  // Título principal (50-60 caracteres)
  title: "Artag | Desarrollo de Software y Apps en Pereira",
  // Alternates para SEO
  alternates: {
    canonical: "https://www.artag.com.co",
  },
  // Descripción optimizada (150-160 caracteres)
  description:
    "Soluciones digitales innovadoras en Pereira. Desarrollo de software, apps móviles y diseño UI/UX para empresas que buscan destacar en el mundo digital.",
  // Keywords relevantes
  keywords: [
    "desarrollo de software",
    "apps móviles",
    "Pereira",
    "front-end",
    "back-end",
    "API",
    "bases de datos",
    "diseño UI/UX",
    "diseño gráfico",
    "arquitectura de software",
    "Artag",
    "soluciones digitales",
  ],
  // Open Graph para redes sociales
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.artag.com.co",
    title: "Artag | Soluciones Digitales en Pereira",
    description:
      "Desarrollo de software, aplicaciones móviles y diseño digital en Pereira. Innovación y tecnología para tu empresa.",
    siteName: "Artag",
    images: [
      {
        url: "/og-artag.png", // Coloca esta imagen en /public
        width: 1200,
        height: 630,
        alt: "Artag desarrollo de software en Pereira",
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Artag | Desarrollo de Software en Pereira",
    description:
      "Aplicaciones móviles inteligentes y software personalizado desde Pereira, Colombia.",
    images: ["/twitter-artag.png"], // Coloca esta imagen en /public
    site: "@artagdev",
    creator: "@artagdev",
  },
  // Iconos
  icons: {
    icon: [
      { url: "/logosinfondo.ico", sizes: "any" },
      { url: "/logosinfondo.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180" },
    ],
  },
  // Información de contacto y branding
  authors: [{ name: "Artag", url: "https://www.artag.com.co" }],
  generator: "Next.js",
  applicationName: "Artag",
  referrer: "origin-when-cross-origin",
  creator: "Artag",
  publisher: "Artag",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Verificación de Google Search Console (opcional)
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}