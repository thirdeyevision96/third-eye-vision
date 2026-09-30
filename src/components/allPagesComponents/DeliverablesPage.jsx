import Navbar from '../commonComponents/Navbar'
import Footer from '../commonComponents/Footer'

import DeliverablesHero from '../deliverablesComponents/DeliverablesHero'
import DeliverablesCard from '../deliverablesComponents/DeliverablesCard'
import DeliverablesExtra from '../deliverablesComponents/DeliverablesExtra'

export default function DeliverablesPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-ivory">
      <Navbar />

      <main>
        <DeliverablesHero />
        <DeliverablesCard />
        <DeliverablesExtra />
      </main>

      <Footer />
    </div>
  )
}