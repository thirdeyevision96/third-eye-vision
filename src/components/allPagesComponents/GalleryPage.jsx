import Navbar from '../commonComponents/Navbar'
import Footer from '../commonComponents/Footer'
import ComingSoonPage from '../commonComponents/ComingSoonPage'

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-ivory">
      <Navbar />

      <main>
        <ComingSoonPage />
      </main>

      <Footer />
    </div>
  )
}