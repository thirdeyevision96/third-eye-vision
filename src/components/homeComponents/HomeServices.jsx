import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Container from '../commonComponents/Container'
import Button from '../commonComponents/Button'
import { Link, NavLink } from 'react-router-dom'

const services = [
  {
    title: 'Wedding Photography',
    image: '/assets/wedding-photography.jpg',
    className: 'md:col-span-6 md:row-span-2',
    imagePosition: 'center',
  },
  {
    title: 'Wedding Videography',
    image: '/assets/wedding-videography.jpg',
    className: 'md:col-span-6 md:row-span-2',
    imagePosition: 'center',
  },
  {
    title: 'Makeup Studio',
    image: '/assets/makeup-studio.jpg',
    className: 'md:col-span-3 md:row-span-2',
    imagePosition: 'center',
  },
  {
    title: 'Pre-Wedding Shoots',
    image: '/assets/pre-wedding.jpg',
    className: 'md:col-span-6 md:row-span-2',
    imagePosition: 'center',
  },
  {
    title: 'Other Events',
    image: '/assets/other-events.jpg',
    className: 'md:col-span-3 md:row-span-2',
    imagePosition: 'center',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const gridReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
}

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative overflow-hidden bg-charcoal-950 text-ivory-100"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-gold-400/[0.045] blur-3xl" />
        <div className="absolute -right-48 bottom-0 h-[32rem] w-[32rem] rounded-full bg-white/[0.025] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />
      </div>

      <Container className="relative py-20 sm:py-24 lg:py-28 xl:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-14 xl:gap-20">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-md lg:sticky lg:top-28"
          >
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-300">
              Our Services
            </p>

            <h2
              id="services-title"
              className="font-display text-4xl leading-[0.98] tracking-[-0.025em] text-ivory-100 sm:text-5xl lg:text-[3.75rem]"
            >
              What We Offer
            </h2>

            <div className="mt-6 h-px w-12 bg-gold-400/80" />

            <p className="mt-6 max-w-sm text-sm leading-7 text-ivory-100/60 sm:text-[15px]">
              From the grand moments to the little details, we cover it all — with a cinematic eye and a personal approach to every celebration.
            </p>

            <ul className="mt-8 space-y-3.5 border-y border-ivory-100/10 py-6">
              {services.map(({ title }) => (
                <li key={title} className="group flex items-center gap-3 text-sm text-ivory-100/75">
                  <CheckCircle2
                    size={15}
                    strokeWidth={1.4}
                    className="shrink-0 text-gold-400 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="transition-colors duration-300 group-hover:text-ivory-100">{title}</span>
                </li>
              ))}
            </ul>

            <NavLink to="/services" className="flex items-center gap-2 text-[9px] sm:text-[10px]">
              <Button variant="outline" className="mt-7 border-ivory-100/20 text-ivory-100 hover:border-gold-400 hover:bg-gold-400/10">
                View All Services
              </Button>
            </NavLink>
          </motion.div>

          <motion.div
            variants={gridReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="grid auto-rows-[230px] grid-cols-1 gap-3 sm:auto-rows-[170px] sm:grid-cols-2 md:grid-cols-12 md:auto-rows-[108px]"
          >
            {services.map(({ title, image, className, imagePosition }) => (
              <motion.article
                key={title}
                variants={reveal}
                className={`group relative min-h-[230px] overflow-hidden border border-ivory-100/10 bg-charcoal-800 ${className}`}
              >
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.075]"
                  style={{ objectPosition: imagePosition }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/5 transition-all duration-700 group-hover:from-black/85 group-hover:via-black/30" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-gold-400/[0.04]" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.25em] text-gold-300 opacity-0 translate-y-2 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        Third Eye Vision
                      </span>
                      <h3 className="font-display text-xl leading-tight text-ivory-100 sm:text-2xl">
                        {title}
                      </h3>
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ivory-100/25 text-ivory-100/80 opacity-80 transition-all duration-500 group-hover:border-gold-400/70 group-hover:text-gold-300 group-hover:opacity-100">
                      <span className="text-sm">↗</span>
                    </span>
                  </div>
                </div>

                <div className="absolute left-0 top-0 h-px w-0 bg-gold-400 transition-all duration-700 group-hover:w-20" />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
