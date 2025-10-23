import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Vigour Gym',
  defaultTitle: 'Vigour Gym - Transform Your Body, Elevate Your Life',
  description:
    'Premier fitness destination in Stockholm. Expert trainers, BioSignature method, personalized nutrition guidance, and science-based training programs.',
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://vigourgym.se/',
    siteName: 'Vigour Gym',
    images: [
      {
        url: 'https://vigourgym.se/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vigour Gym',
      },
    ],
  },
  twitter: {
    handle: '@vigourgym',
    site: '@vigourgym',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#4A5C70',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
}
