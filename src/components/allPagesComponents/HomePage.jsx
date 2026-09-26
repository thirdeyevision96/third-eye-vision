// import Preloader from '../commonComponents/Preloader'
import Navbar from '../commonComponents/Navbar'
import Hero from '../homeComponents/HomeHero'
import Highlights from '../homeComponents/HomeHighlights'
import Services from '../homeComponents/HomeServices'
import OfferZone from '../homeComponents/HomeOfferZone'
import Gallery from '../homeComponents/HomeGallery'
import Testimonials from '../homeComponents/HomeTestimonials'
import Footer from '../commonComponents/Footer'

export default function HomePage() {
  return (
    <>
      {/* <Preloader /> */}

      <div className="min-h-screen bg-charcoal-950">
        <Navbar />

        <main>
          <Hero />
          <Highlights />
          <Services />
          <OfferZone />
          <Gallery />
          <Testimonials />
        </main>

        <Footer />
      </div>
    </>
  )
}