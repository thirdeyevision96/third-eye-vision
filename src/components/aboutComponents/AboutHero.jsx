import { motion, useReducedMotion } from 'framer-motion'
import Container from '../commonComponents/Container'

import AboutImage from '../../assets/tev-about.jpeg'

export default function AboutHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-charcoal-950">
      {/* =========================
          BACKGROUND GLOW
      ========================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-gold-500/[0.035] blur-3xl" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-gold-500/[0.025] blur-3xl" />
      </div>


      <Container className="relative z-10 pt-24 sm:pt-28 lg:pt-32">

        {/* =========================
            HERO GRID
        ========================== */}
        <div className="grid min-h-[calc(100vh-80px)] items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-0">

          {/* =================================
              LEFT CONTENT
          ================================= */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-20
              py-10
              lg:py-16
              lg:pr-10
              xl:pr-16
            "
          >

            {/* Eyebrow */}
            <div className="flex items-center gap-5">
              <p className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-gold-400
              ">
                About Me
              </p>

              <span className="h-px w-20 bg-gold-500/60" />
            </div>


            {/* Main Heading */}
            <h1 className="
              mt-7
              font-display
              text-5xl
              leading-[0.92]
              tracking-[-0.035em]
              text-ivory
              sm:text-6xl
              lg:text-6xl
              xl:text-7xl
            ">
              Hi, I&apos;m
              <br />

              <span className="
                mt-1
                block
                font-script
                text-[1.15em]
                leading-[0.95]
                tracking-normal
                text-gold-300
              ">
                Vivek Bhatia
              </span>
            </h1>


            {/* Role */}
            <div className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-ivory/75
              sm:text-[10px]
            ">
              <span>Founder</span>
              <span className="text-gold-500">|</span>
              <span>Photographer</span>
              <span className="text-gold-500">|</span>
              <span>Storyteller</span>
            </div>


            {/* Gold divider */}
            <div className="mt-7 h-px w-14 bg-gold-500/70" />


            {/* First Paragraph */}
            <p className="
              mt-7
              max-w-xl
              text-sm
              leading-7
              text-ivory/65
              sm:text-[15px]
              sm:leading-7
            ">
              Vivek Bhatia&apos;s{' '}
              <span className="text-gold-300">
                THIRD EYE VISION
              </span>{' '}
              crafts each service with an artist&apos;s touch and a
              professional&apos;s precision. The fusion of passion,
              skill, and attention to detail ensures that every moment
              is immortalized in its true essence.
              With{' '}
              <span className="text-gold-300">
                THIRD EYE VISION
              </span>
              , your events transform into enduring memories that
              stand the test of time.
            </p>


            {/* Second Paragraph */}
            <p className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-ivory/65
              sm:text-[15px]
              sm:leading-7
            ">
              Our approach is a fusion of professionalism and
              personalized touch. His commitment to understanding
              the unique essence of each event ensures that
              clients&apos; visions are not only realized but
              surpassed.{' '} 
              <span className="text-gold-300">
                THIRD EYE VISION
              </span>{' '}
              isn&apos;t just a photography service, it&apos;s a
              bespoke experience tailored to immortalize life&apos;s
              most precious moments.
            </p>


            {/* Signature */}
            <div className="mt-9">
              <p className="
                font-script
                text-3xl
                leading-none
                text-gold-300
                sm:text-4xl
              ">
                Vivek Bhatia
              </p>

              <span className="
                mt-3
                block
                h-px
                w-32
                bg-gold-400
              " />
            </div>

          </motion.div>


          {/* =================================
              RIGHT IMAGE
          ================================= */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-h-[520px]
              overflow-hidden
              lg:min-h-[760px]
            "
          >

            {/* Image */}
            <img
              src={AboutImage}              
              alt="Vivek Bhatia - Founder of Third Eye Vision"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
            />


            {/* Left cinematic blend */}
            <div className="
              absolute
              inset-0
              bg-gradient-to-r
              from-charcoal-950
              via-charcoal-950/10
              to-transparent
              lg:from-charcoal-950
              lg:via-charcoal-950/20
              lg:to-transparent
            " />


            {/* Bottom blend */}
            <div className="
              absolute
              inset-x-0
              bottom-0
              h-48
              bg-gradient-to-t
              from-charcoal-950
              to-transparent
            " />


            {/* Top blend */}
            <div className="
              absolute
              inset-x-0
              top-0
              h-32
              bg-gradient-to-b
              from-charcoal-950/40
              to-transparent
            " />


            {/* Gold frame */}
            <div className="
              pointer-events-none
              absolute
              inset-5
              border
              border-gold-400/20
              sm:inset-7
            " />


            {/* Small image label */}
            <div className="
              absolute
              bottom-9
              right-8
              hidden
              items-center
              gap-3
              sm:flex
            ">
              <span className="h-px w-8 bg-gold-400/70" />

              <span className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-ivory/60
              ">
                Third Eye Vision
              </span>
            </div>

          </motion.div>

        </div>

      </Container>


      {/* Bottom divider */}
      <div className="
        h-px
        w-full
        bg-gradient-to-r
        from-transparent
        via-gold-500/30
        to-transparent
      " />
    </section>
  )
}