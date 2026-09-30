import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Camera, Clapperboard, Heart, PlayCircle } from 'lucide-react'
import Container from '../commonComponents/Container'
import Button from '../commonComponents/Button'
import HomeHero from '../../assets/home-hero.png'

const services = [
  { label: 'Photo & Video', icon: Camera },
  { label: 'Drone Coverage', icon: PlayCircle },
  { label: 'Cinematic Films', icon: Clapperboard },
  { label: 'Personal Touch', icon: Heart },
]

export default function Hero() {
  const reduced = useReducedMotion()

  const reveal = (delay = 0) => ({
    initial: reduced ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-charcoal-950 text-ivory-100">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url('${HomeHero}')` }}
        initial={reduced ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/45 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/20" />
      
      <Container className="relative flex min-h-[100svh] items-center pb-28 pt-32 sm:pb-32 sm:pt-36">
        <div className="w-full max-w-[720px]">
          <motion.p
            {...reveal(0.15)}
            className="mb-4 text-[9px] font-semibold uppercase tracking-[0.38em] text-gold-300 sm:text-[10px]"
          >
            Capturing Your
          </motion.p>

          <motion.h1
            {...reveal(0.24)}
            className="max-w-[680px] font-editorial text-[clamp(3.35rem,8vw,7.1rem)] font-medium leading-[0.84] tracking-[-0.045em] text-ivory-100"
          >
            Biggest Moments
          </motion.h1>

          <motion.div
            {...reveal(0.34)}
            className="mt-1 pl-1 sm:mt-5 sm:pl-3"
          >
            <span className="font-script text-[clamp(4.1rem,10vw,8rem)] leading-[0.8] text-gold-300 drop-shadow-lg">
              Forever
            </span>
          </motion.div>

          <motion.p
            {...reveal(0.5)}
            className="mt-8 max-w-[455px] text-[11px] leading-[1.9] text-ivory-100/70 sm:mt-10 sm:text-[12px]"
          >
            We don't just capture weddings, we capture emotions, relationships and the little moments that make your story truly yours.
          </motion.p>

          <motion.div {...reveal(0.62)} className="mt-7 sm:mt-8">
            <Button href="/contact" icon={false} className="group px-5 py-3 text-[9px] sm:px-6">
            <span className='flex items-center sm:gap-2'>
              Book Now
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            </Button>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={reduced ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.8 }}
        className="absolute inset-x-0 bottom-0 border-t border-ivory-100/10 bg-charcoal-950/10 backdrop-blur-[2px]"
      >
        <Container className="flex min-h-[58px] items-center justify-between gap-5 py-3 sm:min-h-[64px] sm:py-4">
          <div className="flex min-w-0 items-center gap-4 overflow-x-auto scrollbar-none sm:gap-8">
            {services.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#services"
                className="group flex shrink-0 items-center gap-2 text-[8px] font-medium uppercase tracking-[0.08em] text-ivory-100/70 transition-colors hover:text-ivory-100 sm:text-[9px]"
              >
                <Icon size={12} strokeWidth={1.35} className="text-ivory-100/80" />
                <span>{label}</span>
              </a>
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-3 text-[8px] uppercase tracking-[0.22em] text-ivory-100/45 sm:flex">
            <span>Scroll</span>
            <span className="h-px w-8 bg-ivory-100/25" />
          </div>
        </Container>
      </motion.div>

      <motion.a
        href="#highlights"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.05, duration: 0.8 }}
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 text-ivory-100/55 sm:flex"
        aria-label="Scroll to highlights"
      >
        <span className="text-[8px] font-medium uppercase tracking-[0.35em] [writing-mode:vertical-rl]">Scroll</span>
        <span className="relative h-16 w-px overflow-hidden bg-ivory-100/20">
          <motion.span
            className="absolute left-0 top-0 h-1/2 w-full bg-gold-300"
            animate={reduced ? undefined : { y: ['-100%', '220%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>

      <div className="pointer-events-none absolute bottom-[76px] right-[11%] hidden h-16 w-16 rounded-full border border-ivory-100/15 lg:block" />
    </section>
  )
}
