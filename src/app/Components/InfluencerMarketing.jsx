import React from 'react'
import Link from 'next/link'
import { GoArrowUpRight } from "react-icons/go";
import {
  FaSearch,
  FaVideo,
  FaChartLine,
  FaHandshake,
  FaInstagram,
  FaStar,FaBullhorn,FaUsers
} from "react-icons/fa";

function InfluencerMarketing() {
  let influencerCard = [
  {
    id: 1,
    icon: <FaSearch />,
    name: "Influencer Discovery",
    des: "Data-driven matching of brand persona to the right influencer audience"
  },
  {
    id: 2,
    icon: <FaVideo />,
    name: "Content Production",
    des: "Professional video creation and creative direction for campaign assets"
  },
  {
    id: 3,
    icon: <FaChartLine />,
    name: "Campaign Analytics",
    des: "Reach, engagement, traffic and conversion tracking across platforms"
  },
  {
    id: 4,
    icon: <FaHandshake />,
    name: "Paid & Barter Deals",
    des: "Flexible collaboration models suited to all campaign budgets"
  },
  {
    id: 5,
    icon: <FaInstagram />,
    name: "Multi-Platform",
    des: "Instagram, YouTube, Facebook — all major social platforms covered"
  },
  {
    id: 6,
    icon: <FaStar />,
    name: "Celebrity Access",
    des: "Relationships with top-tier celebrity influencers like Hansika Motwani"
  },
  {
  id: 7,
  icon: <FaBullhorn />,
  name: "Brand Awareness",
  des: "Boost visibility and audience reach through impactful influencer promotions"
},
{
  id: 8,
  icon: <FaUsers />,
  name: "Audience Engagement",
  des: "Drive meaningful interactions, community growth, and customer trust across campaigns"
}
  ];

  let growthArray=[
    {
        id:1,
        name:"INFLUENCER REACH",
        growth:"5M+"
    },
    {
        id:2,
        name:"TRAFFIC GROWTH",
        growth:"↑ 280%",
        hike:true
    },
     {
        id:2,
        name:"PRODUCT REVENUE",
        growth:"↑ Sales",
        hike:true
    },
     {
        id:2,
        name:"AWARNESS UPLIFT",
        growth:"Brand"
    },
  ]

  return (
    <>
    <section id='influencermarkcf'>
    <div className="container" id='influencermarkcontainer'>

   <div className='' style={{display:"flex",justifyContent:"center"}}>
   <p className='agencydiv' style={{color:"white",fontSize:"smaller"}}>INFLUENCER MARKETING</p>
   </div>
    
   

    <div className="influencermarkcontent">
    <h1 className='influheading'>We Connect Brands <br /> with <span className='specialcolor'>Voice That More Millions</span></h1>
    <div style={{display:"flex",flexDirection:"column",gap:"12px"}} id='influencercontpara'>
    <p className='text-gray-300'>Rankraze delivers end-to-end influencer marketing campaigns designed to build brand awareness, engagement, and measurable business growth.</p>
    </div>
    <Link href="https://rankraze.com/influencer-marketing" id='influencerbtn'>VIEW INFLUENCER SERVICES <GoArrowUpRight style={{fontSize:"18px"}}/></Link>
    </div>

    <div className='grid grid-cols-1   lg:grid-cols-4 gap-6 place-items-center mt-6'>

    {
        influencerCard.map((x,y)=>{
            return(
                <div className='influencercard' key={x.id}>
                <div className='iconbox'>
                <span>{x.icon}</span>
                </div>
                <h2>{x.name}</h2>
                <p className='text-gray-200' style={{fontSize:"small",textAlign:"center"}}>{x.des}</p>
                </div>
            )
        })
    }

    </div>

  

    </div>
    </section>

    {/* CASE STUDY */}
    <section id='influencercasestudy'>
    <div className="container" id='influencercs'>
    
    <div className='' style={{display:"flex",justifyContent:"center"}}>
   <p className='agencydiv' style={{color:"white",fontSize:"smaller"}}>INFLUENCER CASE STUDY</p>
   </div>

   <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

   <div className='casestudycontent'>
   
   
  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">

  {/* Left Content */}
  <div className="flex flex-col gap-3">
    <p className="text-sm tracking-[4px] uppercase text-pink-400 font-semibold">
      Brand Collaboration
    </p>

    <h1 className="text-5xl md:text-7xl font-black text-white leading-none">
      YEKA
    </h1>

    <div className="flex items-center gap-3">
     
    <p className="text-gray-300" style={{fontSize:"small",whiteSpace:"nowrap"}}>
        Herbal Cosmeticsz • Influencer Marketing
      </p>
    </div>
  </div>

  {/* Right Content */}
  <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 min-w-[240px]">

    <p className="text-xs tracking-[3px] uppercase text-gray-400 mb-3">
      Featured Influencer
    </p>

    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
      Hansika Motwani
    </h2>

    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

      <p className="text-xs text-gray-400 mb-3">
       Indian Actress 5M+ Instagram Followers
      </p>
    </div>

  </div>

</div>
  
   
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
   {
    growthArray.map((x,y)=>{
        return(
            <div className='casestudycard'>
            <h2 className={`${x.hike ? "growthtext" : " "}`}>{x.growth}</h2>
            <p className='text-gray-400' style={{fontSize:"smaller"}}>{x.name}</p>
            </div>
        )
    })
   }
   </div>
   
   </div>

   <div className='casestudyexplain'>
   <h2>How We Turned an Herbal Brand into a Household Name</h2>
   <p className='text-gray-300' 
   style={{fontSize:"16px"}} >Yeka Cosmetics - A Maker of Beauty Products Rooted in Traditinal Herbs - Partnered with Rankraze to Break through a Crowded Market. The Challenge Elevate Brand Awarness and Penerate a new Consumer Segmet</p>
   <ul className='herbalkeypoints'>
   <li className='text-gray-600'>Identified Hansika Motwani (5M+ followers) as the ideal face — strong beauty & lifestyle audience, aspirational yet relatable
  </li>
  <li className='text-gray-800'>Produced a high-production video of Hansika explaining Yeka's herbal formulation and brand story
 </li>
 <li className='text-gray-800'>Distributed content across Instagram with targeted amplification to reach beauty-conscious consumers</li>
 <li className='text-gray-800'>Tracked traffic uplift, engagement, and sales conversion pre and post campaign</li>
 <li className='text-gray-800'>Drove measurable increases in direct website visitors, product sales, and brand search volume</li>
</ul>
<p className='text-gray-300' 
   style={{fontSize:"16px"}} >Rankraze developed a strategic influencer marketing campaign focused on storytelling, creator collaborations, and high-engagement social content.</p>
<a href="https://rankraze.com/yeka" target='_blank' className='viewfullcasedtudy'>VIEW FULL CASE STUDY</a>
</div>
     
   </div>
    
    
    </div>
    </section>
    </>
  )
}

export default InfluencerMarketing