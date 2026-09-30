import { motion, useReducedMotion } from 'framer-motion'
import Container from '../commonComponents/Container'
import GalleryImage from '../../assets/home-hero.png'

export default function GalleryHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-charcoal-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={GalleryImage}
          alt="Third Eye Vision wedding couple"
          className="h-full w-full object-cover object-center"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/45 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/20" />
      </div>

      <Container className="relative z-10 flex min-h-[72vh] items-end pb-16 pt-32 sm:pb-20 lg:pb-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <p className="text-[9px] font-semibold uppercase tracking-[0.38em] text-gold-400 sm:text-[10px]">
              Our Gallery
            </p>

            <span className="h-px w-12 bg-gold-400/70 sm:w-20" />
          </div>

          {/* Heading */}
          <h1 className="mt-5 font-display text-5xl leading-[0.9] tracking-[-0.045em] text-ivory sm:text-6xl lg:text-8xl">
            Moments
            <br />

            <span className="font-script text-gold-300">
              We&apos;ve Captured
            </span>
          </h1>

          {/* Gold divider */}
          <div className="mt-7 h-px w-14 bg-gold-500 sm:w-20" />

          {/* Description */}
          <p className="mt-6 max-w-xl text-sm leading-6 text-ivory/70 sm:text-base sm:leading-7">
            A collection of real moments, raw emotions and beautiful stories
            from weddings, pre-weddings, celebrations and beyond.
          </p>

          {/* Accent text */}
          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-script text-lg text-gold-300">
              Real People
            </span>

            <span className="text-gold-500/60">|</span>

            <span className="font-script text-lg text-gold-300">
              Real Emotions
            </span>

            <span className="text-gold-500/60">|</span>

            <span className="font-script text-lg text-gold-300">
              Timeless Frames
            </span>
          </div>
        </motion.div>
      </Container>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-500/30" />
    </section>
  )
}