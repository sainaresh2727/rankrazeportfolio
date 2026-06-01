"use client"

import React from 'react'
import { FaCode, FaPaintBrush, FaBullhorn,FaSearch,FaLaptopCode,FaBullseye,FaRobot   } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { FaMobileScreenButton } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay } from "swiper/modules";

import "swiper/css";


function Ourservices() {
  let servicesArray=[
    {
        id:1,
        name:"Web Services",
        des:"We design and engineer robust, scalable web solutions that serve as the digital foundation of your business. Our development practice spans the full stack — from architecting performant back-end systems. Every project is executed with a focus on security, maintainability, and long-term scalability, ensuring your platform evolves seamlessly.",
        icon:<FaCode />,
        link:"https://rankraze.com/web-development"
        
    },
    {
        id:2,
        name:"Digital Marketing",
        des:"We design and execute data-driven digital marketing strategies that accelerate brand growth, increase audience engagement, and deliver measurable business results. Our marketing specialists combine creativity, analytics, and performance optimization to craft campaigns that connect with the right audience across every digital channel.",
        icon:<FaSearch />,
        link:"https://rankraze.com/seo-company-chennai"
    },
    {
        id:3,
        name:"Software Development",
        des:"We architect and deliver enterprise-grade software solutions that solve complex business challenges with precision and reliability. Our engineering teams operate across the full development lifecycle — from requirements gathering and system design through to development, rigorous QA testing, deployment, and ongoing maintenance, solve complex business challenges.",
        icon:<FaLaptopCode/>,
        link:"https://rankraze.com/software-development"

    },
    {
        id:4,
        name:"Branding",
        des:"We craft cohesive brand identities that communicate your company's mission, values, and competitive differentiation with precision and clarity. Our branding engagements encompass strategic positioning, visual identity design, and comprehensive brand guidelines — equipping your team with a system that scales consistently across every customer touchpoint.",
        icon:<FaBullseye/>,
        link:"https://rankraze.com/branding"
    },
    {
        id:5,
        name:"Video Production",
        des:"We produce high-quality visual content that helps brands communicate their story with clarity, creativity, and impact. From concept development and script planning to filming, editing, motion graphics, and final delivery, our production team creates engaging videos designed to capture attention and strengthen brand presence across digital platforms.",
       icon:<FaMobileScreenButton />,
       link:"https://rankraze.com/video-production-services"
    },
     {
        id:6,
        name:"Ai & Services",
        des:"We deliver intelligent AI-powered solutions that help businesses automate operations, enhance decision-making, and unlock new opportunities through advanced technologies. Our expertise spans artificial intelligence consulting, machine learning, computer vision, natural language processing, and custom AI system development tailored to modern business challenges.",
        icon:<FaRobot  />,
        link:"https://rankraze.com/ai-consulting"
    },
  ]
  return (
   <>
   <section style={{paddingTop:"45px",paddingBottom:"45px"}}>
   <div className="container" id='servicecontainer'>
   
   <div style={{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center"}}>
   <p className='headingbg' style={{color:"white"}}>OUR SERVICES</p>
   <h1 className='servicesheading'>Elevate Your Vision <br /> with<span className='action'> Our Expert </span> Services</h1>
   </div>

  

   <Swiper  slidesPerView={3} spaceBetween={30}
     autoplay={{delay: 1500,
    disableOnInteraction: false,}} loop={true}
    modules={[Autoplay]} breakpoints={{
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  }} 
    style={{marginTop:"20px"}}>

    {
        servicesArray.map((x,y)=>{
            return(
            <SwiperSlide>
            <div className='servicecard h-100' key={x.id}>
            <div className="iconbox">
            <span>{x.icon}</span>
            </div>
            <h2 className='servicename'>{x.name}</h2>
            <p className='text-gray-200'>{x.des}</p>
            <a className='learnmorebtn' target='_blank' href={x.link}>Learn More <GoArrowUpRight style={{fontSize:"18px"}}/></a>
            </div>
            </SwiperSlide>
            )
        })
    }
   
   </Swiper>


   </div>
   </section>
   </>

  )
}

export default Ourservices