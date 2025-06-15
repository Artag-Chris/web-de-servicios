import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadataES = {
  title: 'Artag | Desarrollo de Software en Pereira',
  description: 'Desarrollo de aplicaciones inteligentes móviles y soluciones de software front-end a la medida en Pereira, Colombia. Innovación digital para empresas que buscan destacarse.',
  openGraph: {
    title: 'Artag | Desarrollo de Software en Pereira',
    description: 'Creamos soluciones digitales en Pereira: apps móviles inteligentes y software front-end personalizado.',
    url: 'https://www.artag.com',
    siteName: 'Artag',
    images: [
      {
        url: 'https://res.cloudinary.com/dfg2xrsqz/image/upload/v1750004370/Screenshot_2025-06-15_111756_o8mazs.png',
        width: 1200,
        height: 630,
        alt: 'Artag desarrollo de software en Pereira',
      },
    ],
    locale: 'es_CO',
    type: 'website',
     keywords: ['desarrollo de software', 'apps móviles', 'Pereira', 'front-end', 'backe-end', 'api','bases de datos',
        'diseño ','diseño grafico','artquitectura de softaware'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artag | Desarrollo de Software en Pereira',
    description: 'Aplicaciones móviles inteligentes y software personalizado desde Pereira, Colombia.',
    site: '@artagdev',
    creator: '@artagdev',
    images: ['https://www.artag.com/twitter-image.jpg'],
  },
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
  },
  socialLinks: {
    facebook: 'https://www.facebook.com/christian.dehenao/',
    instagram: 'https://www.instagram.com/artagdev/',
    linkedin: 'https://www.linkedin.com/in/artag/',
    youtube: 'https://www.youtube.com/@Artag888',
    twitter: 'https://twitter.com/artag',
  },
}

export const metadataEN = {
  title: 'Artag | Software Development in Pereira',
  description: 'Development of smart mobile applications and custom front-end software solutions in Pereira, Colombia. Digital innovation for companies aiming to stand out.',
  openGraph: {
    title: 'Artag | Software Development in Pereira',
    description: 'We create digital solutions in Pereira: smart mobile apps and custom front-end software.',
    url: 'https://www.artag.com',
    siteName: 'Artag',
    images: [
      {
        url: 'https://res.cloudinary.com/dfg2xrsqz/image/upload/v1750004370/Screenshot_2025-06-15_111756_o8mazs.png',
        width: 1200,
        height: 630,
        alt: 'Artag software development in Pereira',
      },
    ],
    locale: 'en_US',
    type: 'website',
    keywords: [
      'software development',
      'mobile apps',
      'Pereira',
      'front-end',
      'back-end',
      'API',
      'databases',
      'UI design',
      'graphic design',
      'software architecture',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artag | Software Development in Pereira',
    description: 'Smart mobile apps and custom software from Pereira, Colombia.',
    site: '@artagdev',
    creator: '@artagdev',
    images: ['https://www.artag.com/twitter-image.jpg'],
  },
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
  },
  socialLinks: {
    facebook: 'https://www.facebook.com/christian.dehenao/',
    instagram: 'https://www.instagram.com/artagdev/',
    linkedin: 'https://www.linkedin.com/in/artag/',
    youtube: 'https://www.youtube.com/@Artag888',
    twitter: 'https://twitter.com/artag',
  },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        </body>
        </html>
    )
}