import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Container from '../commonComponents/Container'

const galleryItems = [
  {
    title: 'Wedding Stories',
    image: '/assets/wedding-photography.jpg',
    alt: 'Indian wedding couple photographed in a cinematic setting',
  },
  {
    title: 'Cinematic Celebrations',
    image: '/assets/wedding-videography.jpg',
    alt: 'Wedding cinematography camera capturing a celebration',
  },
  {
    title: 'Pre-Wedding Moments',
    image: '/assets/pre-wedding.jpg',
    alt: 'Couple during a romantic pre-wedding photo session',
  },
  {
    title: 'Bridal Details',
    image: '/assets/makeup-studio.jpg',
    alt: 'Bride getting ready for her wedding day',
  },
  {
    title: 'Every Celebration',
    image: '/assets/other-events.jpg',
    alt: 'Elegant celebration captured by Third Eye Vision',
  },
]

function getVisibleCount(width) {
  if (width < 768) return 1
  if (width < 1100) return 2
  return 3
}

export default function Gallery() {
  const reduceMotion = useReducedMotion()
  const viewportRef = useRef(null)
  const [visibleCount, setVisibleCount] = useState(() =>
    typeof window === 'undefined' ? 3 : getVisibleCount(window.innerWidth),
  )
  const [cardWidth, setCardWidth] = useState(0)
  const [gap, setGap] = useState(16)
  const [index, setIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const maxIndex = Math.max(0, galleryItems.length - visibleCount)

  useEffect(() => {
    const updateVisibleCount = () => {
      const nextCount = getVisibleCount(window.innerWidth)
      setVisibleCount((current) => (current === nextCount ? current : nextCount))
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex))
  }, [maxIndex])

  useEffect(() => {
    const element = viewportRef.current
    if (!element) return undefined

    const measure = () => {
      const styles = window.getComputedStyle(element)
      const currentGap = parseFloat(styles.columnGap || styles.gap || '16') || 16
      const width = element.clientWidth
      setGap(currentGap)
      setCardWidth((width - currentGap * (visibleCount - 1)) / visibleCount)
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(element)
    return () => observer.disconnect()
  }, [visibleCount])

  const offset = index * (cardWidth + gap)

  const goTo = (nextIndex) => {
    const target = Math.max(0, Math.min(nextIndex, maxIndex))
    setIndex(target)
  }

  const next = () => setIndex((current) => (current >= maxIndex ? 0 : current + 1))
  const previous = () => setIndex((current) => (current <= 0 ? maxIndex : current - 1))

  return (
    <section id="gallery" className="relative overflow-hidden bg-charcoal-950 py-20 text-ivory sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/[0.025] blur-3xl" />
      </div>

      <Container className="relative">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-400">
              OUR WORK
            </p>
            <h2 className="font-editorial text-4xl leading-[0.95] text-ivory sm:text-5xl lg:text-6xl">
              Moments We&apos;ve Captured
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-ivory/60 sm:text-base">
              A glimpse of the love, laughter and celebrations we&apos;ve been a part of.
            </p>
          </motion.div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous gallery images"
              className="group grid h-11 w-11 place-items-center rounded-full border border-ivory/15 bg-ivory/[0.03] text-ivory transition hover:border-gold-400/60 hover:bg-gold-500/10 hover:text-gold-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/60"
            >
              <ArrowLeft size={17} strokeWidth={1.5} className="transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next gallery images"
              className="group grid h-11 w-11 place-items-center rounded-full border border-ivory/15 bg-ivory/[0.03] text-ivory transition hover:border-gold-400/60 hover:bg-gold-500/10 hover:text-gold-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/60"
            >
              <ArrowRight size={17} strokeWidth={1.5} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        <div
          ref={viewportRef}
          className="relative mt-10 overflow-hidden sm:mt-12"
          style={{ touchAction: 'pan-y' }}
        >
          <motion.div
            className="flex cursor-grab gap-4 active:cursor-grabbing"
            animate={{ x: -offset }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { type: 'spring', stiffness: 260, damping: 30, mass: 0.8 }
            }
            drag="x"
            dragConstraints={{ left: -(cardWidth + gap) * maxIndex, right: 0 }}
            dragElastic={0.08}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(_, info) => {
              setIsDragging(false)
              const threshold = Math.max(45, cardWidth * 0.18)
              if (info.offset.x < -threshold || info.velocity.x < -500) next()
              else if (info.offset.x > threshold || info.velocity.x > 500) previous()
            }}
          >
            {galleryItems.map((item, itemIndex) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: Math.min(itemIndex, 2) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative h-[52vh] min-h-[360px] max-h-[620px] shrink-0 overflow-hidden rounded-sm border border-ivory/10 bg-charcoal-900 sm:h-[460px] lg:h-[500px]"
                style={{ width: cardWidth ? `${cardWidth}px` : `calc((100% - ${(visibleCount - 1) * 16}px) / ${visibleCount})` }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  draggable="false"
                  className="h-full w-full select-none object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.055]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10 opacity-80 transition duration-700 group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.25em] text-gold-300/90">
                      Third Eye Vision
                    </span>
                    <h3 className="font-editorial text-xl text-white sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 text-white transition duration-500 group-hover:border-gold-300 group-hover:text-gold-300">
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <div className="mt-7 flex items-center justify-between gap-5">
          <div className="flex items-center gap-2" aria-label="Gallery pagination">
            {galleryItems.map((_, itemIndex) => {
              const active = itemIndex >= index && itemIndex < index + visibleCount
              return (
                <button
                  key={`dot-${itemIndex}`}
                  type="button"
                  onClick={() => goTo(Math.min(itemIndex, maxIndex))}
                  aria-label={`Show gallery image ${itemIndex + 1}`}
                  aria-current={active ? 'true' : undefined}
                  className="group flex h-5 items-center"
                >
                  <span
                    className={`h-px transition-all duration-500 ${
                      active ? 'w-8 bg-gold-400 sm:w-10' : 'w-4 bg-ivory/20 group-hover:w-6 group-hover:bg-ivory/45'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory/35">
            {String(index + 1).padStart(2, '0')} — {String(Math.min(index + visibleCount, galleryItems.length)).padStart(2, '0')} / {String(galleryItems.length).padStart(2, '0')}
          </span>
        </div>

        <p className={`mt-3 text-[10px] uppercase tracking-[0.16em] text-ivory/25 transition-opacity sm:hidden ${isDragging ? 'opacity-0' : 'opacity-100'}`}>
          Swipe to explore
        </p>
      </Container>
    </section>
  )
}
