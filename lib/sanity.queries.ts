import { client } from './sanity.client'

// Global Settings
export async function getGlobalSettings() {
  return await client.fetch(`*[_type == "globalSettings"][0]{
    siteName,
    address,
    phone,
    email,
    openingHours,
    socials,
    bookingUrl,
    seoDefault
  }`)
}

// Trainers
export async function getTrainers() {
  return await client.fetch(`*[_type == "trainer" && active == true] | order(order asc){
    _id,
    name,
    role,
    "photoUrl": photo.asset->url,
    bio,
    certifications,
    focuses,
    socials,
    email,
    phone
  }`)
}

// Method (How We Work)
export async function getMethod() {
  return await client.fetch(`*[_type == "method"][0]{
    title,
    slug,
    ingress,
    content,
    bioSignature{
      title,
      intro,
      bullets,
      faq,
      disclaimer
    }
  }`)
}

// Nutrition
export async function getNutrition() {
  return await client.fetch(`*[_type == "nutrition"][0]{
    title,
    slug,
    ingress,
    content,
    supplements,
    disclaimer
  }`)
}

// Partners
export async function getPartners(group?: string) {
  const filter = group ? `&& group == "${group}"` : ''
  return await client.fetch(`*[_type == "partner" && active == true ${filter}] | order(order asc){
    _id,
    name,
    "logoUrl": logo.asset->url,
    url,
    description,
    group
  }`)
}
