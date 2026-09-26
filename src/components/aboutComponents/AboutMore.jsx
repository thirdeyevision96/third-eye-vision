import { motion, useReducedMotion } from 'framer-motion'

import {
  Camera,
  Gem,
  Users,
  ShieldCheck,
  Infinity,
} from 'lucide-react'

import Container from '../commonComponents/Container'

const features = [
  {
    title: 'Passion',
    description: 'I don’t just click pictures, I capture emotions.',
    icon: Camera,
  },
  {
    title: 'Precision',
    description: 'Every detail matters, from shot to story.',
    icon: Gem,
  },
  {
    title: 'Personal Touch',
    description: 'Your story. My focus. Always.',
    icon: Users,
    featured: true,
  },
  {
    title: 'Professionalism',
    description: 'Committed to quality, on time, every time.',
    icon: ShieldCheck,
  },
  {
    title: 'Lasting Memories',
    description: 'Because some moments deserve to live forever.',
    icon: Infinity,
  },
]

export default function AboutMore() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="
      relative
      overflow-hidden
      bg-charcoal-950
    ">

      {/* Background texture */}
      <div className="
        pointer-events-none
        absolute
        inset-0
        bg-[radial-gradient(circle_at_50%_0%,rgba(194,151,72,0.07),transparent_35%)]
      " />


      <Container className="
        relative
        z-10
        py-20
        sm:py-24
        lg:py-28
      ">

        {/* =========================
            HEADING
        ========================== */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 25,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            items-center
            justify-center
            gap-5
            sm:gap-8
          "
        >

          <span className="
            hidden
            h-px
            flex-1
            max-w-36
            bg-gold-500/50
            sm:block
          " />

          <div className="text-center">
            <p className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-gold-400
              sm:text-[10px]
            ">
              More Than A Photographer
            </p>
          </div>

          <span className="
            hidden
            h-px
            flex-1
            max-w-36
            bg-gold-500/50
            sm:block
          " />

        </motion.div>


        {/* =========================
            INTRO
        ========================== */}
        <motion.p
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 15,
                }
          }
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
            mx-auto
            mt-5
            max-w-xl
            text-center
            text-sm
            leading-7
            text-ivory/45
          "
        >
          Every celebration deserves more than photographs.
          It deserves intention, emotion, precision and a story
          that continues long after the day is over.
        </motion.p>


        {/* =========================
            FEATURES
        ========================== */}
        <div className="
          mt-14
          grid
          grid-cols-1
          border
          border-gold-500/15
          sm:grid-cols-2
          lg:grid-cols-5
        ">

          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.article
                key={feature.title}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 25,
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
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  group
                  relative
                  px-7
                  py-9
                  text-center
                  transition-all
                  duration-500
                  hover:bg-gold-400/[0.035]

                  ${
                    index !== 0
                      ? 'border-t border-gold-500/15 sm:border-l sm:border-t-0'
                      : ''
                  }

                  ${
                    index === 2
                      ? 'bg-gold-400/[0.025]'
                      : ''
                  }

                  ${
                    index === 4
                      ? 'sm:col-span-2 lg:col-span-1'
                      : ''
                  }
                `}
              >

                {/* Icon */}
                <div className="
                  mx-auto
                  grid
                  h-14
                  w-14
                  place-items-center
                  rounded-full
                  border
                  border-gold-500/50
                  text-gold-400
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:border-gold-400
                  group-hover:bg-gold-400
                  group-hover:text-charcoal-950
                ">
                  <Icon
                    size={23}
                    strokeWidth={1.25}
                  />
                </div>


                {/* Title */}
                <h3 className={`
                  mt-6
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  ${
                    feature.featured
                      ? 'text-gold-400'
                      : 'text-ivory/90'
                  }
                `}>
                  {feature.title}
                </h3>


                {/* Description */}
                <p className="
                  mx-auto
                  mt-4
                  max-w-[180px]
                  text-xs
                  leading-6
                  text-ivory/50
                  transition-colors
                  duration-300
                  group-hover:text-ivory/70
                ">
                  {feature.description}
                </p>


                {/* Bottom gold line */}
                <span className="
                  absolute
                  bottom-0
                  left-1/2
                  h-px
                  w-0
                  -translate-x-1/2
                  bg-gold-400
                  transition-all
                  duration-500
                  group-hover:w-16
                " />

              </motion.article>
            )
          })}

        </div>


        {/* =========================
            BOTTOM STATEMENT
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
            duration: 1,
            delay: 0.25,
          }}
          className="
            mx-auto
            mt-16
            max-w-2xl
            text-center
            sm:mt-20
          "
        >

          <div className="
            mx-auto
            mb-6
            h-px
            w-12
            bg-gold-500/60    
        "/>

          <p className="
            font-script
            text-3xl
            leading-tight
            text-gold-300
            sm:text-4xl
          ">
            Your story.
            <br className="sm:hidden" />
            {' '}
            My focus.
            <br className="hidden sm:block" />
            {' '}
            Always.
          </p>

        </motion.div>

      </Container>

    </section>
  )
}