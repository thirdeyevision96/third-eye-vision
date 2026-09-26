import { motion, useReducedMotion } from 'framer-motion'
import Container from '../commonComponents/Container'
import TimelineImage from '../../assets/home-hero.png'    

export default function TimelineHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[76vh] overflow-hidden bg-charcoal-950">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={TimelineImage}
          alt="Indian wedding couple"
          className="h-full w-full object-cover"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/45 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/20" />
      </div>

      <Container className="relative z-10 flex min-h-[76vh] items-end pb-16 pt-32 sm:pb-20 lg:pb-24">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 35,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          {/* Small heading */}
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-400">
            Third Eye Vision · Delivery & Editing
          </p>

          {/* Main heading */}
          <h1 className="font-display text-5xl leading-[0.92] tracking-[-0.035em] text-ivory sm:text-6xl md:text-7xl lg:text-8xl">
            Your memories,
            <br />
            <span className="text-ivory">
              &amp;{' '}
            </span>
            <span className="text-ivory">
              moments.
            </span>
            <br />
            <span className="font-script text-gold-300">
              Deliverables with care
            </span>
            <br />
          </h1>

          {/* Gold line */}
          <div className="mt-7 h-px w-16 bg-gold-500" />

          {/* Subtitle */}
          <h2 className="mt-6 font-display text-xl text-ivory sm:text-2xl">
            Delivery Timeline &amp; Editing Policy
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-ivory/65 sm:text-base">
            We believe your special moments deserve a seamless delivery
            process and complete transparency. Here&apos;s how and when
            you&apos;ll receive your beautifully crafted memories.
          </p>
        </motion.div>
      </Container>

      {/* Side label */}
      <div className="absolute bottom-8 right-8 hidden rotate-90 text-[9px] uppercase tracking-[0.3em] text-ivory/35 lg:block">
        Your Story · Our Delivery
      </div>
    </section>
  )
}