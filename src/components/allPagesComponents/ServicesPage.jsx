import ServicesHero from '../servicesComponents/ServicesHero';
import ServicesGrid from '../servicesComponents/ServicesGrid';
import ServicesBrandPromise from '../servicesComponents/ServicesBrandPromise';


import Navbar from '../commonComponents/Navbar'
import Footer from '../commonComponents/Footer'


export default function ServicesPage() {
  return (
    <>
        <div className="min-h-screen bg-charcoal-950">
            <Navbar />
            <main>
                <ServicesHero />
                <ServicesGrid />
                <ServicesBrandPromise />
            </main>
            <Footer />
        </div>
    </>
  );
}