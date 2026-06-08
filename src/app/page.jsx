import React from 'react'
import HeroSection from './Components/HeroSection'
import Clients from './Components/Clients'
import OurWork from './Components/OurWork'
import OurImpact from './Components/OurImpact'
import CaseStudies from './Components/CaseStudies'
import Bussiness from './Components/Bussiness'
import Ourservices from './Components/Ourservices'
import Grow from './Components/Grow'

function page() {
  return (
    <>
    <HeroSection/>
    <Clients/>
    <OurWork/>
    <OurImpact/>
    <CaseStudies/>
    <Bussiness/>
    <Ourservices/>
    <Grow/>
    </>
  )
}

export default page