import { motion } from 'framer-motion'
import {
  Camera,
  Clapperboard,
  Heart,
  Sparkles,
  Users,
  WandSparkles,
} from 'lucide-react'
import Container from '../commonComponents/Container'
import Button from '../commonComponents/Button'

const highlights = [
  {
    title: 'Experienced Team',
    description: 'Skilled photographers, cinematographers and creatives with years of experience.',
    icon: Users,
    link: '#home',
  },
  {
    title: 'Advanced Equipment',
    description: 'Top-tier cameras, lenses and tools for stunning, reliable results.',
    icon: Camera,
    link: '#home',
  },
  {
    title: 'Creative Storytelling',
    description: 'Cinematic films and photography shaped around the feeling of your real story.',
    icon: Clapperboard,
    link: '#home',
  },
  {
    title: 'In-House Makeup Studio',
    description: 'Professional makeup artists ready to help you look and feel your best.',
    icon: WandSparkles,
    link: '#home',
  },
  {
    title: 'Personal Touch',
    description: 'Because your story deserves a personal approach from the first frame to the last.',
    icon: Heart,
    link: '#home',
  },
  {
    title: 'Timeless Memories',
    description: 'Thoughtful imagery designed to feel as beautiful years from now as it does today.',
    icon: Sparkles,
    link: '#home',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const grid = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
}

export default function Highlights() {
  return (
    <section
      id="highlights"
      aria-labelledby="highlights-title"
      className="relative overflow-hidden bg-ivory-200 text-charcoal-900"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-charcoal-900/[0.025] blur-3xl" />
      </div>

      <Container className="relative py-20 sm:py-24 lg:py-28 xl:py-32">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-md pb-12 lg:sticky lg:top-28 lg:pb-0 lg:pr-12 xl:pr-20"
          >
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-600">
              Why Choose Us
            </p>

            <h2
              id="highlights-title"
              className="font-display text-4xl leading-[0.98] tracking-[-0.025em] text-charcoal-900 sm:text-5xl lg:text-[3.6rem]"
            >
              Key Highlights
            </h2>

            <div className="mt-6 h-px w-12 bg-gold-500/70" />

            <p className="mt-6 max-w-sm text-sm leading-7 text-charcoal-800/65 sm:text-[15px]">
              Our expertise, creativity and personal approach come together to give you a seamless experience and timeless memories.
            </p>

            <Button
              href="/services"
              variant="outline"
              icon
              className="mt-7 border-charcoal-900/20 bg-transparent !text-charcoal-700/75 hover:border-gold-500 hover:bg-gold-400/10 hover:text-gold-600"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            variants={grid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid border-t border-charcoal-900/10 sm:grid-cols-3 lg:border-l"
          >
            {highlights.map(({ title, description, icon: Icon, link }) => (
              <motion.article
                key={title}
                variants={reveal}
                className="group relative min-h-[190px] border-b border-charcoal-900/10 p-6 sm:min-h-[205px] sm:p-7 lg:min-h-[220px] lg:p-8 xl:p-9"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-900/15 text-charcoal-800 transition-colors duration-300 group-hover:border-gold-500/60 group-hover:text-gold-600">
                    <Icon size={18} strokeWidth={1.25} />
                  </div>

                  <span className="font-display text-xs italic text-charcoal-900/25 transition-colors duration-300 group-hover:text-gold-600/60">
                    0{highlights.findIndex((item) => item.title === title) + 1}
                  </span>
                </div>

                <h3 className="mt-7 font-display text-xl leading-tight text-charcoal-900 sm:text-[1.35rem]">
                  {title}
                </h3>

                <p className="mt-3 max-w-xs text-xs leading-6 text-charcoal-800/55 sm:text-[13px]">
                  {description}
                </p>

                <Button
                  href={link}
                  variant="outline"
                  icon
                  className="mt-7 border-charcoal-900/20 bg-transparent !text-charcoal-700/75 hover:border-gold-500 hover:bg-gold-400/10 hover:text-gold-600">
                  Explore More
                  </Button>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-500 transition-all duration-500 group-hover:w-16" />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
