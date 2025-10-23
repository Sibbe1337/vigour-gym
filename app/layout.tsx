import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getGlobalSettings } from '@/lib/sanity.queries'
import { generateOrganizationJsonLd, generateWebSiteJsonLd } from '@/lib/json-ld'

export const metadata: Metadata = {
  title: 'Vigour Gym - Transform Your Body, Elevate Your Life',
  description: 'Premier fitness destination for strength training, nutrition guidance, and personalized coaching in Stockholm.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    siteName: 'Vigour Gym',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getGlobalSettings().catch(() => null)
  const organizationJsonLd = generateOrganizationJsonLd(settings)
  const websiteJsonLd = generateWebSiteJsonLd()

  return (
    <html lang="sv">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  )
}
