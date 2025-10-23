export function generateLocalBusinessJsonLd(settings: any) {
  if (!settings) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'ExerciseGym',
    name: settings.siteName || 'Vigour Gym',
    description:
      'Premier fitness destination with expert trainers, BioSignature method, and personalized programs.',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://vigourgym.se',
    telephone: settings.phone,
    email: settings.email,
    address: settings.address
      ? {
          '@type': 'PostalAddress',
          streetAddress: settings.address.split('\n')[0],
          addressLocality: 'Stockholm',
          addressCountry: 'SE',
        }
      : undefined,
    openingHoursSpecification: settings.openingHours?.map((schedule: any) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: schedule.day,
      opens: schedule.hours.split('-')[0]?.trim(),
      closes: schedule.hours.split('-')[1]?.trim(),
    })),
    sameAs: settings.socials?.map((social: any) => social.url).filter(Boolean),
    priceRange: '$$',
  }
}

export function generateOrganizationJsonLd(settings: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: settings?.siteName || 'Vigour Gym',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://vigourgym.se',
    logo: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://vigourgym.se'}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: settings?.phone,
      contactType: 'customer service',
      email: settings?.email,
      availableLanguage: ['Swedish', 'English'],
    },
    sameAs: settings?.socials?.map((social: any) => social.url).filter(Boolean),
  }
}

export function generateWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Vigour Gym',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://vigourgym.se',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://vigourgym.se'}/blogg?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateArticleJsonLd(post: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImageUrl,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Vigour Gym',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vigour Gym',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://vigourgym.se'}/logo.png`,
      },
    },
  }
}
