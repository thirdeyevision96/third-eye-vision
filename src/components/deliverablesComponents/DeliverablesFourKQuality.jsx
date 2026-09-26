import { motion } from 'framer-motion'
import { MonitorPlay } from 'lucide-react'

export default function TimelineFourKQuality() {
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
        delay: 0.1,
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
      {/* Decorative 4K text */}
      <div className="absolute -right-5 -top-8 font-display text-[130px] font-bold leading-none text-ivory/[0.025]">
        4K
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div
            className="
              grid
              h-14
              w-14
              place-items-center
              border
              border-gold-500
              text-gold-400
            "
          >
            <MonitorPlay
              size={25}
              strokeWidth={1.3}
            />
          </div>

          <span className="text-3xl font-semibold tracking-wide text-gold-400">
            4K
          </span>
        </div>

        <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">
          Final Video Quality
        </p>

        <h2 className="mt-3 max-w-md font-display text-3xl text-ivory sm:text-4xl">
          All Videos Are
          <br />
          Provided in 4K Quality
        </h2>

        <p className="mt-6 max-w-lg text-sm leading-7 text-ivory/55">
          Every final video is delivered in stunning 4K resolution,
          ensuring your memories look as beautiful as they felt.
        </p>

        {/* Camera decoration */}
        <div className="mt-8 flex items-center gap-3">
          <div className="h-px w-10 bg-gold-500/60" />

          <span className="text-[9px] uppercase tracking-[0.25em] text-ivory/30">
            Cinematic · Detailed · Timeless
          </span>
        </div>
      </div>

      <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-500 transition-all duration-700 group-hover:w-full" />
    </motion.article>
  )
}