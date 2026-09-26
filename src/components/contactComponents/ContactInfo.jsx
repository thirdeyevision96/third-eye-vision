import { motion, useReducedMotion } from 'framer-motion'
import {
  Phone,
  MapPin,
  Mail,
  Instagram,
} from 'lucide-react'

import Container from '../commonComponents/Container'

const contactItems = [
  {
    icon: Phone,
    title: 'Call Us',
    content: (
      <>
        <p>Vivek Bhatia</p>
        <p>+91 7985584334</p>
        <p className="text-ivory/45">(WhatsApp Available)</p>
      </>
    ),
  },
  {
    icon: MapPin,
    title: 'Our Studio',
    content: (
      <>
        <p>1st Floor, above Sabji-wala &amp; Top n Town,</p>
        <p>Allahabad Bank Chowraha, Civil Lines,</p>
        <p>Jhansi - 284001</p>
      </>
    ),
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: <p>thirdeyevision96@gmail.com</p>,
  },
  {
    icon: Instagram,
    title: 'Follow Us',
    content: (
      <p>
        @thirdeyevision96 | @thirdeyevision_by_sunny
      </p>
    ),
  },
]

export default function ContactInfo() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: -25,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="lg:pt-3"
    >
      {/* Heading */}
      <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-gold-400">
        REACH OUT
      </p>

      <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.025em] text-ivory sm:text-5xl">
        Get In Touch
      </h2>

      <div className="mt-6 h-px w-10 bg-gold-500" />

      {/* Contact Items */}
      <div className="mt-9 space-y-7">
        {contactItems.map((item, index) => {
          const Icon = item.icon

          return (
            <motion.div
              key={item.title}
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
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group flex gap-4"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-500/70 text-gold-400 transition-all duration-300 group-hover:bg-gold-400 group-hover:text-charcoal-950">
                <Icon
                  size={20}
                  strokeWidth={1.4}
                />
              </div>

              {/* Content */}
              <div className="pt-1">
                <p className="text-xs font-semibold text-gold-400">
                  {item.title}
                </p>

                <div className="mt-1 text-sm leading-6 text-ivory/70">
                  {item.content}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Decorative Quote */}
      <div className="mt-12">
        <p className="font-script text-2xl leading-tight text-gold-300 sm:text-3xl">
          Your Story × Our Lens = Timeless Memories
        </p>

        <div className="mt-3 h-px w-64 bg-gradient-to-r from-gold-400 to-transparent" />
      </div>
    </motion.div>
  )
}