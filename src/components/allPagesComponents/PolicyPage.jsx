import Navbar from '../commonComponents/Navbar'
import Footer from '../commonComponents/Footer'
import PolicyHero from '../policyComponents/PolicyHero'
import PolicyPayment from '../policyComponents/PolicyPayment'
import PolicyNote from '../policyComponents/PolicyNote'
import PolicyOverview from '../policyComponents/PolicyOverview'
import PolicyAgreementSection from '../policyComponents/PolicyAgreementSection'


export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-ivory">
      <Navbar />

      <main>
        <PolicyHero />
        <PolicyPayment />
        <PolicyNote />
        <PolicyOverview />
        <PolicyAgreementSection />
      </main>

      <Footer />
    </div>
  )
}