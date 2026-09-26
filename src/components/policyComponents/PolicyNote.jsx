import { motion, useReducedMotion } from 'framer-motion'
import {
  HardDrive,
  Youtube,
  Info,
} from 'lucide-react'

import Container from '../commonComponents/Container'

export default function DeliverablesNote() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-ivory-100 pb-20 text-charcoal-900 sm:pb-24 lg:pb-28">
      <Container>
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
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
          }}
          className="overflow-hidden border border-gold-500/35 bg-[#f7f2e8]"
        >
          <div className="grid lg:grid-cols-[0.65fr_1fr_1fr]">
            {/* Heading */}
            <div className="flex items-center gap-5 border-b border-gold-500/20 p-7 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-charcoal-950 text-gold-400">
                <Info
                  size={23}
                  strokeWidth={1.3}
                />
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-gold-600">
                  Important
                </p>

                <h3 className="mt-1 font-display text-2xl leading-tight">
                  Delivery Note
                </h3>
              </div>
            </div>

            {/* Pendrive */}
            <div className="border-b border-gold-500/20 p-7 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-3">
                <HardDrive
                  size={19}
                  strokeWidth={1.4}
                  className="text-gold-600"
                />

                <h4 className="font-display text-xl">
                  Pendrive Policy
                </h4>
              </div>

              <div className="mt-5 space-y-3">
                <p className="flex gap-3 text-sm leading-6 text-charcoal-900/65">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />

                  The Pendrive will be handed over along with
                  the album on the day of final payment.
                </p>

                <p className="flex gap-3 text-sm leading-6 text-charcoal-900/65">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />

                  Only one Pendrive will be provided.
                </p>
              </div>
            </div>

            {/* Traditional video */}
            <div className="p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <Youtube
                  size={20}
                  strokeWidth={1.4}
                  className="text-gold-600"
                />

                <h4 className="font-display text-xl">
                  Traditional Video
                </h4>
              </div>

              <p className="mt-5 text-sm leading-6 text-charcoal-900/65">
                The Traditional Video YouTube link will be
                provided once the selected album photographs
                have been shared by the client.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}