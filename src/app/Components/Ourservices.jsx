import React from 'react'
import { FaCode, FaPaintBrush, FaBullhorn,FaSearch,FaLaptopCode,FaBullseye,FaRobot   } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { FaMobileScreenButton } from "react-icons/fa6";
function Ourservices() {
  let servicesArray=[
    {
        id:1,
        name:"Web Services",
        des:"We design and engineer robust, scalable web solutions that serve as the digital foundation of your business. Our development practice spans the full stack — from architecting performant back-end systems. Every project is executed with a focus on security, maintainability, and long-term scalability, ensuring your platform evolves seamlessly.",
        icon:<FaCode />,
        points:[
            "Custom website development for businesses and brands",
            "Responsive and modern UI/UX-focused web experiences",
            "Secure web hosting and server infrastructure management",
            "Cloud hosting, domain configuration, and website deployment",
            "Android and iOS mobile application development",
            "Continuous technical support, updates, and performance monitoring"
        ]
    },
    {
        id:2,
        name:"Digital Marketing",
        des:"We design and execute data-driven digital marketing strategies that accelerate brand growth, increase audience engagement, and deliver measurable business results. Our marketing specialists combine creativity, analytics, and performance optimization to craft campaigns that connect with the right audience across every digital channel.",
        points:[
            "Performance-driven digital marketing campaigns tailored to business goals.",
            "Search Engine Optimization (SEO) to improve visibility and organic growth.",
            "Social media marketing and brand engagement strategies across major platforms.",
            "Paid advertising campaigns including Google Ads, Meta Ads, and remarketing.",
            "Content marketing, copywriting, and audience-focused campaign messaging",
            "Influencer collaborations and multi-channel digital campaign management"
        ],
        icon:<FaSearch />
    },
    {
        id:3,
        name:"Software Development",
        des:"We architect and deliver enterprise-grade software solutions that solve complex business challenges with precision and reliability. Our engineering teams operate across the full development lifecycle — from requirements gathering and system design through to development, rigorous QA testing, deployment, and ongoing maintenance.",
        points:[
            "Custom software development tailored to your business processes and objectives",
            "Legacy system modernisation, refactoring, and platform migration",
            "Scalable cloud-native architecture design using microservices and serverless patterns",
            "Automated testing, QA assurance, and continuous integration/delivery (CI/CD)",
            "Third-party API integrations, middleware development, and data pipeline engineering",
            "Post-launch maintenance, performance monitoring, and iterative enhancement",
           

        ],
        icon:<FaLaptopCode  />
    },
    {
        id:4,
        name:"Branding",
        des:"We craft cohesive brand identities that communicate your company's mission, values, and competitive differentiation with precision and clarity. Our branding engagements encompass strategic positioning, visual identity design, and comprehensive brand guidelines — equipping your team with a system that scales consistently across every customer touchpoint.",
        points:[
            "Logo design, typography, and colour system development.",
            "Brand voice, messaging framework, and positioning.",
            "Brand guidelines documentation and asset libraries.",
             "Social media branding kit (post templates, highlight covers, ad creatives system)",
            "Marketing collateral design (business cards, brochures, pitch decks, social media kits)",
            "Brand consistency audit (ensuring all platforms follow unified identity)"

        ],
        icon:<FaBullseye/>
    },
    {
        id:5,
        name:"Video Production",
        des:"We produce high-quality visual content that helps brands communicate their story with clarity, creativity, and impact. From concept development and script planning to filming, editing, motion graphics, and final delivery, our production team creates engaging videos designed to capture attention and strengthen brand presence across digital platforms.",
        points:[
            "Brand commercials and promotional video production",
            "Strategic video marketing campaigns for digital platforms",
            "Social media reels, ad creatives, and promotional videos",
            "2D explainer videos and motion graphics animation",
            "High-quality 3D animation, CGI, and product visualization"

        ],
        icon:<FaMobileScreenButton />
    },
     {
        id:6,
        name:"Ai & Services",
        des:"We deliver intelligent AI-powered solutions that help businesses automate operations, enhance decision-making, and unlock new opportunities through advanced technologies. Our expertise spans artificial intelligence consulting, machine learning, computer vision, natural language processing, and custom AI system development tailored to modern business challenges.",
        points:[
            "AI consulting and strategy development for digital transformation",
            "Custom AI solutions tailored to unique business requirements",
            "Machine learning model development and predictive analytics",
            "Computer vision solutions for image recognition and automation",
            "Natural language processing (NLP) and intelligent text analysis",
            "Data processing, AI integration, and intelligent workflow automation",
            "Future-ready AI solutions designed for long-term innovation and growth"

        ],
        icon:<FaRobot  />
    },
  ]
  return (
   <>
   <section>
   
   </section>
   </>

  )
}

export default Ourservices