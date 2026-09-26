import { motion } from 'framer-motion'
import {
  Timer,
  Clapperboard,
  Video,
} from 'lucide-react'

export default function TimelineEarlyAccess() {
  return (
    <motion.article
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
        group
        relative
        overflow-hidden
        border
        border-gold-500/30
        bg-charcoal-950
        p-7
        sm:p-9
      "
    >
      {/* Icon */}
      <div className="flex items-start justify-between">
        <div
          className="
            grid
            h-14
            w-14
            place-items-center
            rounded-full
            border
            border-gold-500
            text-gold-400
          "
        >
          <Timer
            size={25}
            strokeWidth={1.3}
          />
        </div>

        <span className="text-[9px] uppercase tracking-[0.25em] text-ivory/30">
          Optional Add-on
        </span>
      </div>

      {/* Heading */}
      <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">
        Faster Delivery
      </p>

      <h2 className="mt-3 font-display text-3xl text-ivory sm:text-4xl">
        Early Access
      </h2>

      {/* Price */}
      <div className="mt-5 inline-flex bg-gold-400 px-5 py-2">
        <span className="font-display text-lg font-semibold text-charcoal-950">
          ₹10,000 EXTRA
        </span>
      </div>

      <p className="mt-5 text-sm text-ivory/60">
        Want your videos sooner?
      </p>

      {/* Options */}
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div className="border border-ivory/10 p-4">
          <Clapperboard
            size={20}
            strokeWidth={1.3}
            className="text-gold-400"
          />

          <p className="mt-3 text-xs text-ivory/70">
            Cinematic Videos &amp; Reels
          </p>

          <p className="mt-2 font-display text-sm text-gold-300">
            → Within 1 Week
          </p>
        </div>

        <div className="border border-ivory/10 p-4">
          <Video
            size={20}
            strokeWidth={1.3}
            className="text-gold-400"
          />

          <p className="mt-3 text-xs text-ivory/70">
            Traditional Videos
          </p>

          <p className="mt-2 font-display text-sm text-gold-300">
            → Within 15 Days
          </p>
        </div>
      </div>

      {/* Gold hover line */}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-500 transition-all duration-700 group-hover:w-full" />
    </motion.article>
  )
}