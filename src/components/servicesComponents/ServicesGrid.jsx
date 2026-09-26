import { motion } from 'framer-motion'
import Container from '../commonComponents/Container'
import ServiceCard from './ServicesCard'
import { services } from '../../data/servicesData'

export default function ServiceGrid() {
  return (
    <section className="bg-charcoal-950 py-20 sm:py-24 lg:py-28">
      <Container>

        {/* SECTION HEADING */}
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
            What We Offer
          </p>

          <h2 className="mt-4 font-display text-4xl leading-none text-ivory sm:text-5xl lg:text-6xl">
            Our Services
          </h2>

          <div className="mx-auto mt-6 h-px w-12 bg-gold-500" />

          <p className="mt-6 text-sm leading-7 text-ivory/55 sm:text-base">
            Capturing · Creating · Telling Your Story
          </p>
        </motion.div>

        {/* SERVICE CARDS */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              {...service}
            />
          ))}
        </div>

      </Container>
    </section>
  )
}