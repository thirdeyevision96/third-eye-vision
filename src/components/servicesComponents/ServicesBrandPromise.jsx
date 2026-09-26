import {
  Camera,
  Users,
  Plane,
  Film,
  Heart,
} from 'lucide-react'

import { motion } from 'framer-motion'
import Container from '../commonComponents/Container'

const features = [
  {
    title: 'High-Quality Equipment',
    icon: Camera,
  },
  {
    title: 'Experienced Team',
    icon: Users,
  },
  {
    title: 'Drone & FPV Specialists',
    icon: Plane,
  },
  {
    title: 'Professional Editing',
    icon: Film,
  },
  {
    title: 'Your Story, Our Passion',
    icon: Heart,
  },
]

export default function BrandPromise() {
  return (
    <section className="border-t border-ivory/10 bg-charcoal-950">
      <Container className="py-16 sm:py-20 lg:py-24">

        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">

          {/* SCRIPT MESSAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="font-script text-4xl leading-tight text-gold-300 sm:text-5xl">
              Let&apos;s capture
              <br />
              your forever.
            </p>
          </motion.div>

          {/* FEATURES */}
          <div className="grid grid-cols-2 border-l border-ivory/10 sm:grid-cols-3 lg:grid-cols-5">
            {features.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="
                  border-b
                  border-r
                  border-ivory/10
                  p-5
                  text-center
                  sm:p-6
                  lg:border-b-0
                "
              >
                <Icon
                  size={30}
                  strokeWidth={1.5}
                  className="mx-auto text-gold-400"
                />

                <p className="mt-4 text-[13px] leading-5 text-ivory/65">
                  {title}
                </p>
              </div>
            ))}
          </div>

        </div>

      </Container>
    </section>
  )
}