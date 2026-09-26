import { motion, useReducedMotion } from 'framer-motion'
import {
  CalendarCheck,
  Clapperboard,
  Images,
  CheckCircle2,
} from 'lucide-react'

import Container from '../commonComponents/Container'

const paymentSteps = [
  {
    number: '01',
    percentage: '10%',
    label: 'Booking',
    title: '10% Payment - Booking & Initial Payment',
    icon: CalendarCheck,
    timing: 'At the time of booking',
    description:
      'Your date is officially secured once the booking payment is completed.',
    points: [
      '10% payment is payable at the time of booking.',
      'Booking amount is non-refundable.',
      'Confirms photography and videography services.',
      'Wedding photographs available through the app gallery within 2–3 days.',
    ],
  },

  {
    number: '02',
    percentage: '40%',
    label: 'Pre-Event',
    title: '40% Payment - Pre-Event Payment',
    icon: CalendarCheck,
    timing: '1 month before the event',
    description:
      'The second payment is completed before your wedding celebration.',
    points: [
      '40% payment is payable 1 month before the event date.',
      'Completes the pre-event payment stage.',
      'Photography and videography coverage remains confirmed.',
    ],
  },

  {
    number: '03',
    percentage: '40%',
    label: 'Cinematic',
    title: '40% Payment - Cinematic Deliverables',
    icon: Clapperboard,
    timing: 'As per agreed schedule',
    description:
      'This stage covers your cinematic wedding film and social media content.',
    points: [
      '40% payment is payable as per agreed schedule',
      'Cinematic Wedding Film. (Songs/music to be provided by the client)',
      'Committed Instagram Reels.',
    ],
  },

  {
    number: '04',
    percentage: '10%',
    label: 'Final',
    title: '10% Payment - Final Deliverables',
    icon: Images,
    timing: 'At final delivery',
    description:
      'The final payment completes the delivery and handover of your memories.',
    points: [
      '10% payment is payable at the final delivery',
      'Wedding Album.(Client provides selected photographs for the album)',
      'Traditional Wedding Video (Provided through YouTube link and Pendrive)',
      'Pendrive containing raw data.',
    ],
  },
]

export default function DeliverablesPayment() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-ivory-100 py-16 text-charcoal-900 sm:py-20 lg:py-24">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-gold-400/[0.035] blur-3xl" />

      <Container className="relative z-10">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-gold-600">
            A Simple & Transparent Journey
          </p>

          <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.025em] sm:text-5xl lg:text-6xl">
            Your Payment{' '}
            <br />
            <span className="font-script text-gold-600">
              Journey.
            </span>
          </h2>

          <div className="mx-auto mt-5 h-px w-10 bg-gold-500" />

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-charcoal-900/50">
            From booking your date to receiving your final
            memories, every stage is kept clear and simple.
          </p>
        </motion.div>


        {/* =====================================================
            COMPACT PAYMENT SUMMARY
        ====================================================== */}

        {/* <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mx-auto
            mt-10
            max-w-4xl
            overflow-hidden
            border
            border-gold-500/25
            bg-charcoal-950
          "
        >
          <div className="grid grid-cols-2 sm:grid-cols-4">

            {paymentSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <div
                  key={step.number}
                  className={`
                    relative
                    px-4
                    py-5
                    text-center
                    sm:px-5
                    sm:py-6

                    ${
                      index !== 0
                        ? 'border-t border-gold-500/15 sm:border-l sm:border-t-0'
                        : ''
                    }
                  `}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.2}
                    className="mx-auto text-gold-400"
                  />

                  <p className="mt-2 font-display text-2xl text-gold-300 sm:text-3xl">
                    {step.percentage}
                  </p>

                  <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-ivory-300">
                    {step.label}
                  </p>
                </div>
              )
            })}

          </div>
        </motion.div> */}


        {/* =====================================================
            COMPACT CARDS
        ====================================================== */}

        <div className="mx-auto mt-10 max-w-5xl space-y-5">

          {paymentSteps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.article
                key={step.number}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  border
                  border-gold-500/20
                  bg-[#f8f3e9]
                  transition-all
                  duration-400
                  hover:-translate-y-0.5
                  hover:border-gold-500/50
                  hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)]
                "
              >

                {/* Hover line */}
                <span
                  className="
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    w-0
                    bg-gold-500
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                <div className="flex flex-col sm:flex-row">

                  {/* =========================================
                      NUMBER
                  ========================================== */}

                  <div
                    className="
                      flex
                      shrink-0
                      items-center
                      justify-between
                      bg-charcoal-950
                      px-5
                      py-4
                      sm:w-[125px]
                      sm:flex-col
                      sm:items-center
                      sm:justify-center
                      sm:py-5
                    "
                  >

                    <div className="flex items-center gap-3 sm:block sm:text-center">

                      <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-gold-400">
                        Stage
                      </span>

                      <span className="font-display text-3xl leading-none text-gold-300 sm:mt-1 sm:block sm:text-4xl">
                        {step.number}
                      </span>

                    </div>

                    <div className="sm:mt-3">
                      <span className="font-display text-lg text-ivory sm:text-xl">
                        {step.percentage}
                      </span>
                    </div>

                  </div>


                  {/* =========================================
                      CONTENT
                  ========================================== */}

                  <div className="flex-1 px-5 py-5 sm:px-7 sm:py-6">

                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

                      {/* Title */}
                      <div className="min-w-0">

                        <div className="flex items-center gap-2.5">

                          <div className="
                            grid
                            h-8
                            w-8
                            shrink-0
                            place-items-center
                            rounded-full
                            border
                            border-gold-500/25
                            bg-gold-500/[0.05]
                            text-gold-600
                          ">
                            <Icon
                              size={15}
                              strokeWidth={1.3}
                            />
                          </div>

                          <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-gold-600">
                            {step.label}
                          </p>

                        </div>

                        <h3 className="mt-3 font-display text-xl leading-tight sm:text-2xl">
                          {step.title}
                        </h3>

                      </div>


                      {/* Timing */}
                      <div className="
                        shrink-0
                        border
                        border-gold-500/15
                        bg-white/30
                        px-3
                        py-2
                        lg:text-right
                      ">
                        <p className="text-[8px] uppercase tracking-[0.16em] text-charcoal-900/40">
                          Payment Timing
                        </p>

                        <p className="mt-1 text-[10px] font-medium text-charcoal-900/65">
                          {step.timing}
                        </p>
                      </div>

                    </div>


                    {/* Description */}
                    <p className="mt-4 max-w-2xl text-xs leading-5 text-charcoal-900/55">
                      {step.description}
                    </p>


                    {/* Conditions */}
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">

                      {step.points.map((point) => (
                        <div
                          key={point}
                          className="flex max-w-md items-start gap-2"
                        >
                          <CheckCircle2
                            size={13}
                            strokeWidth={1.4}
                            className="mt-0.5 shrink-0 text-gold-600"
                          />

                          <p className="text-[11px] leading-5 text-charcoal-900/60">
                            {point}
                          </p>
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </motion.article>
            )
          })}

        </div>


        {/* =====================================================
            SMALL FOOT NOTE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 text-center"
        >
          <span className="mx-auto block h-px w-8 bg-gold-500/50" />

          <p className="mt-4 text-[8px] font-semibold uppercase tracking-[0.28em] text-charcoal-900/35">
            Clear Terms · Transparent Process · Lasting Memories
          </p>
        </motion.div>

      </Container>
    </section>
  )
}