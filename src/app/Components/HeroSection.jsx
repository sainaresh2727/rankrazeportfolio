"use client"

import React from 'react'
import herosecBg from '../../../public/Images/herosectionbg.png'
import slider1 from '../../../public/Images/sliderimg1.png'
import slider2 from '../../../public/Images/sliderimg2.png'
import slider3 from '../../../public/Images/sliderimg3.png'
import slider4 from '../../../public/Images/sliderimg4.png'
import { FaRocket, FaChartLine } from "react-icons/fa";
import { HiMiniCursorArrowRays } from "react-icons/hi2";
import { RiMoneyDollarCircleFill } from "react-icons/ri";


import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

function HeroSection() {
  const sliderImages=[
    slider1,slider2,slider3,slider4
  ]
  return (
    <>
    <section className='herosecCF'>
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6" id='herosectioncontainer'>

    
    {/* CONTENT */}
    <div style={{display:"flex",flexDirection:"column",gap:"18px",padding:"20px"}}>
    
    <div className='agencydiv'>
    <p>AGENCY PORTFOLIO : 2025-2026</p>
    </div>
    <h1 className='rankrazeheroheading'>
      Crafting <span className='action'>Digital Success</span>Through <br/> Every Project
    </h1>
    <p className='creativity'>
     " Where Creativity, Technology & <br /> Strategy  Come Together "
    </p>

     <div id='contentherosec'>
      <p className='text-gray-300'>
      Every project tells a story of how RankRaze helps businesses strengthen their digital presence and achieve sustainable growth. 
      </p>
    </div>

    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
    <div className='brandcounts'> 
     <FaRocket className='text-4xl text-white' />
    <p className='totalvalue'>2,000+</p>
    <p className='text-gray-500 brandsubheading'>BRANDS POWERED</p>
    </div>
    <div className='brandcounts'> 
     <FaChartLine className='text-4xl text-white' />
    <p className='totalvalue'>340%</p>
    <p className='text-gray-500 brandsubheading'>AVG ROI BOOST</p>
    </div>
    <div className='brandcounts'> 
    <HiMiniCursorArrowRays className='text-4xl text-white' />
    <p className='totalvalue'>233K++</p>
    <p className='text-gray-500 brandsubheading'>LEADS GENERATED</p>
    </div>
    <div className='brandcounts'> 
     <RiMoneyDollarCircleFill className='text-4xl text-white' />
    <p className='totalvalue'>$ 10 Cr+</p>
    <p className='text-gray-500 brandsubheading'>CLIENT REVENUE</p>
    </div>
    </div>
    
    </div>

   
    {/* IMAGE SLIDER */}
    <div>
     <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
           id='swiperslide' >

              {sliderImages.map((item, index) => (

                <SwiperSlide key={index} id='sliderimageparent'>

                  <Image
                    src={item}
                    alt='sliderimages'
                    className=''
                    priority
              unoptimized  id='sliderimage'/>

                </SwiperSlide>

              ))}

            </Swiper>

    </div>

    </div>
    </section>
    </>
  )
}

export default HeroSection