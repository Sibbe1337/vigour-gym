import React from 'react'
import Hero from '@/components/Hero'
import Image from 'next/image'
import type { Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Our Coaches | Vigour Gym',
  description: 'Meet our team of experienced and certified coaches. Specialists in strength training, nutrition, and body composition analysis.',
}

export const revalidate = 60

const coaches = [
  {
    _id: '1',
    name: 'Johan Hallvars',
    title: 'Founder, Head Coach & Strength Specialist',
    bio: 'Over 20 years in the industry as a strength coach. More than 21,000 PT sessions.',
    photoUrl: '/trainers/johan-hallvars.jpg',
  },
  {
    _id: '2',
    name: 'Elina Björklund',
    title: 'Strength and Wellness Coach',
    bio: 'Over 14 years as a Personal Trainer. More than 14,000 PT sessions.',
    photoUrl: '/trainers/elina-bjorklund.jpg',
  },
  {
    _id: '3',
    name: 'Jakub Jaworski',
    title: 'Performance, Strength and Nutrition Coach',
    bio: 'Over 11 years of coaching with his specialty of training athletes in many sports.',
    photoUrl: '/trainers/jakub-jaworski.jpg',
  },
  {
    _id: '4',
    name: 'Hannah Hansen',
    title: 'Personal Trainer and Wellness Coach',
    bio: 'Over 3 years as a Personal Trainer.',
    photoUrl: '/trainers/hannah-hansen.jpg',
  },
  {
    _id: '5',
    name: 'Markus Rüdel',
    title: 'Massage Therapist and Personal Trainer',
    bio: 'Over 25 years as Massage Therapist and 18 years as Personal Trainer.',
    photoUrl: '/trainers/markus-rudel.jpg',
  },
]

export default async function TrainersPage() {
  return (
    <>
      <Hero
        title="Our Expert Coaching Team"
        subtitle="Meet our team of certified coaches dedicated to helping you achieve your strength, performance, and body composition goals"
      />

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coaches.map((coach) => (
            <div key={coach._id} className="group touch-manipulation">
              <div className="relative w-full aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden bg-brand-paper mb-4">
                <Image
                  src={coach.photoUrl}
                  alt={coach.name}
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-brand-ink mb-1">{coach.name}</h3>
              <p className="text-sm sm:text-base font-semibold text-brand-primary mb-2">{coach.title}</p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{coach.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
