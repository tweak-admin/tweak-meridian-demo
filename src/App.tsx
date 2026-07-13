import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeatureGrid } from './components/FeatureGrid'
import { Dashboard } from './components/Dashboard'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <Dashboard />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
