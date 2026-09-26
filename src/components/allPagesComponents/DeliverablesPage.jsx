import Navbar from '../commonComponents/Navbar'
import Footer from '../commonComponents/Footer'

import TimelineHero from '../deliverablesComponents/DeliverablesHero'
import TimelineCard from '../deliverablesComponents/DeliverablesCard'
import TimelineExtra from '../deliverablesComponents/DeliverablesExtra'

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-ivory">
      <Navbar />

      <main>
        <TimelineHero />
        <TimelineCard />
        {/* <TimelineEarlyAccess /> */}
        <TimelineExtra />
        {/* <TimelineFourKQuality /> */}
        {/* <TimelineReEditPolicy /> */}



        {/* <DeliveryPolicyHero />

        <DeliveryTimeline />

        <section className="bg-charcoal-950">
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-2">
              <EarlyAccess />
              <FourKQuality />
            </div>
          </div>
        </section>

        <ReEditPolicy /> */}
      </main>

      <Footer />
    </div>
  )
}