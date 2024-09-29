import React from 'react'
import Navbar from 'src/components/landing-page/Navbar'
import '../index.css'
import HeroSection from 'src/components/landing-page/HeroSection'
import FeatureSection from 'src/components/landing-page/FeatureSection'
import Workflow from 'src/components/landing-page/Workflow'
import Testimonials from 'src/components/landing-page/Testimonials'
import Footer from 'src/components/landing-page/Footer'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
       <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default Home