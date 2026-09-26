export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className={`mb-3 text-[10px] font-semibold uppercase tracking-editorial ${light ? 'text-gold-300' : 'text-gold-600'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-4xl leading-[0.98] sm:text-5xl lg:text-6xl ${light ? 'text-ivory-100' : 'text-charcoal-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-xl text-sm leading-7 ${light ? 'text-ivory-300/70' : 'text-charcoal-800/65'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
