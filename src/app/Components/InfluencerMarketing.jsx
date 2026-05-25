import React from 'react'
import Link from 'next/link'
import { GoArrowUpRight } from "react-icons/go";

function InfluencerMarketing() {
  return (
    <>
    <section id='influencermarkcf'>
    <div className="container" id='influencermarkcontainer'>

   <div className='' style={{display:"flex",justifyContent:"center"}}>
   <p className='agencydiv' style={{color:"white",fontSize:"smaller"}}>INFLUENCER MARKETING</p>
   </div>
    
    <div className='grid grid-cols-1 lg:grid-cols-2'>

    <div className="influencermarkcontent">
    <h1>We Connect Brands <br /> with <span className='action'>Voice That More Millions</span></h1>
    <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
    <p style={{fontSize:"15px",lineHeight:"25px"}} className='text-gray-300'>Rankraze delivers end-to-end influencer marketing campaigns designed to build brand awareness, engagement, and measurable business growth. We handle the entire process — from strategic planning and influencer discovery to content creation, campaign execution, and detailed performance tracking with ROI-focused reporting.</p>
    <p style={{fontSize:"15px",lineHeight:"25px"}} className='text-gray-300'>Our approach begins with understanding your brand goals and target audience. Based on this, we develop a tailored influencer strategy that aligns with your niche, budget, and campaign objectives.</p>
    </div>
    <Link href="https://rankraze.com/influencer-marketing" id='influencerbtn'>VIEW INFLUENCER SERVICES <GoArrowUpRight style={{fontSize:"18px"}}/></Link>
    </div>

    <div className='grid grid-cols-1 grid-cols-2'>

    

    </div>

    </div>

    </div>
    </section>
    </>
  )
}

export default InfluencerMarketing