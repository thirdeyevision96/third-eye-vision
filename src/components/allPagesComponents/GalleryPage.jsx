import Navbar from '../commonComponents/Navbar'
import Footer from '../commonComponents/Footer'
// import ComingSoonPage from '../commonComponents/ComingSoonPage'
import GalleryHero from '../galleryComponents/GalleryHero'
import GalleryGrid from '../galleryComponents/GalleryGrid'
import GalleryBottom from '../galleryComponents/GalleryBottom'
import CloudinaryTest from '../galleryComponents/CloudinaryTest'

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-ivory">
      <Navbar />

      <main>
        {/* <CloudinaryTest /> */}
        <GalleryHero />
        <GalleryGrid />
        <GalleryBottom />
        {/* <ComingSoonPage /> */}
      </main>

      <Footer />
    </div>
  )
}