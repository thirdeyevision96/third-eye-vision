import { motion, useReducedMotion } from 'framer-motion'
import Container from '../commonComponents/Container'
import ServicesHeroImage from '../../assets/home-hero.png'

export default function ServicesHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-charcoal-950">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={ServicesHeroImage}
          alt="Indian wedding couple"
          className="h-full w-full object-cover"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/15" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/15 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
      </div>

      <Container className="relative z-10 flex min-h-[78vh] items-end pb-16 pt-32 sm:pb-20 lg:pb-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">
            Photography · Cinematography · Filmmaking
          </p>

          <h1 className="font-display text-5xl leading-[0.94] tracking-[-0.03em] text-ivory sm:text-6xl lg:text-8xl">
            Not just photos
            <br />
            &amp; videos,
            <br />
            <span className="font-script text-gold-300">
              but your emotions.
            </span>
          </h1>

          <div className="mt-7 h-px w-16 bg-gold-500/70" />

          <p className="mt-6 max-w-xl text-[11px] leading-7 text-ivory/65 sm:text-[14px]">
            From timeless photographs to cinematic films, we create
            visual stories that preserve the feeling of your celebration.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}