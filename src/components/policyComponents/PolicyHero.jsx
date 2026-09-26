import { motion, useReducedMotion } from 'framer-motion'
import Container from '../commonComponents/Container'
import DeliverablesImage from '../../assets/home-hero.png'

export default function DeliverablesHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[82vh] overflow-hidden bg-charcoal-950">

      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={DeliverablesImage}
          alt="Third Eye Vision wedding photography"
          className="h-full w-full object-cover object-center"
        />

        {/* Keep image visible */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />
      </div>


      <Container className="relative z-10 flex min-h-[82vh] items-end pb-20 pt-32 sm:pb-24 lg:pb-28">

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >

          {/* Eyebrow */}
          <div className="flex items-center gap-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold-400">
              Your Investment · Your Memories
            </p>

            <span className="hidden h-px w-20 bg-gold-400/60 sm:block" />
          </div>


          {/* Heading */}
          <h1 className="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.04em] text-ivory sm:text-6xl lg:text-8xl">

            Payment Terms

            <br />

            <span className="text-ivory">
            &amp;{' '}
            </span>
            <span className="text-ivory">
              timelines.
            </span>
            <br />
            <span className="font-script text-gold-300">
              Service Policies
            </span>

          </h1>


          <div className="mt-8 h-px w-20 bg-gold-500" />


          <p className="mt-7 max-w-xl text-sm leading-7 text-ivory/65 sm:text-base sm:leading-8">
            From the first booking payment to the final
            delivery of your photographs and films, every
            stage is carefully structured so you know exactly
            what to expect.
          </p>


          <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.3em] text-ivory/45">
            Clear Terms · Transparent Process · Lasting Memories
          </p>

        </motion.div>

      </Container>


      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

    </section>
  )
}