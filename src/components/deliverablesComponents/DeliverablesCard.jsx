import { motion } from 'framer-motion'
import {
  Image,
  Clapperboard,
  Video,
  BookOpen,
  Instagram,
} from 'lucide-react'

import Container from '../commonComponents/Container'

const deliveryItems = [
  {
    number: '01',
    title: 'Photographs',
    timeline: 'NEXT DAY',
    description:
      'Photos will be available the next day through our face scanning system.',
    icon: Image,
  },
  {
    number: '02',
    title: 'Cinematic Videos & Reels',
    timeline: 'WITHIN 1 WEEK',
    description:
      'Your professionally edited cinematic videos and reels will be delivered within 1 week.',
    icon: Clapperboard,
  },
  {
    number: '03',
    title: 'Traditional Videos',
    timeline: 'WITHIN 45 DAYS',
    description:
      'Traditional wedding videos will be delivered within 45 days and provided through YouTube.',
    icon: Video,
  },
  {
    number: '04',
    title: 'Album',
    timeline: '15 DAYS AFTER PHOTO SELECTION',
    description:
      'Once you have selected your album photographs, the designed and printed album will be delivered within 15 days.',
    icon: BookOpen,
  },
  {
    number: '05',
    title: 'Instagram Photos',
    timeline: '50 EDITED PHOTOS',
    description:
      'You will receive 50 edited photographs of your choice, specially prepared for Instagram posting.',
    icon: Instagram,
  },
  {
    number: '06',
    title: 'Instagram Posters',
    timeline: '5-6 POSTERS',
    description:
      'You will receive 5-6 creative posters, specially prepared for Instagram posting.',
    icon: Instagram,
  },
]

export default function TimelineCard() {
  return (
    <section className="bg-charcoal-950 text-ivory">
      <Container className="py-20 sm:py-24 lg:py-28">

        {/* =========================
            SECTION HEADING
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
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">
            What You Can Expect
          </p>

          <h2 className="mt-4 font-display text-4xl leading-none text-ivory sm:text-5xl lg:text-6xl">
            Delivery Timeline
          </h2>

          <div className="mx-auto mt-6 h-px w-12 bg-gold-500" />

          <p className="mt-6 text-sm leading-7 text-ivory/55 sm:text-base">
            Every part of your final collection is carefully prepared,
            edited and delivered with attention to detail.
          </p>
        </motion.div>


        {/* =========================
            DELIVERY CARDS
        ========================== */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {deliveryItems.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  border
                  border-gold-500/20
                  bg-charcoal-900
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-gold-500/60
                  hover:bg-charcoal-800
                  sm:p-7
                "
              >

                {/* =========================
                    TOP ROW
                ========================== */}
                <div className="flex items-start justify-between">

                  {/* Number */}
                  <span className="
                    font-display
                    text-xs
                    italic
                    text-ivory/25
                    transition-colors
                    duration-300
                    group-hover:text-gold-400
                  ">
                    {item.number}
                  </span>


                  {/* Icon */}
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


                {/* =========================
                    TITLE
                ========================== */}
                <h3 className="
                  mt-8
                  font-display
                  text-xl
                  leading-tight
                  text-ivory
                  sm:text-[1.35rem]
                ">
                  {item.title}
                </h3>


                {/* =========================
                    TIMELINE BADGE
                ========================== */}
                <div className="
                  mt-5
                  inline-flex
                  border
                  border-gold-500/30
                  bg-gold-400/10
                  px-4
                  py-2
                  transition-colors
                  duration-300
                  group-hover:border-gold-400/60
                  group-hover:bg-gold-400/15
                ">
                  <span className="
                    text-[10px]
                    font-semibold
                    tracking-[0.15em]
                    text-gold-300
                  ">
                    {item.timeline}
                  </span>
                </div>


                {/* =========================
                    DESCRIPTION
                ========================== */}
                <p className="
                  mt-5
                  text-sm
                  leading-6
                  text-ivory/50
                  transition-colors
                  duration-300
                  group-hover:text-ivory/65
                ">
                  {item.description}
                </p>


                {/* =========================
                    BOTTOM GOLD LINE
                ========================== */}
                <span className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-gold-400
                  transition-all
                  duration-700
                  group-hover:w-full
                " />

              </motion.article>
            )
          })}


          {/* =========================
              EVERY MOMENT COUNTS CARD
          ========================== */}
          {/* <motion.article
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 0.65,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative
              min-h-[280px]
              overflow-hidden
              border
              border-gold-500/25
            "
          > */}

            {/* Image */}
            {/* <img
              src="/assets/hero-reference.jpg"
              alt="Wedding details"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-1000
                ease-out
                group-hover:scale-105
              "
            /> */}

            {/* Dark overlay */}
            {/* <div className="
              absolute
              inset-0
              bg-gradient-to-t
              from-charcoal-950
              via-charcoal-950/30
              to-transparent
            " /> */}


            {/* Content */}
            {/* <div className="
              absolute
              inset-x-0
              bottom-0
              p-6
              sm:p-7
            ">
              <span className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-gold-300
              ">
                Third Eye Vision
              </span>

              <h3 className="
                mt-2
                font-script
                text-3xl
                leading-tight
                text-ivory
                sm:text-4xl
              ">
                Every Moment Counts
              </h3>
            </div> */}


            {/* Gold border animation */}
            <span className="
              absolute
              bottom-0
              left-0
              h-px
              w-0
              bg-gold-400
              transition-all
              duration-700
              group-hover:w-full
            " />

          {/* </motion.article> */}

        </div>

      </Container>
    </section>
  )
}