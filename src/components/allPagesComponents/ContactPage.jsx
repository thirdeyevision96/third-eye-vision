import Navbar from '../commonComponents/Navbar'
import Footer from '../commonComponents/Footer'
import ContactHero from '../contactComponents/ContactHero'
import ContactInfo from '../contactComponents/ContactInfo'
import ContactForm from '../contactComponents/ContactForm'
import ContactStudioLocation from '../contactComponents/ContactStudioLocation'


// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-charcoal-950 text-ivory">
//       <Navbar />

//       <main>
        
//       </main>

//       <Footer />
//     </div>
//   )
// }

// import ContactHero from '../components/ContactHero'
// import ContactInfo from '../components/ContactInfo'
// import ContactForm from '../components/ContactForm'
// import StudioLocation from '../components/StudioLocation'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-ivory">
      <Navbar />

      <main>
        <ContactHero />
        <section className="relative overflow-hidden bg-charcoal-950 py-16 sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-gold-500/[0.025] blur-3xl" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gold-500/[0.02] blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>

        <ContactStudioLocation />
      </main>

      <Footer />
    </div>
  )
}