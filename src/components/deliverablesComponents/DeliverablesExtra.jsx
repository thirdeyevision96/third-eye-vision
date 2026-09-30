import { motion } from 'framer-motion'
import {
  Timer,
  Clapperboard,
  Video,
  MonitorPlay,
  PencilLine,
  ArrowUpRight,
} from 'lucide-react'

import Container from '../commonComponents/Container'

const extras = [
  {
    number: '01',
    eyebrow: 'OPTIONAL ADD-ON',
    title: 'Early Access',
    icon: Timer,
    featured: true,
    content: (
      <>
        {/* Price */}
        <div className="inline-flex bg-charcoal-950 px-5 py-2.5">
          <span className="font-display text-xl text-gold-300">
            <span className="text-2xl pr-5 tracking-[2px]">₹10,000</span>
             EXTRA
          </span>
        </div>

        <p className="mt-5 text-sm leading-6 text-charcoal-900/60">
          Want your videos sooner? Choose our early-access delivery option
          for faster turnaround.
        </p>

        {/* Delivery options */}
        <div className="mt-7 space-y-3">
          <div className="flex items-center gap-4 border-t border-charcoal-900/10 pt-4">
            <Clapperboard
              size={20}
              strokeWidth={1.4}
              className="shrink-0 text-gold-600"
            />

            <div>
              <p className="text-xs font-medium text-charcoal-900">
                Cinematic Videos &amp; Reels
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gold-600">
                Within 1 Week
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t border-charcoal-900/10 pt-4">
            <Video
              size={20}
              strokeWidth={1.4}
              className="shrink-0 text-gold-600"
            />

            <div>
              <p className="text-xs font-medium text-charcoal-900">
                Traditional Videos
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gold-600">
                Within 15 Days
              </p>
            </div>
          </div>
        </div>
      </>
    ),
  },

  {
    number: '02',
    eyebrow: 'FINAL VIDEO QUALITY',
    title: '4K Quality',
    icon: MonitorPlay,
    content: (
      <>
        <div className="flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center border border-gold-500 bg-charcoal-950">
            <span className="font-display text-xl font-semibold text-gold-300">
              4K
            </span>
          </div>

          <div>
            <p className="font-display text-lg text-charcoal-900">
              Every video
            </p>

            <p className="text-[10px] uppercase tracking-[0.2em] text-gold-600">
              Delivered in 4K
            </p>
          </div>
        </div>

        <p className="mt-7 text-sm leading-7 text-charcoal-900/60">
          Every final video is delivered in stunning 4K resolution,
          ensuring your memories look as beautiful as they felt.
        </p>

        <div className="mt-7 grid grid-cols-2 border-y border-charcoal-900/10">
          <div className="py-4 text-center">
            <p className="font-display text-lg text-charcoal-900">
              4K
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-charcoal-900/45">
              Resolution
            </p>
          </div>

          {/* <div className="border-x border-charcoal-900/10 py-4 text-center">
            <p className="font-display text-lg text-charcoal-900">
              HD
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-charcoal-900/45">
              Detail
            </p>
          </div> */}

          <div className="py-4 text-center">
            <p className="font-display text-lg text-charcoal-900">
              Pro
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-charcoal-900/45">
              Finish
            </p>
          </div>
        </div>
      </>
    ),
  },

  {
    number: '03',
    eyebrow: 'EDITING POLICY',
    title: 'Re-Edit Policy',
    icon: PencilLine,
    content: (
      <>
        <div className="border border-gold-500/40 bg-gold-400/10 p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-700">
            Included
          </p>

          <p className="mt-2 font-display text-xl text-charcoal-900">
            One Re-Edit Per Video
          </p>
        </div>

        <p className="mt-6 text-sm leading-7 text-charcoal-900/60">
          One-time re-edit is included for each video. This gives you an
          opportunity to request a revision while keeping the editing
          process clear and streamlined.
        </p>

        <div className="mt-6 border-t border-charcoal-900/10 pt-5">
          <p className="text-xs text-charcoal-900/60">
            Additional changes beyond the included re-edit:
          </p>

          <div className="mt-3 flex items-end gap-2">
            <span className="font-display text-3xl text-charcoal-900">
              ₹1,000
            </span>

            <span className="pb-1 text-[9px] uppercase tracking-[0.15em] text-gold-600">
            Video / Change
            </span>
          </div>
        </div>
      </>
    ),
  },
]

export default function TimelineExtra() {
  return (
    <section className="relative overflow-hidden bg-ivory-100 text-charcoal-900">
      {/* Decorative background details */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      <div className="pointer-events-none absolute -left-24 top-32 h-64 w-64 rounded-full border border-gold-500/10" />

      <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full border border-gold-500/10" />

      <Container className="relative z-10 py-20 sm:py-24 lg:py-28">

        {/* =========================
            SECTION INTRO
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-600">
            Additional Information
          </p>

          <h2 className="mt-4 font-display text-4xl leading-none text-charcoal-900 sm:text-5xl lg:text-6xl">
            Beyond Promised Delivery
          </h2>

          <div className="mx-auto mt-6 h-px w-12 bg-gold-500" />

          <p className="mt-6 text-sm leading-7 text-charcoal-900/55 sm:text-base">
            From faster delivery to final video quality and editing
            revisions, here&apos;s everything you need to know about your
            finished memories.
          </p>
        </motion.div>


        {/* =========================
            FEATURE CARDS
        ========================== */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {extras.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  border
                  border-gold-500/25
                  bg-ivory-50
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-gold-500/70
                  hover:shadow-[0_20px_60px_rgba(11,15,14,0.08)]
                  sm:p-7
                  lg:p-8
                "
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span className="
                    font-display
                    text-xs
                    italic
                    text-charcoal-900/25
                    transition-colors
                    duration-300
                    group-hover:text-gold-600
                  ">
                    {item.number}
                  </span>

                  <div className="
                    grid
                    h-12
                    w-12
                    place-items-center
                    rounded-full
                    border
                    border-gold-500/60
                    bg-charcoal-950
                    text-gold-400
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:border-gold-400
                    group-hover:bg-gold-400
                    group-hover:text-charcoal-950
                  ">
                    <Icon
                      size={19}
                      strokeWidth={1.4}
                    />
                  </div>
                </div>


                {/* Eyebrow */}
                <p className="
                  mt-7
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-gold-600
                ">
                  {item.eyebrow}
                </p>


                {/* Title */}
                <h3 className="
                  mt-3
                  font-display
                  text-2xl
                  leading-tight
                  text-charcoal-900
                  sm:text-3xl
                ">
                  {item.title}
                </h3>


                {/* Content */}
                <div className="mt-7">
                  {item.content}
                </div>


                {/* Explore / detail indicator */}
                <div className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  border-t
                  border-charcoal-900/10
                  pt-5
                ">
                  <span className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-charcoal-900/40
                  ">
                    Third Eye Vision
                  </span>

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.4}
                    className="
                      text-gold-600
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </div>


                {/* Bottom gold animation */}
                <span className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  bg-gold-500
                  transition-all
                  duration-700
                  group-hover:w-full
                " />
              </motion.article>
            )
          })}
        </div>


        {/* =========================
            BOTTOM QUOTE
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mx-auto mt-16 max-w-3xl text-center sm:mt-20"
        >
          <div className="mx-auto mb-6 h-px w-16 bg-gold-500/60" />

          <p className="font-script text-3xl leading-tight text-gold-600 sm:text-4xl">
            Beautiful memories deserve
            <br className="hidden sm:block" />
            beautiful delivery.
          </p>
        </motion.div>

      </Container>
    </section>
  )
}