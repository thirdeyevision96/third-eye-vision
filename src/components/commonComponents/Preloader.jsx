import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Logo from '../../assets/tev-logo2.png'

export default function Preloader({ onComplete }) {
  const reduceMotion = useReducedMotion()
  const [progress, setProgress] = useState(0)
  const [exit, setExit] = useState(false)

  useEffect(() => {
    if (reduceMotion) {
      setProgress(100)
      setExit(true)
      onComplete?.()
      return
    }

    const duration = 2000
    const start = performance.now()

    let frame

    const update = (now) => {
      const elapsed = now - start
      const value = Math.min(
        100,
        Math.round((elapsed / duration) * 100)
      )

      setProgress(value)

      if (value < 100) {
        frame = requestAnimationFrame(update)
      } else {
        setTimeout(() => {
          setExit(true)

          setTimeout(() => {
            onComplete?.()
          }, 700)
        }, 250)
      }
    }

    frame = requestAnimationFrame(update)

    return () => {
      cancelAnimationFrame(frame)
    }
  }, [reduceMotion, onComplete])

  return (
    <motion.div
      initial={{
        clipPath: 'inset(0 0 0 0)',
      }}
      animate={
        exit
          ? {
              clipPath: 'inset(0 0 100% 0)',
            }
          : {
              clipPath: 'inset(0 0 0 0)',
            }
      }
      transition={{
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="
        fixed
        inset-0
        z-[99999999]
        flex
        items-center
        justify-center
        bg-[#0b0f0e]
      "
    >
      <div className="w-[min(420px,80vw)] text-center">

        {/* LOGO */}
        <motion.img
          src={Logo}
          alt="Third Eye Vision"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: progress > 5 ? 1 : 0,
            y: progress > 5 ? 0 : 20,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-h-28 w-auto object-contain"
        />

        {/* SUBTITLE */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: progress > 20 ? 1 : 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-5
            text-[8px]
            font-medium
            tracking-[0.28em]
            text-ivory/60
            sm:text-[9px]
          "
        >
          WEDDING PLANNING | PHOTOGRAPHY | FILMMAKING
        </motion.p>

        {/* LOADING */}
        <div className="mt-12">
          <div className="flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-[0.25em] text-ivory/45">
              Loading
            </span>

            <motion.span
              key={progress}
              className="font-display text-sm text-gold-300"
            >
              {progress}%
            </motion.span>
          </div>

          {/* PROGRESS LINE */}
          <div className="mt-3 h-px w-full overflow-hidden bg-ivory/10">
            <motion.div
              className="h-full origin-left bg-gold-400"
              animate={{
                scaleX: progress / 100,
              }}
              transition={{
                duration: 0.1,
                ease: 'linear',
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}