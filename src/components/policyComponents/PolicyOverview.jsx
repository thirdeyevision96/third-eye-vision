import { motion } from 'framer-motion'
import {
  CalendarDays,
  Clock3,
  Clapperboard,
  Images,
} from 'lucide-react'

import Container from '../commonComponents/Container'

const payments = [
  {
    percentage: '10%',
    title: 'Booking',
    description: 'At the time of booking',
    icon: CalendarDays,
  },
  {
    percentage: '40%',
    title: 'Pre-Event',
    description: '1 month before the event',
    icon: Clock3,
  },
  {
    percentage: '40%',
    title: 'Cinematic',
    description: 'As per agreed schedule',
    icon: Clapperboard,
  },
  {
    percentage: '10%',
    title: 'Final',
    description: 'At final delivery',
    icon: Images,
  },
]

export default function DeliverablesOverview() {
  return (
    <section className="relative overflow-hidden bg-charcoal-950 py-24 sm:py-28 lg:py-32">

      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gold-500/[0.035] blur-3xl" />

      <Container className="relative z-10">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold-400">
            At A Glance
          </p>

          <h2 className="mt-5 font-display text-4xl text-ivory sm:text-5xl lg:text-6xl">
            The Complete
            <br />
            <span className="font-script text-gold-300">
              Payment Journey.
            </span>
          </h2>

          <div className="mx-auto mt-7 h-px w-12 bg-gold-500" />

        </div>


        <div className="mt-14 grid overflow-hidden border border-gold-500/25 lg:grid-cols-4">

          {payments.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className={`
                  group
                  relative
                  px-6
                  py-10
                  text-center
                  transition-all
                  duration-500
                  hover:bg-gold-400/[0.035]

                  ${
                    index !== 0
                      ? 'border-t border-gold-500/15 lg:border-l lg:border-t-0'
                      : ''
                  }
                `}
              >

                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-gold-500/30 bg-gold-500/[0.05]">
                  <Icon
                    size={20}
                    strokeWidth={1.2}
                    className="text-gold-400"
                  />
                </div>

                <p className="mt-6 font-display text-5xl text-gold-300">
                  {item.percentage}
                </p>

                <h3 className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory">
                  {item.title}
                </h3>

                <p className="mx-auto mt-4 max-w-[160px] text-xs leading-5 text-ivory/40">
                  {item.description}
                </p>

                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gold-400 transition-all duration-500 group-hover:w-16" />

              </motion.div>
            )
          })}

        </div>


        <div className="mx-auto mt-16 max-w-xl text-center">

          <div className="mx-auto h-px w-12 bg-gold-500/50" />

          <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.35em] text-ivory/40">
            Thank You For Trusting Us
          </p>

          <p className="mt-5 font-script text-3xl text-gold-300 sm:text-4xl">
            Your memories deserve our commitment.
          </p>

        </div>

      </Container>

    </section>
  )
}