import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ServiceCard({
  number,
  title,
  price,
  image,
  icon: Icon,
  description,
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        overflow-hidden
        border
        border-gold-500/25
        bg-ivory-100
        text-charcoal-900
        text-center
        transition-all
        duration-500
        hover:border-gold-500/70
      "
    >

      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-1000
            ease-out
            group-hover:scale-[1.06]
          "
        />

        {/* Image overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/45
            via-black/5
            to-transparent
          "
        />

      </div>


      {/* CONTENT */}
      <div className="relative px-6 pb-9 pt-8 sm:px-7">

        {/* ICON */}
        <div
          className="
            relative
            z-10
            mx-auto
            -mt-14
            mb-6
            grid
            h-14
            w-14
            place-items-center
            rounded-full
            border
            border-gold-500
            bg-charcoal-950
            text-gold-400
            shadow-lg
            transition-transform
            duration-500
            group-hover:scale-110
          "
        >
          {Icon && (
            <Icon
              size={20}
              strokeWidth={1.5}
            />
          )}
        </div>


        {/* NUMBER */}
        {/* <span
          className="
            block
            font-display
            text-xs
            italic
            text-charcoal-900/35
          "
        >
          {number}
        </span> */}


        {/* TITLE */}
        <h3
          className="
            mx-auto
            mt-3
            max-w-[260px]
            font-display
            text-xl
            leading-tight
            text-charcoal-950
            sm:text-[1.35rem]
          "
        >
          {title}
        </h3>


        {/* PRICE */}
        <div
          className="
            mx-auto
            mt-5
            inline-flex
            items-center
            rounded-full
            bg-gold-400
            px-4
            py-2
            text-xs
            leading-none
            text-ivory-100
            font-semibold
            tracking-[1px]
          "
        >
          <span>{price}</span>

          <span className="ml-1 text-ivory/50">
            / Function
          </span>
        </div>


        {/* DESCRIPTION */}
        <p
          className="
            mx-auto
            mt-5
            max-w-[290px]
            text-sm
            leading-6
            text-charcoal-800/65
          "
        >
          {description}
        </p>


        {/* EXPLORE MORE */}
        <a
          href="#contact"
          className="
            group/explore
            mx-auto
            mt-6
            inline-flex
            items-center
            justify-center
            gap-2
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-charcoal-900
            transition-colors
            duration-300
            hover:text-gold-600
          "
        >
          <span>Explore More</span>

          <ArrowUpRight
            size={14}
            strokeWidth={1.5}
            className="
              shrink-0
              transition-transform
              duration-300
              group-hover/explore:translate-x-0.5
              group-hover/explore:-translate-y-0.5
            "
          />
        </a>

      </div>


      {/* GOLDEN BOTTOM LINE */}
      <span
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-20
          h-[2px]
          w-0
          bg-gold-500
          transition-all
          duration-700
          ease-out
          group-hover:w-full
        "
      />

    </motion.article>
  )
}