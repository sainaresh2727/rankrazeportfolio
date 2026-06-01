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
import { Swiper, SwiperSlide } from "swiper/react";

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

  //FILTERING CATEGORY
  
  let filterCategory=activeCategory==="ALL"
  ?
  clientsArray :
  clientsArray.filter((x,y)=>{
    return x.category===activeCategory
  })

  return (
   <>
   <section className='clientscf'>
   <div className="container" id='clientscontainer'>
   
   <div className='' style={{display:"flex",justifyContent:"center"}}>
   <p className='agencydiv' style={{color:"white",fontSize:"smaller"}}>OUR CLIENTS SHOWCASE</p>
   </div>

  <div className='brandcontsnt'>
  <h1>Trusted By <span className='action'>2,100 Brands</span> Across <br /> India & Beyond</h1>
  <p className='text-gray-300' style={{textAlign:"center"}}>From Fortune 500 Companies to Fast-growing Startups - Brands That Trust Rankraze to Grow.</p>
  </div>

  {/* CLIENTS IMAGE SLIDER */}
  <div style={{marginTop:"px"}}>
  
  {/* first marquee */}
 <div className="overflow-hidden w-full py-6">
  <div className="flex items-center gap-8 marquee">

{[...firstRow, ...firstRow].map((x, y) => (
<div  key={y} className="min-w-[180px] h-[110px] rounded-[28px] flex items-center justify-center relative overflow-hidden marqueeparent">
<Image src={x.image} alt="client" width={120}
height={60} className="object-contain" unoptimized/>
</div>))}

  </div>
</div>

{/* second marquee */}
<div className="overflow-hidden w-full py-6">
<div className="flex items-center gap-8 marquee2">

{[...secondRow, ...secondRow].map((x, y) => (
<div key={y} className="min-w-[185px] h-[110px]
rounded-[28px] flex items-center justify-center
relative overflow-hidden marqueeparent">
<Image src={x.image} alt="client" width={120} height={60} className="object-contain" unoptimized/>
</div>
    ))}

  </div>
</div>

  </div>

  <div>
  <p className='text-gray-300' style={{textAlign:"center"}}>Your business could be the next success story in our portfolio. </p>
  <button></button>
  </div>

  {/* CATEGORY SECTION */}
   {/* <div className='' style={{display:"flex",flexDirection:"column",gap:"8px"}}>
   <div style={{textAlign:"center"}}>
    <p className='brandcontentline'>Explore Brand Partners Across Multiple Industries:</p>
   </div>
   <div className='clientlogocategoryparent'>
  
  <div className={`${activeCategory==="ALL"?"iconcategoryactive":"iconcategory"}`} onClick={()=>setactiveCategory("ALL")}>
  <p>ALL</p>
  </div>

  <div className={`${activeCategory==="HOSPITALS"?"iconcategoryactive":"iconcategory"}`} onClick={()=>setactiveCategory("HOSPITALS")}>
  <p>HOSPITALS</p>
  </div>

  <div className={`${activeCategory==="INDUSTRIES"?"iconcategoryactive":"iconcategory"}`} onClick={()=>setactiveCategory("INDUSTRIES")}>
  <p>INDUSTRIES</p>
  </div>

  <div className={`${activeCategory==="E-COMMMERCE"?"iconcategoryactive":"iconcategory"}`} onClick={()=>setactiveCategory("E-COMMMERCE")}>
  <p>E-COMMERCE</p>
  </div>

  <div className={`${activeCategory==="RESTAURANTS"?"iconcategoryactive":"iconcategory"}`} onClick={()=>setactiveCategory("RESTAURANTS")}>
  <p>RESTAURANTS</p>
  </div>

  <div className={`${activeCategory==="TRANSPORT"?"iconcategoryactive":"iconcategory"}`} onClick={()=>setactiveCategory("TRANSPORT")}>
  <p>TRANSPORT</p>
  </div>

  <div className={`${activeCategory==="TRANSPORT"?"iconcategoryactive":"iconcategory"}`} onClick={()=>setactiveCategory("TRANSPORT")}>
  <p>TRANSPORT</p>
  </div>

  <div className={`${activeCategory==="TRANSPORT"?"iconcategoryactive":"iconcategory"}`} onClick={()=>setactiveCategory("TRANSPORT")}>
  <p>TRANSPORT</p>
  </div>

  <div className={`${activeCategory==="TRANSPORT"?"iconcategoryactive":"iconcategory"}`} onClick={()=>setactiveCategory("TRANSPORT")}>
  <p>TRANSPORT</p>
  </div>

  <div className={`${activeCategory==="TRANSPORT"?"iconcategoryactive":"iconcategory"}`} onClick={()=>setactiveCategory("TRANSPORT")}>
  <p>TRANSPORT</p>
  </div>

   </div>

    <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
    {
        filterCategory.map((x,y)=>{
            return(
        <div key={x.id} className='min-w-[170px] h-[150px] rounded-[28px clientlogoparent'>
        <Image src={x.image} alt='clientslogo' width={130} height={80} className="" unoptimized/>
       </div>
            )
        })
    }
    </div>

   </div> */}


   </div>
   </section>
   </>
  )
}

export default Clients