import React from 'react'
import Hero from '@/components/Hero'
import TrainerCard from '@/components/TrainerCard'
import { getTrainers } from '@/lib/sanity.queries'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Trainers | Vigour Gym',
  description: 'Meet our team of experienced and certified personal trainers. Specialists in strength training, nutrition, and BioSignature analysis.',
}

export const revalidate = 60

// Placeholder trainers data
const placeholderTrainers = [
  {
    _id: 'placeholder-1',
    name: 'Johan Hallvars',
    photoUrl: '/trainers/johan-hallvars.jpg',
  },
  {
    _id: 'placeholder-2',
    name: 'Elina Björklund',
    photoUrl: '/trainers/elina-bjorklund.jpg',
  },
  {
    _id: 'placeholder-3',
    name: 'Jakub Jaworski',
    photoUrl: '/trainers/jakub-jaworski.jpg',
  },
  {
    _id: 'placeholder-4',
    name: 'Hannah Hansen',
    photoUrl: '/trainers/hannah-hansen.jpg',
  },
  {
    _id: 'placeholder-5',
    name: 'Markus Rüdel',
    photoUrl: '/trainers/markus-rudel.jpg',
  },
]

export default async function TrainersPage() {
  const trainers = await getTrainers().catch(() => [])

  // Use placeholder trainers if no trainers from Sanity
  const displayTrainers = trainers.length > 0 ? trainers : placeholderTrainers

  return (
    <>
      <Hero
        title="Our Expert Coaching Team"
        subtitle="Meet our team of certified coaches dedicated to helping you achieve your strength, performance, and body composition goals"
      />

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTrainers.map((trainer: any) => (
            <TrainerCard
              key={trainer._id}
              name={trainer.name}
              photoUrl={trainer.photoUrl}
            />
          ))}
        </div>
      </section>
    </>
  )
}
