import Navbar from '../commonComponents/Navbar'
import Footer from '../commonComponents/Footer'

import AboutHero from '../aboutComponents/AboutHero'
import AboutMore from "../aboutComponents/AboutMore"


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-ivory">
      <Navbar />

      <main>
        <AboutHero />
        <AboutMore />
        
      </main>

      <Footer />
    </div>
  )
}