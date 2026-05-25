import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Clients from './Components/Clients'
import Ourservices from './Components/Ourservices'
import InfluencerMarketing from './Components/InfluencerMarketing'

function page() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Clients/>
    <Ourservices/>
    <InfluencerMarketing/>
    </>
  )
}

export default page