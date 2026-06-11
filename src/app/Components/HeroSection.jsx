"use client"

import React from 'react'
import { FaArrowRight,FaEye, FaBuilding,
  FaChartLine,FaUsers,FaMoneyBillWave  } from "react-icons/fa";
import Image from 'next/image'
import Animationhero from './Animation/Animationhero';


function HeroSection() {
  const revenuearray=[
    {
      id:1,
      icon:<FaBuilding/>,
      number:"2,000+",
      name:"Brands Powered"
    },
   {
      id:2,
      icon:<FaChartLine/>,
      number:"340%",
      name:"Average ROI Boost"
    },
    {
      id:3,
      icon:<FaUsers/>,
      number:"233k+",
      name:"Leads Generated"
    },
    {
      id:4,
      icon:<FaMoneyBillWave/>,
      number:"4 Cr+",
      name:"Client Revenue"
    },
  ]
  return (
    <>
    <section className='heroseccf'>
      
    <div className="container grid grid-cols-1 lg:grid-cols-2 mx-auto gap-6" id='herocseccontainer'>
    
    <div className='herocontentsec'>
    <h1 className='herotext'>Crafting <span className='glowtext'>Digital Success</span> Through  Every Project</h1>
    <div className='flex flex-col gap-2'>
    <p className='text-gray-300 contentwrdshero'>Every Project Tells a Story of How RankRaze Helps Businesses  Strengthen their Digital Presence and Achieve Sustainable Growth.</p>
    <p className='text-gray-300 contentwrds'>"Where Creativity, Technology & Strategy Come Together"</p>
    </div>
    <div className='herosecbtn'>
    <a className='getstartedbtn' href='#grow-contact'>Get Started <FaArrowRight/>
    </a>
    <a className='seeourwork' href='#see-our-work'>See Our Work <FaEye/></a>
    </div>
    </div>

    <div>
    <Animationhero/>
    </div>

    </div>

    <div className="container grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-10">
    
    {
      revenuearray.map((x,y)=>{
        return(
          <div className='blackbox flex flex-col gap-2  items-center' key={x.id}>
          <div className='herosecicon'>
          <span>{x.icon}</span>
          </div>
          <p>{x.number}</p>
          <h5>{x.name}</h5>
          </div>
        )
      })
    }

    </div>

    </section>
    </>
  )
}

export default HeroSection