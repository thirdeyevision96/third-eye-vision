import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import Container from '../commonComponents/Container'
import { NavLink } from 'react-router-dom'

export default function GalleryBottom() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden border-t border-gold-500/20">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/other-events.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/40" />
      </div>

      <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div className="max-w-2xl">
            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-gold-400">
              Let&apos;s Create Your
            </p>

            <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.03em] text-ivory sm:text-5xl lg:text-6xl">
              Next Beautiful{' '}
              <span className="font-script text-gold-300">
                Chapter
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-ivory/60 sm:text-base sm:leading-7">
              Your story deserves to be captured in the most authentic and
              artistic way. Let&apos;s make it unforgettable.
            </p>
          </div>

          <NavLink
            to="/contact"
            className="
              inline-flex
              shrink-0
              items-center
              justify-center
              gap-3
              self-start
              whitespace-nowrap
              rounded-full
              bg-gold-300
              px-7
              py-3.5
              text-xs
              font-semibold
              text-charcoal-950
              transition-all
              duration-300
              hover:bg-gold-200
              hover:shadow-[0_10px_30px_rgba(185,146,80,0.2)]
              lg:self-center
            "
          >
            Book Now

            <ArrowUpRight size={15} strokeWidth={1.8} />
          </NavLink>
        </motion.div>
      </Container>
    </section>
  )
}