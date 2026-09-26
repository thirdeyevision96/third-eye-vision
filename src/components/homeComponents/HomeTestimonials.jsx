import { motion, useReducedMotion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Container from '../commonComponents/Container'

const testimonials = [
  {
    name: 'Riya & Rohan',
    event: 'Wedding Celebration',
    avatar: '/assets/wedding-photography.jpg',
    review:
      'Third Eye Vision made our wedding unforgettable. Every emotion, every laugh and every little detail was captured beautifully.',
  },
  {
    name: 'Aman & Priya',
    event: 'Wedding & Reception',
    avatar: '/assets/pre-wedding.jpg',
    review:
      'Professional, creative and incredibly easy to work with. The photographs feel timeless and bring us right back to the day.',
  },
  {
    name: 'Neha & Kunal',
    event: 'Destination Wedding',
    avatar: '/assets/other-events.jpg',
    review:
      'The final collection tells our story exactly as we remember it — full of warmth, joy and genuine moments we will treasure forever.',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Testimonials() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="testimonials" className="relative overflow-hidden bg-charcoal-950 py-20 text-ivory sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-10 h-64 w-64 rounded-full bg-gold-500/[0.035] blur-3xl" />
        <div className="absolute right-[-5%] bottom-[-15%] h-96 w-96 rounded-full bg-white/[0.025] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ivory/10 to-transparent" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-400">
            TESTIMONIALS
          </p>
          <h2 className="font-editorial text-4xl leading-[0.98] text-ivory sm:text-5xl lg:text-6xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ivory/55 sm:text-base">
            Your happiness is our biggest reward. Here&apos;s what couples remember most about their experience with us.
          </p>
        </motion.div>

        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-none sm:mt-12 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:pb-0">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              custom={index}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className="group relative min-w-[86%] snap-start overflow-hidden rounded-sm border border-ivory/10 bg-white/[0.035] p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-gold-400/25 hover:bg-white/[0.055] sm:min-w-[55%] sm:p-7 lg:min-w-0 lg:p-8"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-gold-500/[0.025] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-gold-400/30 p-0.5">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} avatar`}
                      className="h-full w-full rounded-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="font-editorial text-xl text-ivory">{testimonial.name}</h3>
                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-gold-300/75">
                      {testimonial.event}
                    </p>
                  </div>
                </div>
                <Quote size={24} strokeWidth={1} className="text-gold-400/35" />
              </div>

              <div className="relative mt-7 h-px bg-ivory/10" />

              <p className="relative mt-6 min-h-[120px] text-sm leading-7 text-ivory/65 sm:min-h-[132px]">
                “{testimonial.review}”
              </p>

              <div className="relative mt-7 flex items-center justify-between border-t border-ivory/10 pt-5">
                <span className="text-[9px] uppercase tracking-[0.22em] text-ivory/30">
                  Verified Client
                </span>
                <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={12}
                      fill="currentColor"
                      strokeWidth={1.2}
                      className="text-gold-400"
                    />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-1.5 lg:hidden" aria-hidden="true">
          {testimonials.map((testimonial, index) => (
            <span
              key={testimonial.name}
              className={`h-px transition-all ${index === 0 ? 'w-7 bg-gold-400' : 'w-3 bg-ivory/20'}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
