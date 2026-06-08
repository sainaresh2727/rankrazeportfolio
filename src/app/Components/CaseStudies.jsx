"use client"

import React from 'react'
import Image from 'next/image'
import ttgrpimg from '../../../public/Images/Casestudies-Images/ttgrpImg.avif'
import irqsimg from '../../../public/Images/Casestudies-Images/irqsImg.avif'
import escimg from '../../../public/Images/Casestudies-Images/escImg.avif'
import Link from 'next/link'
import { FaArrowRight} from "react-icons/fa";
import clearoneimg from '../../../public/Images/Casestudies-Images/clearoneImg.avif'
import irclass from '../../../public/Images/Casestudies-Images/irclassImg.avif'
import ilyflour from '../../../public/Images/Casestudies-Images/ilyflourImg.avif'

function CaseStudies() {
  
  let casestudiesArray=[
    {
        id:1,
        name:"TT Group",
        category:"Logistics",
        keypoints:["300+ High-Quality Leads Every Month","$2.6Cr Revenue Within 6 Months","Positioned TT Group as a Leading General Agent"],
       revenue:"2.6Cr+",
       adspend:"2.5L",
       Roas:"10x+",
       img:ttgrpimg,
       link:"https://rankraze.com/tt-group"
    },
    {
        id:2,
        name:"IRQS",
        category:"ISO Certification",
        keypoints:["1000+ qualified leads within 10 days"," website to improve UX, traffic & conversions","₹1Cr+ revenue through PPC campaigns"],
       revenue:"1.Cr+",
       adspend:"Campaign",
       Roas:"ROI",
       img:irqsimg,
       link:"https://rankraze.com/irclass-case-study"
    },
    {
        id:3,
        name:"Europe Study Centre",
        category:"Education",
        keypoints:["4Cr+ revenue in 18 months","21,000+ student & parent leads","Scaled Chennai branch successfully"],
        revenue:"4Cr+",
        adspend:"16.81L",
        Roas:"24x",
        img:escimg,
        link:"https://rankraze.com/europe-study-centre"
    },
    {
        id:4,
        name:"ClearOne",
        category:"Conferencing",
        keypoints:["58.6% through social media campaigns"," Improved CTR from 0.208% to 0.221%","Increased direct website visitors by 39.37%"],
        revenue:"2.6Cr+",
        adspend:"Budget",
        Roas:"ROI",
        img:clearoneimg,
        link:"https://rankraze.com/clearone"
    },
    {
        id:5,
        name:"IRClass",
        category:"Training Services",
        keypoints:["8,064 total leads within 3 months","23 keywords in Top 10 SERPs"," 1.02Cr through digital campaigns"],
        revenue:"1.02Cr+",
        adspend:"14.6L",
        Roas:"ROI",
        img:irclass,
        link:"https://rankraze.com/irclass-case-study"
    },
    {
        id:6,
        name:"ILY Flour",
        category:"Food & FMCG",
        keypoints:[" 3000+ app installations within one month"," 2,00,000 views through bilingual video ads"," Retargeted potential customers to drive repeat engagement"],
        AppInstalled:"3k/m",
        VideoViews:"2M+",
        Reach:"Aware",
        img:ilyflour,
        link:"https://rankraze.com/ily"
    },
    ]
 
  return (
    <>
    <section className='casestudies-cf'>
    <div className="container" id='casestudies-container'>
    
    <div className='text-center'>
    <p className='subheading'>OUR CASESTUDIES</p>
    <div className="hrline"></div>
    </div>

    <div className='flex flex-col gap-2 items-center sm-padding-content'>
    <h2 className='text-4xl text-center'>Featured Case Studies</h2>
    <p className='text-gray-400 contentwrds sm-text-center text-center'>Explore How Thouhtful Strategies and Effective Solutions Helped Our Clients Overcome Challenges, <br/> Unlock New Opportunities, and Achieve Lasting Business Success.</p>
    </div>

    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8' style={{marginTop:"25px"}}>

    {
        casestudiesArray.map((x,y)=>{
            return(
                <div className='casestudy-card' key={x.id}>
                
                <div className='case-study-cover-image'>
                <Image className='case-stu-cimage' src={x.img} alt='casestudy-cover-image' unoptimized/>
                </div>

                {/* Card-body Div */}
                <div className='casestudies-card-body'>
                {/* Heading Div */}
                <div className='flex justify-between items-center'>
                <h2>{x.name}</h2>
                <div className="cs-category">
                <p>{x.category}</p>
                </div>
                </div>

                {/* Revenue Div */}
                <div className='grid grid-cols-3 justify-center revenue-parent'>
                <div className='incomediv'>
                <h2>{x.AppInstalled ? x.AppInstalled :x.revenue}</h2>
                <p>{ x.AppInstalled ? "APP INSTALLED" : "REVENUE"}</p>
                </div>
                <div className='incomediv'>
                <h2>{x.VideoViews ? x.VideoViews:x.adspend}</h2>
                <p>{x.VideoViews ? "VIDEOVIEWS" : "ADSPEND"}</p>
                </div>
                <div className='incomediv'>
                <h2>{x.Reach ? x.Reach : x.Roas}</h2>
                <p>{x.Reach ? "REACH" : "ROAS"}</p>
                </div>
                </div>

                {/* Keypoints Div */}
                <div className='flex flex-col gap-2' style={{marginTop:"12px",paddingLeft:"5px"}}>
                {x.keypoints.map((a,b)=>{
                    return(
                 <div key={b}>
                <p className='text-gray-400' style={{fontSize:"14px"}}> ✔ {a}</p>
                 </div>
                    )
                })}
                </div>

                {/* Buttons Div */}
                <div className='flex justify-between items-center' style={{marginTop:"12px"}}>
                <a href={x.link} className='view-case-study-btn'target='_blank'>View Full Case Study <FaArrowRight/></a>
                <a className='getresult-btn' href='#grow-contact'>Get Results</a>
                </div>

            </div>
            </div>
            )
        })
    }

    </div>

    </div>
    </section>
    </>
  )
}

export default CaseStudies