import { motion, useReducedMotion } from 'framer-motion'
import Container from '../commonComponents/Container'

export default function PolicyAgreementHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-charcoal-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero-reference.jpg"
          alt="Third Eye Vision wedding photography"
          className="h-full w-full object-cover object-center"
        />

        {/* Main dark overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Left readable area */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-transparent" />
      </div>

      <Container className="relative z-10 flex min-h-[78vh] items-end pb-20 pt-32 sm:pb-24 lg:pb-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-gold-400">
              Your Memories · Our Responsibility
            </p>

            <span className="hidden h-px w-20 bg-gold-400/60 sm:block" />
          </div>

          {/* Heading */}
          <h1 className="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.04em] text-ivory sm:text-6xl lg:text-8xl">
            Service
            <br />
            <span className="text-ivory">Agreement</span>
          </h1>

          {/* Subheading */}
          <p className="mt-5 max-w-3xl text-sm font-medium uppercase tracking-[0.12em] text-ivory/80 sm:text-base">
            Data Retention, Pending Dues &amp; Client Responsibility
          </p>

          {/* Gold line */}
          <div className="mt-7 h-px w-20 bg-gold-500" />

          {/* Description */}
          <p className="mt-7 max-w-2xl text-sm leading-7 text-ivory/65 sm:text-base sm:leading-8">
            Your trust means everything to us. Here&apos;s how we handle
            your wedding data, our responsibilities and your role in the
            process.
          </p>

          {/* Small bottom label */}
          <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.3em] text-ivory/45">
            Clear Terms · Responsible Process · Lasting Memories
          </p>
        </motion.div>
      </Container>

      {/* Bottom Gold Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
    </section>
  )
}