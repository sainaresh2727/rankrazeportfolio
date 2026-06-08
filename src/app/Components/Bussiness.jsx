import React from 'react'
import {
  FaBriefcase,
  FaLightbulb,
  FaChartLine,
  FaAward,
  FaHandshake,
  FaSeedling
} from "react-icons/fa";
import cardimg from '../../../public/Images/Casestudies-Images/whybusinessimg.png'
import Image from 'next/image'

function Bussiness() {
  let business=[
    {
    id: 1,
    name: "Business Understanding",
    des: "Built around your goals and challenges.",
    icon: <FaBriefcase />
  },
  {
    id: 2,
    name: "Strategic Thinking",
    des: "Insightful solutions with clear direction.",
    icon: <FaLightbulb />
  },
  {
    id: 3,
    name: "Proven Expertise",
    des: "Experience backed by successful delivery.",
    icon: <FaChartLine />
  },
  {
    id: 4,
    name: "Excellence Quality",
    des: "Focused on precision and consistency.",
    icon: <FaAward />
  },
  {
    id: 5,
    name: "Trusted Collaboration",
    des: "Partnerships built on transparency and trust.",
    icon: <FaHandshake />
  },
  {
    id: 6,
    name: "Sustainable Growth",
    des: "Creating long-term value for businesses.",
    icon: <FaSeedling />
  }
  ]
  return (
   <>
   <section className='business-cf'>
   <div className="container" id='business-container'>
   
   <div className='text-center'>
   <p className='subheading'>WHY RANKRAZE</p>
   <div className="hrline"></div>
   </div>

   <div className='grid grid-cols-1 lg:grid-cols-2 gap-12' style={{marginTop:"18px"}}>
   
   <div className='flex flex-col gap-4 justify-center sm-padding-content'>
   <h2 className='text-4xl sm-text-center'>Why Businesses Choose Rankraze</h2>
   <p className='text-gray-400 contentwrds sm-text-center'>At RankRaze, every project begins with understanding our clients' goals and challenges. By combining industry expertise, creative thinking, and a results-driven approach, we deliver solutions that support business growth and create lasting value. Our commitment to quality, transparency, and client success has helped us build trusted relationships across a wide range of industres. </p>
   <div className='grid grid-cols-1 lg:grid-cols-2  gap-6 items-center' style={{marginTop:"15px"}}>
    {
        business.map((x,y)=>{
            return(
                <div key={x.id} className='business-card'>
                <div className="herosecicon">
                <span>{x.icon}</span>
                </div>
                <h6>{x.name}</h6>
                <p className='contentwrds text-gray-400'>{x.des}</p>
                </div>
            )
        })
    }
   </div>
   </div>
   
   <div className='business-img-card'>
   <Image src={cardimg} alt='business-img-card' className='card-img-bus' unoptimized/>
   </div>

   </div>

   </div>
   </section>
   </>
  )
}

export default Bussiness