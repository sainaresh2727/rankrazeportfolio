import React from 'react'
import {
  FaUsers,
  FaProjectDiagram,
  FaChartLine,
  FaAward,
} from "react-icons/fa";

function OurWork() {
  const workResults = [
  {
    id: 1,
    icon: <FaUsers />,
    number: "200+",
    title: "Happy Clients",
    description:
      "Successfully partnered with businesses across multiple industries to achieve measurable growth.",
  },
  {
    id: 2,
    icon: <FaProjectDiagram />,
    number: "500+",
    title: "Projects Delivered",
    description:
      "Completed high-quality web, software, and digital marketing projects with proven results.",
  },
  {
    id: 3,
    icon: <FaChartLine />,
    number: "350%",
    title: "Growth Achieved",
    description:
      "Helped brands improve visibility, engagement, and revenue through data-driven strategies.",
  },
  {
    id: 4,
    icon: <FaAward />,
    number: "98%",
    title: "Client Retention",
    description:
      "Built long-term relationships through consistent performance, transparency, and trust.",
  },
  ];
  return (
   <>
   <section className='ourworkcf'>
    
   <div className="container" id='ourworkcontainer'>
   
   <div className='text-center'>
   <p className='subheading'>OUR WORK</p>
   <div className="hrline"></div>
   </div>

   <div className='text-center flex flex-col gap-3 sm-padding-content'>
   <h2 className='text-4xl'>Result That Reflect Our Work</h2>
   <p className='text-gray-400 contentwrds'>At Rankraze, We Help Businesses Grow with Solutions That Deliver Real Value. Our Experience and Dedication <br /> Have Helped us Build Strong Relationships with Clients Across Different Industries.</p>
   </div>
   
   <div className='grid grid-cols-1 lg:grid-cols-4 gap-10' style={{marginTop:"14px"}}>
   {
    workResults.map((x,y)=>{
      return(
        <div className='work-card' key={x.id}>
        <div className='herosecicon'>
        <span>{x.icon}</span>
        </div>
        <h6>{x.number}</h6>
        <h2 className='contentwrds'>{x.title}</h2>
        <p  className='contentwrds'>{x.description}</p>
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

export default OurWork