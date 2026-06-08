"use client";
import React, { useState } from 'react'
import client1img from '../../../public/Images/clientimg1.webp'
import client2img from '../../../public/Images/clientimg2.webp'
import client3img from '../../../public/Images/clientimg3.webp'
import client4img from '../../../public/Images/clientimg4.webp'
import client5img from '../../../public/Images/clientimg5.webp'
import client6img from '../../../public/Images/clientimg6.webp'
import client7img from '../../../public/Images/clientimg7.webp'
import client8img from '../../../public/Images/clientimg8.webp'
import client9img from '../../../public/Images/clientimg9.webp'
import client10img from '../../../public/Images/clientimg10.webp'
import client11img from '../../../public/Images/clientimg11.webp'
import client12img from '../../../public/Images/clientimg12.webp'
import client13img from '../../../public/Images/clientimg13.webp'
import client14img from '../../../public/Images/clientimg14.webp'
import client15img from '../../../public/Images/clientimg15.webp'
import client16img from '../../../public/Images/clientimg16.webp'
import client17img from '../../../public/Images/clientimg17.webp'
import client18img from '../../../public/Images/clientimg18.webp'
import client19img from '../../../public/Images/clientimg19.webp'
import client20img from '../../../public/Images/clientimg20.webp'
import client21img from '../../../public/Images/clientimg21.webp'
import client22img from '../../../public/Images/clientimg22.webp'
import client23img from '../../../public/Images/clientimg23.webp'
import client24img from '../../../public/Images/clientimg24.webp'
import client25img from '../../../public/Images/clientimg25.webp'
import client26img from '../../../public/Images/clientimg26.webp'
import client27img from '../../../public/Images/clientimg27.webp'
import client28img from '../../../public/Images/clientimg28.webp'

import Image from "next/image";
import { FaArrowRight} from "react-icons/fa";

function Clients() {
  let clientsArray=[
    {
        id:1,
        image:client1img,
        category:"HOSPITALS"
    },
    {
        id:2,
        image:client2img,
        category:"FINANCE"
    },
    {
        id:3,
        image:client3img,
        category:"EDUCATION"
    },
    {
        id:5,
        image:client5img,
        category:"INDUSTRIES"
    },
    {
        id:6,
        image:client6img,
        category:"AGRICULTURE"
    },
    {
        id:7,
        image:client7img,
        category:"agriculture"
    },
    {
        id:8,
        image:client8img,
        category:"agriculture"
    },{
        id:9,
        image:client9img,
        category:"agriculture"
    },{
        id:10,
        image:client10img,
        category:"agriculture"
    },
    {
        id:11,
        image:client11img,
        category:"agriculture"
    },
    {
        id:12,
        image:client12img,
        category:"agriculture"
    },
    {
        id:13,
        image:client13img,
        category:"agriculture"
    },
    {
        id:14,
        image:client14img,
        category:"agriculture"
    },
    {
        id:15,
        image:client15img,
        category:"agriculture"
    },
     {
        id:16,
        image:client16img,
        category:"agriculture"
    },
     {
        id:17,
        image:client17img,
        category:"agriculture"
    },
     {
        id:18,
        image:client18img,
        category:"agriculture"
    },
     {
        id:19,
        image:client19img,
        category:"agriculture"
    },
     {
        id:20,
        image:client20img,
        category:"agriculture"
    },
    {
        id:21,
        image:client21img,
        category:"agriculture"
    },
    {
        id:22,
        image:client22img,
        category:"agriculture"
    },
    {
        id:23,
        image:client23img,
        category:"agriculture"
    },
     {
        id:24,
        image:client24img,
        category:"agriculture"
    },
     {
        id:25,
        image:client25img,
        category:"agriculture"
    },
     {
        id:26,
        image:client26img,
        category:"agriculture"
    },
     {
        id:27,
        image:client27img,
        category:"agriculture"
    },
     {
        id:28,
        image:client28img,
        category:"agriculture"
    },
     
  ]

  

  const firstRow = clientsArray.slice(0, 14);
  const secondRow = clientsArray.slice(14, 28);
  let [activeCategory,setactiveCategory]=useState("ALL")

 return (
   <>
   <section className='clientscf'>
   
   <div className="container" id='clientscontainer'>

   <div className='text-center subheading'id=''>
   <p>OUR CLIENTS SUITCASE</p>
   <div className="hrline"></div>
   </div>

   <div className='text-center flex flex-col gap-2 sm-padding-content'>
   <h2 className='text-4xl'>Trusted by Brands Across Industries</h2>
   <p className='contentwrds text-gray-400'>From Fortune 500 Companies to Fast-growing Startups - Brands That Trust Rankraze to Grow.</p>
   </div>
  
   <div className="logos-wrapper">
  <div className="logos-track">

    {[...firstRow, ...firstRow].map((x, index) => (
      <div
        key={index}
        className="logo-card"
      >
        <Image
          src={x.image}
          alt="client"
          width={135}
          height={75}
          className="object-contain"
          unoptimized
        />
      </div>
    ))}

  </div>
   </div>

   <div className="logos-wrapper mt-6">
  <div className="logos-track-reverse">

    {[...secondRow, ...secondRow].map((x, index) => (
      <div
        key={index}
        className="logo-card">
    <Image src={x.image} alt="client" width={120} height={60} className="object-contain"
    unoptimized />
      </div>
    ))}

  </div>
   </div>

   <div className='text-center mt-10 sm-padding-content'>
   <p className='contentwrds text-gray-400 '>Your Business could be the Next Success Story Featured in our Portfolio, Joining a Growing <br/> list of Brands We’ve Helped Scale, Transform, and Succeed in the Digital Space.</p>
   </div>

   {/* <div className='flex justify-center' style={{marginTop:"5px"}}>
   <button className='getstartedbtn'>Let's Build Something Great <FaArrowRight/> </button>
   </div> */}

   </div>
   </section>
   </>
  )
}

export default Clients