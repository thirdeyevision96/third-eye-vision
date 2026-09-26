import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const variants = {
  gold: 'bg-gold-400 text-charcoal-950 hover:bg-gold-300',
  outline:
    'border border-gold-400/60 text-ivory-100 hover:border-gold-300 hover:bg-gold-400/10',
  dark: 'bg-charcoal-800 text-ivory-100 hover:bg-charcoal-700',
}

export default function Button({
  children,
  variant = 'gold',
  icon = true,
  className = '',
  href,
  ...props
}) {
  const isInternalRoute =
    href?.startsWith('/') && !href.startsWith('//')

  const Component = href
    ? isInternalRoute
      ? motion(Link)
      : motion.a
    : motion.button

  return (
    <Component
      {...(href
        ? { href: isInternalRoute ? undefined : href, to: isInternalRoute ? href : undefined }
        : { type: 'button' })}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>

      {icon && (
        <ArrowUpRight
          size={14}
          strokeWidth={1.7}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Component>
  )
}