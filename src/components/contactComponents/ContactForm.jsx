import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Send, ChevronDown } from 'lucide-react'

export default function ContactForm() {
  const reduceMotion = useReducedMotion()

  const [service, setService] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = formData.get('name')?.trim()
    const phone = formData.get('phone')?.trim()
    const email = formData.get('email')?.trim()
    const message = formData.get('message')?.trim()

    // Get the selected values directly from FormData
    const selectedService = formData.get('service')
    const selectedDate = formData.get('date')

    const whatsappNumber = '917985584334'

    const whatsappMessage = `
*NEW WEBSITE ENQUIRY*
━━━━━━━━━━━━━━━━━━━━

*Client Details*
Name: ${name || 'Not provided'}
Phone: ${phone || 'Not provided'}
Email: ${email || 'Not provided'}

*Event Details*
Interested In: ${selectedService || 'Not selected'}
Preferred Date: ${selectedDate || 'Not provided'}

*Message*
${message || 'No message provided'}

━━━━━━━━━━━━━━━━━━━━
Sent from Third Eye Vision Website
`

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`

    // Open WhatsApp
    window.open(whatsappURL, '_blank')

    // Reset the complete form
    form.reset()

    // Reset React-controlled fields
    setService('')
    setDate('')
  }

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden rounded-xl border border-ivory/15 bg-[#0d1211] p-6 sm:p-7 lg:p-8"
    >
      {/* Top gold line */}
      <div className="absolute left-0 top-0 h-px w-24 bg-gold-400/70" />

      {/* Heading */}
      <div>
        <h2 className="font-display text-3xl leading-none tracking-[-0.02em] text-ivory sm:text-[2.15rem]">
          Send Us a Message
        </h2>

        <p className="mt-3 text-[12px] leading-5 text-ivory/50 sm:text-[13px]">
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-7">
        {/* Name + Phone */}
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            required
            className="contact-input"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            required
            className="contact-input"
          />
        </div>

        {/* Email */}
        <div className="mt-3">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="contact-input w-full"
          />
        </div>

        {/* Interested In */}
        <div className="relative mt-3">
          <select
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            className={`contact-input w-full cursor-pointer appearance-none pr-12 ${
              service ? 'text-ivory/70' : 'text-ivory/40'
            }`}
          >
            <option value="" disabled>
              Interested In *
            </option>

            <option value="Wedding Photography & Videography">
              Wedding Photography &amp; Videography
            </option>

            <option value="Cinematic Films">
              Cinematic Films
            </option>

            <option value="Wedding Planning">
              Wedding Planning
            </option>

            <option value="Makeup Studio">
              Makeup Studio
            </option>

            <option value="Drone Coverage">
              Drone Coverage
            </option>
          </select>

          <ChevronDown
            size={16}
            strokeWidth={1.3}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ivory/45"
          />
        </div>

        {/* Preferred Date */}
        {/* <div className="mt-3">
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            onClick={(e) => {
              e.currentTarget.showPicker?.()
            }}
            className="contact-input w-full cursor-pointer text-ivory/70"
          />
        </div> */}
        <div className="relative mt-3">
            <input
                type="text"
                name="date"
                placeholder="Preferred Date (Optional)"
                onFocus={(e) => {
                e.target.type = 'date'
                }}
                onBlur={(e) => {
                if (!e.target.value) {
                    e.target.type = 'text'
                }
                }}
                onChange={(e) => setDate(e.target.value)}
                onClick={(e) => {
                    e.currentTarget.showPicker?.()
                }}
                className="
                contact-input
                w-full
                cursor-pointer
                pr-4
                text-ivory/60
                "
            />
        </div>

        {/* Message */}
        <div className="mt-3">
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            className="contact-input min-h-[130px] w-full resize-none py-3.5"
          />

          <p className="mt-1.5 px-1 text-[10px] text-ivory/35">
            Tell us about your event, ideas or any questions...
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="group mt-5 flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-gold-400 px-6 text-[12px] font-semibold text-charcoal-950 transition-all duration-300 hover:bg-gold-300 hover:shadow-[0_10px_30px_rgba(214,175,92,0.15)] active:scale-[0.99]"
        >
          <Send
            size={15}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />

          <span>Send Message</span>
        </button>
      </form>
    </motion.div>
  )
}