"use client"

import React from "react";
import {
  FaCode,
  FaSearch,
  FaLaptopCode,
  FaBullseye,
  FaRobot,FaVrCardboard 
} from "react-icons/fa";

import { FaMobileScreenButton } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function Ourservices() {
  const servicesArray = [
    {
      id: 1,
      name: "Web Services",
      des: "We design and engineer robust, scalable web solutions that serve as the digital foundation of your business.",
      icon: <FaCode />,
      link:"https://rankraze.com/web-development-company-in-chennai"
    },
    {
      id: 2,
      name: "Digital Marketing",
      des: "We design and execute data-driven digital marketing strategies that accelerate brand growth, increase audience engagement.",
      icon: <FaSearch />,
      link:"https://rankraze.com/seo-company-chennai"
    },
    {
      id: 3,
      name: "Software Development",
      des: "We architect and deliver enterprise-grade software solutions that solve complex business challenges with precision and reliability.",
      icon: <FaLaptopCode />,
      link:"https://rankraze.com/software-development"
    },
    {
      id: 4,
      name: "Branding",
      des: "We craft cohesive brand identities that communicate your company's mission, values, and competitive differentiation with precision.",
      icon: <FaBullseye />,
      link:"https://rankraze.com/branding"
    },
    {
      id: 5,
      name: "Video Production",
      des: "We produce high-quality visual content that helps brands communicate their story with clarity, creativity, and impact.",
      icon: <FaMobileScreenButton />,
      link:"https://rankraze.com/video-marketing"
    },
    {
      id: 6,
      name: "AI & Services",
      des: "We deliver intelligent AI-powered solutions that help businesses automate operations and unlock new opportunities.",
      icon: <FaRobot />,
      link:"https://rankraze.com/ai-consulting"
    },
    {
      id: 7,
      name: "Extended Reality",
      des: "We create immersive Augmented Reality, Virtual Reality, and Mixed Reality experiences that transform Profittable businesses.",
      icon: <FaVrCardboard />,
      link:"https://rankraze.com/virtual-reality-development-chennai-india"
    },
  ];

  return (
    <section className="services-cf">
      <div className="container" id="services-container">
       <div className="text-center">
        <p className="subheading">OUR SERVICES</p>
        <div className="hrline"></div>
        </div>

      <div className="text-center flex flex-col gap-3 sm-padding-content">
          <h2 className="text-4xl">Services We Deliver</h2>
      <p className="text-gray-400 contentwrds"
        id="centercontent">
        Behind every successful project is a blend of strategy,
        creativity, and technical expertise.
        </p>
      </div>

      {/* <div className='grid grid-cols-1 lg:grid-cols-4 gap-10' style={{marginTop:"15px"}}>
      {
        servicesArray.map((x,y)=>{
          return (
            <div className="service-card" key={x.id}>
            <div className='herosecicon'>
            <span>{x.icon}</span>
            </div>
            <h6>{x.name}</h6>
            <p className='text-gray-400 contentwrds' style={{textAlign:"center"}}>{x.des}</p>
            <a href="" className="view-more-btn">VIEW MORE</a>
            </div>
          )
        })
      }
      </div> */}

      <div className="overflow-hidden" style={{marginTop:"20px"}}>
       <Swiper
  modules={[Autoplay]}
  slidesPerView={1}
  spaceBetween={24}
  loop={true}
  speed={3000}
  autoplay={{
    delay: 1200,
    disableOnInteraction: false,
  }}
  breakpoints={{
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  }}
>
  {servicesArray.map((x) => (
    <SwiperSlide key={x.id}>
      <div className="service-card">
        <div className="herosecicon">
          <span>{x.icon}</span>
        </div>
      <h6>{x.name}</h6>
    <p className="text-gray-400 contentwrds"
      style={{ textAlign: "center" }}>
      {x.des}
      </p>
    <a href={x.link} className="view-more-btn" target="_blank">
          VIEW MORE
    </a>
      </div>
    </SwiperSlide>
  ))}
    </Swiper>
      </div>
       
      </div>
    </section>
  );
}

export default Ourservices;