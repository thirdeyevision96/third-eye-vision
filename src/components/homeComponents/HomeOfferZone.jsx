import { motion } from 'framer-motion'
import { CalendarDays, Gift, Sparkles, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: Gift,
    title: 'Special Discounts',
    text: 'Thoughtful savings designed around your celebration.',
  },
  {
    icon: CalendarDays,
    title: 'Early Booking Benefits',
    text: 'Reserve your date early and unlock added value.',
  },
  {
    icon: Sparkles,
    title: 'Complimentary Add-ons',
    text: 'Beautiful extras to make your final collection even more special.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function OfferZone() {
  return (
    <section id="offers" className="relative overflow-hidden bg-ivory-100 text-charcoal-950">
      {/* Subtle botanical line-art */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute -right-16 -top-12 h-[430px] w-[430px] opacity-[0.12]"
          viewBox="0 0 420 420"
          fill="none"
        >
          <path d="M390 18C300 58 279 133 302 201C324 268 292 335 202 405" stroke="currentColor" strokeWidth="1" />
          <path d="M302 201C342 181 372 150 389 109" stroke="currentColor" strokeWidth="1" />
          <path d="M299 202C261 177 241 143 240 101" stroke="currentColor" strokeWidth="1" />
          <path d="M278 270C322 259 354 238 374 209" stroke="currentColor" strokeWidth="1" />
          <path d="M274 272C235 252 213 221 208 184" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="348" cy="144" rx="24" ry="8" transform="rotate(-48 348 144)" stroke="currentColor" />
          <ellipse cx="263" cy="150" rx="25" ry="8" transform="rotate(39 263 150)" stroke="currentColor" />
          <ellipse cx="344" cy="247" rx="26" ry="8" transform="rotate(-34 344 247)" stroke="currentColor" />
          <ellipse cx="235" cy="230" rx="27" ry="8" transform="rotate(38 235 230)" stroke="currentColor" />
          <circle cx="301" cy="202" r="17" stroke="currentColor" />
        </svg>

        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-charcoal-950/5" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full border border-charcoal-950/5" />
      </div>

      <div className="relative mx-auto grid max-w-[1500px] lg:grid-cols-[0.92fr_1.08fr]">
        {/* Image panel */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group relative min-h-[430px] overflow-hidden sm:min-h-[520px] lg:min-h-[690px]"
        >
          <img
            src="/assets/wedding-photography.jpg"
            alt="Indian wedding couple photographed in warm cinematic light"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/35 via-transparent to-charcoal-950/5" />

          <div className="absolute bottom-7 left-7 flex items-center gap-3 text-white/80 sm:bottom-9 sm:left-9">
            <span className="h-px w-8 bg-gold-400" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.24em]">Make it unforgettable</span>
          </div>
        </motion.div>

        {/* Offer content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ staggerChildren: 0.1 }}
          className="relative flex min-h-[430px] flex-col justify-center px-7 py-16 sm:px-12 sm:py-20 lg:min-h-[690px] lg:px-16 xl:px-20"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="relative z-10 max-w-2xl">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-gold-600">
              Limited Time
            </p>

            <div className="mb-3 flex items-end gap-4">
              <h2 className="font-editorial text-4xl leading-[0.95] tracking-[-0.03em] text-charcoal-950 sm:text-5xl lg:text-6xl">
                Offer Zone
              </h2>
              <span className="mb-1 hidden h-px flex-1 max-w-20 bg-charcoal-950/15 sm:block" />
            </div>

            <p className="max-w-xl font-editorial text-xl italic text-charcoal-950/70 sm:text-2xl">
              Make your special moments even more special.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="relative z-10 mt-8">
            <div className="inline-flex -rotate-1 flex-col border-y border-charcoal-950/15 px-5 py-4 sm:px-7">
              <span className="font-editorial text-2xl uppercase tracking-[0.08em] sm:text-3xl">
                Bookings Open
              </span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-charcoal-950/55">
                Limited Slots Only
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="relative z-10 mt-9 grid gap-4 border-y border-charcoal-950/10 py-6 sm:grid-cols-3 sm:gap-5"
          >
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="group">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-charcoal-950/15 text-gold-600 transition-colors duration-300 group-hover:border-gold-500">
                  <Icon size={15} strokeWidth={1.4} />
                </div>
                <h3 className="font-editorial text-lg leading-tight">{title}</h3>
                <p className="mt-1.5 max-w-[210px] text-[10px] leading-5 text-charcoal-950/55">{text}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="relative z-10 mt-8">
            <a
              href="#packages"
              className="group inline-flex items-center gap-3 border-b border-charcoal-950/30 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal-950 transition-colors hover:border-gold-600 hover:text-gold-700"
            >
              <span>Check Our Packages</span>
              <ArrowRight size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          <div className="pointer-events-none absolute bottom-8 right-7 hidden select-none font-editorial text-[120px] leading-none text-charcoal-950/[0.025] sm:block lg:right-14 lg:text-[180px]">
            ✿
          </div>
        </motion.div>
      </div>
    </section>
  )
}
