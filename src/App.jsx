// import { useState } from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Preloader from "./components/commonComponents/Preloader";

import HomePage from "./components/allPagesComponents/HomePage";
import AboutPage from "./components/allPagesComponents/AboutPage";
import ServicesPage from "./components/allPagesComponents/ServicesPage";
import PolicyPage from './components/allPagesComponents/PolicyPage';
import DeliverablesPage from "./components/allPagesComponents/DeliverablesPage";
import GalleryPage from './components/allPagesComponents/GalleryPage';
import ContactPage from './components/allPagesComponents/ContactPage';
import OwnPackagePage from './components/allPagesComponents/OwnPackagePage';


function PageTransition() {
  const location = useLocation()

   // Scroll to the top whenever the page/route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -20,
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="min-h-screen"
      >
        <Routes location={location}>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/services"
            element={<ServicesPage />}
          />

          <Route
            path="/gallery"
            element={<GalleryPage />}
          />

          <Route
            path="/policy"
            element={<PolicyPage />}
          />

          <Route
            path="/deliverables"
            element={<DeliverablesPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

          <Route
            path="/ownpackage"
            element={<OwnPackagePage />}
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}


export default function App() {
  const [showPreloader, setShowPreloader] = useState(true)

  return (
    <BrowserRouter>

      {/* PRELOADER — runs only once */}
      <AnimatePresence>
        {showPreloader && (
          <Preloader
            onComplete={() => setShowPreloader(false)}
          />
        )}
      </AnimatePresence>

      {/* PAGE TRANSITIONS */}
      <PageTransition />

    </BrowserRouter>
  )
}