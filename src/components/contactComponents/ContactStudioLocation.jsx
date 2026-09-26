import { motion, useReducedMotion } from 'framer-motion'
import {
  MapPin,
  Camera,
  Clapperboard,
  CalendarDays,
  Headphones,
  Network,
  ArrowUpRight,
} from 'lucide-react'

import Container from '../commonComponents/Container'
import StudioImage from '../../assets/home-hero.png'

const services = [
  {
    title: 'Wedding Photography',
    subtitle: '& Videography',
    icon: Camera,
  },
  {
    title: 'Cinematic Films',
    icon: Clapperboard,
  },
  {
    title: 'Wedding Planning',
    icon: CalendarDays,
  },
  {
    title: 'Makeup Studio',
    icon: Headphones,
  },
  {
    title: 'Drone Coverage',
    icon: Network,
  },
]

export default function ContactStudioLocation() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="border-t border-ivory/10 bg-charcoal-950 py-14 sm:py-16 lg:py-20">

      <Container>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.55fr] lg:gap-8">

          {/* Studio Image */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative min-h-[360px] overflow-hidden border border-ivory/15"
          >
            <img
              src={StudioImage}
              alt="Third Eye Vision studio"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-7 left-7">
              <p className="font-script text-3xl text-gold-300 sm:text-4xl">
                Visit Our Studio
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-ivory">
                  MEET
                </span>

                <span className="text-gold-400">•</span>

                <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-ivory">
                  DISCUSS
                </span>

                <span className="text-gold-400">•</span>

                <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-ivory">
                  PLAN
                </span>

                <span className="grid h-7 w-7 place-items-center rounded-full border border-gold-400 text-gold-400">
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center text-gold-400">
                <MapPin
                  size={34}
                  strokeWidth={1.2}
                />
              </div>

              <div>
                <h2 className="font-display text-3xl text-ivory">
                  Our Location
                </h2>

                <p className="mt-4 text-xs leading-6 text-ivory/65 sm:text-sm">
                  1st Floor, above Sabji-wala &amp; Top n Town,
                  <br />
                  Allahabad Bank Chowraha, Civil Lines,
                  <br />
                  Jhansi - 284001
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="mt-12 h-48 overflow-hidden border border-ivory/10 rounded-xl">
              <iframe
                title="Third Eye Vision Location"
                src="https://www.google.com/maps?q=Third%20Eye%20Vision%20Jhansi&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="border-l border-ivory/15 pl-6 lg:pl-8"
          >
            <div className="space-y-5">
              {services.map((service) => {
                const Icon = service.icon

                return (
                  <div
                    key={service.title}
                    className="group flex items-center gap-4"
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.3}
                      className="shrink-0 text-gold-400 transition-transform duration-300 group-hover:scale-110"
                    />

                    <div className="text-xs leading-5 text-ivory/75">
                      <p>{service.title}</p>

                      {service.subtitle && (
                        <p>{service.subtitle}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-10">
              <p className="font-script text-3xl text-gold-300">
                Let&apos;s Connect
              </p>

              <div className="mt-2 h-px w-32 bg-gradient-to-r from-gold-400 to-transparent" />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}