import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
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