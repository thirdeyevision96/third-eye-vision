import { motion, useReducedMotion } from 'framer-motion'

import Container from '../commonComponents/Container'
import ContactImage from '../../assets/home-hero.png'

export default function ContactHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-charcoal-950 sm:min-h-[72vh] lg:min-h-[74vh]">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ContactImage}
          alt="Third Eye Vision contact"
          className="h-full w-full object-cover object-center"
        />

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />

        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-charcoal-950 via-charcoal-950/50 to-transparent" />
      </div>

      <Container className="relative z-10 flex min-h-[70vh] items-center pt-24 sm:min-h-[72vh] lg:min-h-[74vh]">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
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
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-gold-400 sm:text-[10px]">
              GET IN TOUCH
            </p>

            <span className="h-px w-12 bg-gold-400/60 sm:w-20" />
          </div>

          {/* Heading */}
          <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-[-0.035em] text-ivory sm:text-6xl lg:text-7xl xl:text-8xl">
            Contact Us
          </h1>

          {/* Script Heading */}
          <h2 className="mt-5 max-w-xl font-script text-4xl leading-[1.05] text-gold-300 sm:text-5xl lg:text-6xl">
            Let&apos;s Create Something
            <br />
            Beautiful Together
          </h2>

          {/* Divider */}
          <div className="mt-7 h-px w-12 bg-gold-500" />

          {/* Description */}
          <p className="mt-6 max-w-lg border-l border-gold-400/70 pl-5 text-sm leading-6 text-ivory/70 sm:text-[15px] sm:leading-7">
            Have a question, want to discuss your big day
            <br className="hidden sm:block" />
            or just want to say hello? We’d love to hear from you.
            <br className="hidden sm:block" />
            Reach out and let’s bring your vision to life.
          </p>
        </motion.div>
      </Container>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-500/30" />
    </section>
  )
}