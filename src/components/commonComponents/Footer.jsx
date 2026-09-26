import { motion } from 'framer-motion'
import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import Container from './Container'
import Logo from '../../assets/tev-logo2.png'

const footerLinks = [
  { label: 'Instagram', href: '#instagram', icon: Instagram },
  { label: 'Facebook', href: '#facebook', icon: Facebook },
  { label: 'YouTube', href: '#youtube', icon: Youtube },
  { label: 'WhatsApp', href: '#whatsapp', icon: Phone },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080b0a] text-ivory">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-16"
        >
          <motion.div variants={reveal}>
            <a href="#top" className="group inline-block" aria-label="Third Eye Vision home">
              {/* <span className="block font-editorial text-3xl uppercase tracking-[0.12em] text-ivory sm:text-4xl">
                Third Eye Vision
              </span>
              <span className="mt-2 block text-[8px] font-semibold uppercase tracking-[0.3em] text-gold sm:text-[9px]">
                Wedding Planning | Photography | Filmmaking
              </span> */}

              <img
                src={Logo}
                alt="Third Eye Vision"
                className="h-auto w-[200px] object-contain sm:w-[200px]"
              />
            </a>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
              Turning fleeting celebrations into timeless photographs, films and stories that feel as beautiful years from now as they did on the day.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory transition-colors hover:text-gold"
            >
              Start Your Story
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div variants={reveal}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">Get In Touch</p>

            <div className="mt-6 space-y-5">
              <a href="tel:+910000000000" className="group flex items-start gap-4 text-sm text-white/65 transition-colors hover:text-ivory">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-gold transition-colors group-hover:border-gold/50">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/35">Phone</span>
                  <span className="mt-1 block">+91 79855 84334</span>
                </span>
              </a>

              <a href="mailto:hello@thirdeyevision.in" className="group flex items-start gap-4 text-sm text-white/65 transition-colors hover:text-ivory">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-gold transition-colors group-hover:border-gold/50">
                  <Mail className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/35">Email</span>
                  <span className="mt-1 block break-all">thirdeyevision96@gmail.com</span>
                </span>
              </a>

              <a href="#location" className="group flex items-start gap-4 text-sm text-white/65 transition-colors hover:text-ivory">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-gold transition-colors group-hover:border-gold/50">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/35">Studio</span>
                  <span className="mt-1 block leading-6">1st Floor , Above Sabji Wala & Top n Town , Allahabad Bank Chowraha , Civil Line, Jhansi, India</span>
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div variants={reveal}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">Follow Our Work</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {footerLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group flex items-center gap-3 border border-white/10 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55 transition-all hover:border-gold/40 hover:bg-white/[0.03] hover:text-ivory"
                >
                  <Icon className="h-4 w-4 text-gold" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-4 text-[9px] uppercase tracking-[0.16em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2025 Third Eye Vision. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a href="#privacy" className="transition-colors hover:text-gold">Privacy Policy</a>
              <span className="h-3 w-px bg-white/15" />
              <a href="#terms" className="transition-colors hover:text-gold">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
