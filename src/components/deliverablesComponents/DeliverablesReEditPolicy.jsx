import { motion } from 'framer-motion'
import { PencilLine } from 'lucide-react'
import Container from '../commonComponents/Container'

export default function TimelineReEditPolicy() {
  return (
    <section className="bg-ivory-100 text-charcoal-900">
      <Container className="py-16 sm:py-20 lg:py-24">
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
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            grid
            gap-8
            border-y
            border-charcoal-900/10
            py-10
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-center
          "
        >
          {/* Left */}
          <div className="flex items-center gap-5">
            <div
              className="
                grid
                h-14
                w-14
                shrink-0
                place-items-center
                rounded-full
                border
                border-gold-500
                bg-charcoal-950
                text-gold-400
              "
            >
              <PencilLine
                size={23}
                strokeWidth={1.3}
              />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-600">
                Editing Policy
              </p>

              <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                Re-Edit Policy
              </h2>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <div className="inline-flex bg-charcoal-950 px-4 py-2">
                <span className="text-[10px] font-semibold tracking-[0.15em] text-gold-300">
                  ONE RE-EDIT INCLUDED PER VIDEO
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-charcoal-900/60">
                One-time re-edit is included for each video.
              </p>
            </div>

            <div className="border-l border-charcoal-900/10 pl-6">
              <p className="text-sm leading-7 text-charcoal-900/60">
                Any additional change beyond the included re-edit will be
                charged at:
              </p>

              <p className="mt-4 font-display text-2xl text-charcoal-900">
                ₹1,000
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gold-600">
                / Video / Change
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}