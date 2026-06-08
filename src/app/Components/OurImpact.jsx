"use client"

import React, { useState } from 'react'
import learnfellaimg from '../../../public/Images/Education/Learnfellaimg.avif'
import educationimg2  from '../../../public/Images/Education/Irclass.avif'
import educationimg3  from '../../../public/Images/Education/Europestudycenter.avif'
import educationimg4  from '../../../public/Images/Education/abbuster.avif'
import educationimg5  from '../../../public/Images/Education/campusabroad.avif'
import educationimg6  from '../../../public/Images/Education/comfotec.avif'
import educationimg7  from '../../../public/Images/Education/comfotec2.avif'
import educationimg8  from '../../../public/Images/Education/comfotec3.avif'
import educationimg9  from '../../../public/Images/Education/comfotec4.avif'
import educationimg10  from '../../../public/Images/Education/intstu.avif'
import educationimg11 from '../../../public/Images/Education/intstu2.avif'
import educationimg12  from '../../../public/Images/Education/learnfella2.avif'
import educationimg13  from '../../../public/Images/Education/learnfella3.avif'
import educationimg14  from '../../../public/Images/Education/meenakshi.avif'
import educationimg15  from '../../../public/Images/Education/techze.avif'
import educationimg16  from '../../../public/Images/Education/techze2.avif'
import educationimg17  from '../../../public/Images/Education/360abroad.avif'
import educationimg18  from '../../../public/Images/Education/360abroad2.avif'
import healthcareimg1 from '../../../public/Images/Healthcare-Images/ayurveda.avif'
import healthcareimg2 from '../../../public/Images/Healthcare-Images/ayurveda2.avif'
import healthcareimg3 from '../../../public/Images/Healthcare-Images/healthuno.avif'
import healthcareimg4 from '../../../public/Images/Healthcare-Images/healthuno2.avif'
import healthcareimg5 from '../../../public/Images/Healthcare-Images/healthuno3.avif'
import healthcareimg6 from '../../../public/Images/Healthcare-Images/healthuno4.avif'
import healthcareimg7 from '../../../public/Images/Healthcare-Images/healthuno5.avif'
import healthcareimg8 from '../../../public/Images/Healthcare-Images/healthuno6.avif'
import healthcareimg9 from '../../../public/Images/Healthcare-Images/healthuno7.avif'
import healthcareimg10 from '../../../public/Images/Healthcare-Images/scio.avif'
import healthcareimg11 from '../../../public/Images/Healthcare-Images/scio2.avif'
import healthcareimg12 from '../../../public/Images/Healthcare-Images/scio3.avif'
import healthcareimg13 from '../../../public/Images/Healthcare-Images/scio4.avif'
import healthcareimg14 from '../../../public/Images/Healthcare-Images/scio5.avif'
import foodimg1 from '../../../public/Images/Food-images/foodimg1.avif'
import foodimg2 from '../../../public/Images/Food-images/foodimg2.avif'
import foodimg3 from '../../../public/Images/Food-images/foodimg3.avif'
import foodimg4 from '../../../public/Images/Food-images/foodimg4.avif'
import foodimg5 from '../../../public/Images/Food-images/foodimg5.avif'
import foodimg6 from '../../../public/Images/Food-images/foodimg6.gif'
import foodimg7 from '../../../public/Images/Food-images/foodimg7.avif'
import foodimg8 from '../../../public/Images/Food-images/foodimg8.avif'
import foodimg9 from '../../../public/Images/Food-images/foodimg9.avif'
import foodimg10 from '../../../public/Images/Food-images/foodimg10.avif'
import beautyimg1 from '../../../public/Images/Beauty/beautyimg1.avif'
import beautyimg2 from '../../../public/Images/Beauty/beautyimg2.avif'
import beautyimg3 from '../../../public/Images/Beauty/beautyimg3.avif'
import beautyimg4 from '../../../public/Images/Beauty/beautyimg4.avif'
import beautyimg5 from '../../../public/Images/Beauty/beautyimg5.avif'
import beautyimg6 from '../../../public/Images/Beauty/beautyimg6.avif'
import beautyimg7 from '../../../public/Images/Beauty/beautyimg7.avif'
import beautyimg8 from '../../../public/Images/Beauty/beautyimg8.avif'
import beautyimg9 from '../../../public/Images/Beauty/beautyimg9.avif'
import gardenimg1 from '../../../public/Images/Gardening/gardeningimg1.avif'
import gardenimg2 from '../../../public/Images/Gardening/gardeningimg2.avif'
import gardenimg3 from '../../../public/Images/Gardening/gardeningimg3.avif'
import gardenimg4 from '../../../public/Images/Gardening/gardeningimg4.avif'
import realestateimg1 from '../../../public/Images/Realestate/realestaeimg1.avif'
import realestateimg2 from '../../../public/Images/Realestate/realestaeimg2.avif'
import realestateimg3 from '../../../public/Images/Realestate/realestaeimg3.avif'
import realestateimg4 from '../../../public/Images/Realestate/realestaeimg4.avif'
import realestateimg5 from '../../../public/Images/Realestate/realestaeimg5.avif'
import realestateimg6 from '../../../public/Images/Realestate/realestaeimg6.avif'
import realestateimg7 from '../../../public/Images/Realestate/realestaeimg7.avif'
import realestateimg8 from '../../../public/Images/Realestate/realestaeimg8.avif'
import realestateimg9 from '../../../public/Images/Realestate/realestaeimg9.avif'
import realestateimg10 from '../../../public/Images/Realestate/realestaeimg10.avif'
import realestateimg11 from '../../../public/Images/Realestate/realestaeimg11.avif'
import realestateimg12 from '../../../public/Images/Realestate/realestaeimg12.avif'
import realestateimg13 from '../../../public/Images/Realestate/realestaeimg13.avif'
import realestateimg14 from '../../../public/Images/Realestate/realestaeimg14.avif'
import realestateimg15 from '../../../public/Images/Realestate/realestaeimg15.avif'
import realestateimg16 from '../../../public/Images/Realestate/realestaeimg16.avif'
import clothingimg1 from '../../../public/Images/Clothing/clothing1.avif'
import clothingimg2 from '../../../public/Images/Clothing/clothing2.avif'
import clothingimg3 from '../../../public/Images/Clothing/clothing3.avif'
import clothingimg4 from '../../../public/Images/Clothing/clothing4.avif'
import clothingimg5 from '../../../public/Images/Clothing/clothing5.avif'
import clothingimg6 from '../../../public/Images/Clothing/clothing6.avif'
import clothingimg7 from '../../../public/Images/Clothing/clothing7.avif'
import clothingimg8 from '../../../public/Images/Clothing/clothing8.avif'
import clothingimg9 from '../../../public/Images/Clothing/clothing9.avif'
import clothingimg10 from '../../../public/Images/Clothing/clothing10.avif'
import itimg1 from '../../../public/Images/IT/itimg1.avif'
import itimg2 from '../../../public/Images/IT/itimg2.avif'
import logisticsimg1 from '../../../public/Images/Logistics/logisticsimg1.avif'
import logisticsimg2 from '../../../public/Images/Logistics/logisticsimg2.avif'
import logisticsimg3 from '../../../public/Images/Logistics/logisticsimg3.avif'
import logisticsimg4 from '../../../public/Images/Logistics/logisticsimg4.avif'
import logisticsimg5 from '../../../public/Images/Logistics/logisticsimg5.avif'
import logisticsimg6 from '../../../public/Images/Logistics/logisticsimg6.avif'
import logisticsimg7 from '../../../public/Images/Logistics/logisticsimg7.avif'
import logisticsimg8 from '../../../public/Images/Logistics/logisticsimg8.avif'
import Bilingualimg1 from '../../../public/Images/Bilingual/Bilingualimg1.avif'
import Bilingualimg2 from '../../../public/Images/Bilingual/Bilingualimg2.avif'
import Bilingualimg3 from '../../../public/Images/Bilingual/Bilingualimg3.avif'
import Bilingualimg4 from '../../../public/Images/Bilingual/Bilingualimg4.avif'
import Bilingualimg5 from '../../../public/Images/Bilingual/Bilingualimg5.avif'
import Bilingualimg6 from '../../../public/Images/Bilingual/Bilingualimg6.avif'
import Bilingualimg7 from '../../../public/Images/Bilingual/Bilingualimg7.avif'
import Bilingualimg8 from '../../../public/Images/Bilingual/Bilingualimg8.avif'
import ecommerceimg1 from '../../../public/Images/E-Commerce/ecommerceimg1.avif'
import ecommerceimg2 from '../../../public/Images/E-Commerce/ecommerceimg2.avif'
import ecommerceimg3 from '../../../public/Images/E-Commerce/ecommerceimg3.avif'
import ecommerceimg4 from '../../../public/Images/E-Commerce/ecommerceimg4.avif'
import ecommerceimg5 from '../../../public/Images/E-Commerce/ecommerceimg5.avif'
import ecommerceimg6 from '../../../public/Images/E-Commerce/ecommerceimg6.avif'
import ecommerceimg7 from '../../../public/Images/E-Commerce/ecommerceimg7.avif'
import ecommerceimg8 from '../../../public/Images/E-Commerce/ecommerceimg8.avif'
import ecommerceimg9 from '../../../public/Images/E-Commerce/ecommerceimg9.avif'
import ecommerceimg10 from '../../../public/Images/E-Commerce/ecommerceimg10.avif'
import ecommerceimg11 from '../../../public/Images/E-Commerce/ecommerceimg11.avif'
import ecommerceimg12 from '../../../public/Images/E-Commerce/ecommerceimg12.avif'
import brandingimg1 from '../../../public/Images/Branding/brandingimg1.avif'
import brandingimg2 from '../../../public/Images/Branding/brandingimg2.avif'
import brandingimg3 from '../../../public/Images/Branding/brandingimg3.avif'
import brandingimg4 from '../../../public/Images/Branding/brandingimg4.avif'
import brandingimg5 from '../../../public/Images/Branding/brandingimg5.avif'
import brandingimg6 from '../../../public/Images/Branding/brandingimg6.avif'
import brandingimg7 from '../../../public/Images/Branding/brandingimg7.avif'
import brandingimg8 from '../../../public/Images/Branding/brandingimg8.avif'
import brandingimg9 from '../../../public/Images/Branding/brandingimg9.avif'
import brandingimg10 from '../../../public/Images/Branding/brandingimg10.avif'
import brandingimg11 from '../../../public/Images/Branding/brandingimg11.avif'
import brandingimg12 from '../../../public/Images/Branding/brandingimg12.avif'
import pdctimg1 from '../../../public/Images/Product/pdctimg1.avif'
import pdctimg2 from '../../../public/Images/Product/pdctimg2.avif'
import pdctimg3 from '../../../public/Images/Product/pdctimg3.avif'
import pdctimg4 from '../../../public/Images/Product/pdctimg4.avif'
import pdctimg5 from '../../../public/Images/Product/pdctimg5.avif'
import pdctimg6 from '../../../public/Images/Product/pdctimg6.avif'
import pdctimg7 from '../../../public/Images/Product/pdctimg7.avif'
import pdctimg8 from '../../../public/Images/Product/pdctimg8.avif'
import pdctimg9 from '../../../public/Images/Product/pdctimg9.avif'
import pdctimg10 from '../../../public/Images/Product/pdctimg10.avif'
import pdctimg11 from '../../../public/Images/Product/pdctimg11.avif'
import pdctimg12 from '../../../public/Images/Product/pdctimg12.avif'
import pdctimg13 from '../../../public/Images/Product/pdctimg13.avif'
import salonimg1 from '../../../public/Images/Salon/salonimg1.avif'
import salonimg2 from '../../../public/Images/Salon/salonimg2.avif'
import salonimg3 from '../../../public/Images/Salon/salonimg3.avif'
import warehousterimg1 from '../../../public/Images/warehouster/warehousterimg1.avif'
import warehousterimg2 from '../../../public/Images/warehouster/warehousterimg2.avif'
import warehousterimg3 from '../../../public/Images/warehouster/warehousterimg3.avif'

import Image from 'next/image'

function OurImpact() {
  const industryCate=["Education","Healthcare","Food","Beauty","Gardening","Realestate","Clothing","IT","Logistics","Bilngual","E-Commerce","Branding","Product","Salon","Warehouse","Others"]

  const projectscate=["SEO","Website Development","Google Ads","Social Media Marketing","Branding","More-Services"]

  const industryMain=[
    {
        id:1,
        coverImage:learnfellaimg,
        category:"Education",
       
    },
    {
        id:2,
        coverImage:educationimg2,
        category:"Education",
    },
    {
        id:3,
        coverImage:educationimg3,
        category:"Education",
    },
    {
        id:4,
        coverImage:educationimg4,
        category:"Education",
    },
    {
        id:5,
        coverImage:educationimg5,
        category:"Education",
    },{
        id:6,
        coverImage:educationimg6,
        category:"Education",
    },{
        id:7,
        coverImage:educationimg7,
        category:"Education",
    },{
        id:8,
        coverImage:educationimg8,
        category:"Education",
    },{
        id:9,
        coverImage:educationimg9,
        category:"Education",
    },{
        id:10,
        coverImage:educationimg10,
        category:"Education",
    },
    {
        id:11,
        coverImage:educationimg11,
        category:"Education",
    },{
        id:12,
        coverImage:educationimg12,
        category:"Education",
    },{
        id:13,
        coverImage:educationimg13,
        category:"Education",
    },{
        id:14,
        coverImage:educationimg14,
        category:"Education",
    },
    {
        id:15,
        coverImage:educationimg15,
        category:"Education",
    },{
        id:16,
        coverImage:educationimg16,
        category:"Education",
    },
    {
        id:17,
        coverImage:educationimg17,
        category:"Education",
    },
    {
        id:18,
        coverImage:educationimg18,
        category:"Education",
    },
    {
        id:19,
        coverImage:healthcareimg1,
        category:"Healthcare"
    },
    {
        id:20,
        coverImage:healthcareimg2,
        category:"Healthcare"
    },{
        id:21,
        coverImage:healthcareimg3,
        category:"Healthcare"
    },
    {
        id:22,
        coverImage:healthcareimg4,
        category:"Healthcare"
    },
    {
        id:23,
        coverImage:healthcareimg5,
        category:"Healthcare"
    },
    {
        id:24,
        coverImage:healthcareimg6,
        category:"Healthcare"
    },
    {
        id:25,
        coverImage:healthcareimg7,
        category:"Healthcare"
    },
    {
        id:26,
        coverImage:healthcareimg8,
        category:"Healthcare"
    },
    {
        id:27,
        coverImage:healthcareimg9,
        category:"Healthcare"
    },
    {
        id:28,
        coverImage:healthcareimg10,
        category:"Healthcare"
    },
    {
        id:29,
        coverImage:healthcareimg11,
        category:"Healthcare"
    },
    {
        id:30,
        coverImage:healthcareimg12,
        category:"Healthcare"
    },{
        id:31,
        coverImage:healthcareimg13,
        category:"Healthcare"
    },{
        id:32,
        coverImage:healthcareimg14,
        category:"Healthcare"
    },
    {
        id:33,
        coverImage:foodimg1,
        category:"Food"
    },{
        id:34,
        coverImage:foodimg2,
        category:"Food"
    },
    {
        id:35,
        coverImage:foodimg3,
        category:"Food"
    },{
        id:36,
        coverImage:foodimg4,
        category:"Food"
    },{
        id:37,
        coverImage:foodimg5,
        category:"Food"
    },{
        id:38,
        coverImage:foodimg6,
        category:"Food"
    },{
        id:39,
        coverImage:foodimg7,
        category:"Food"
    },{
        id:40,
        coverImage:foodimg8,
        category:"Food"
    },{
        id:41,
        coverImage:foodimg9,
        category:"Food"
    },{
        id:42,
        coverImage:foodimg10,
        category:"Food"
    },
    {
        id:43,
        coverImage:beautyimg1,
        category:"Beauty"
    },{
        id:44,
        coverImage:beautyimg2,
        category:"Beauty"
    },{
        id:45,
        coverImage:beautyimg3,
        category:"Beauty"
    },{
        id:46,
        coverImage:beautyimg4,
        category:"Beauty"
    },{
        id:47,
        coverImage:beautyimg5,
        category:"Beauty"
    },{
        id:48,
        coverImage:beautyimg6,
        category:"Beauty"
    },
    {
        id:49,
        coverImage:beautyimg7,
        category:"Beauty"
    },
    {
        id:50,
        coverImage:beautyimg8,
        category:"Beauty"
    },
    {
        id:51,
        coverImage:beautyimg9,
        category:"Beauty"
    },
    {
        id:52,
        coverImage:gardenimg1,
        category:"Gardening"
    },
     {
        id:53,
        coverImage:gardenimg2,
        category:"Gardening"
    },
     {
        id:54,
        coverImage:gardenimg3,
        category:"Gardening"
    },
     {
        id:55,
        coverImage:gardenimg4,
        category:"Gardening"
    },
    {
        id:56,
        coverImage:realestateimg1,
        category:"Realestate"
    },
    {
        id:57,
        coverImage:realestateimg2,
        category:"Realestate"
    },
    {
        id:58,
        coverImage:realestateimg3,
        category:"Realestate"
    },{
        id:59,
        coverImage:realestateimg4,
        category:"Realestate"
    },{
        id:60,
        coverImage:realestateimg5,
        category:"Realestate"
    },{
        id:61,
        coverImage:realestateimg6,
        category:"Realestate"
    },{
        id:62,
        coverImage:realestateimg7,
        category:"Realestate"
    },{
        id:63,
        coverImage:realestateimg8,
        category:"Realestate"
    },{
        id:64,
        coverImage:realestateimg9,
        category:"Realestate"
    },{
        id:65,
        coverImage:realestateimg10,
        category:"Realestate"
    },{
        id:66,
        coverImage:realestateimg11,
        category:"Realestate"
    },{
        id:67,
        coverImage:realestateimg12,
        category:"Realestate"
    },
    {
        id:68,
        coverImage:realestateimg13,
        category:"Realestate"
    },{
        id:69,
        coverImage:realestateimg14,
        category:"Realestate"
    },{
        id:70,
        coverImage:realestateimg15,
        category:"Realestate"
    },{
        id:71,
        coverImage:realestateimg16,
        category:"Realestate"
    },
    {
        id:72,
        coverImage:clothingimg1,
        category:"Clothing"
    },
     {
        id:73,
        coverImage:clothingimg2,
        category:"Clothing"
    },
     {
        id:74,
        coverImage:clothingimg3,
        category:"Clothing"
    },
     {
        id:75,
        coverImage:clothingimg4,
        category:"Clothing"
    },
     {
        id:76,
        coverImage:clothingimg5,
        category:"Clothing"
    },
     {
        id:77,
        coverImage:clothingimg6,
        category:"Clothing"
    },
     {
        id:78,
        coverImage:clothingimg7,
        category:"Clothing"
    },
     {
        id:79,
        coverImage:clothingimg8,
        category:"Clothing"
    },
     {
        id:80,
        coverImage:clothingimg9,
        category:"Clothing"
    },
     {
        id:81,
        coverImage:clothingimg10,
        category:"Clothing"
    },
    {
        id:82,
        coverImage:itimg1,
        category:"IT"
    },{
        id:83,
        coverImage:itimg2,
        category:"IT"
    },
    {
        id:84,
        coverImage:logisticsimg1,
        category:"Logistics"
    },
    {
        id:85,
        coverImage:logisticsimg2,
        category:"Logistics"
    },{
        id:86,
        coverImage:logisticsimg3,
        category:"Logistics"
    },{
        id:87,
        coverImage:logisticsimg4,
        category:"Logistics"
    },{
        id:88,
        coverImage:logisticsimg5,
        category:"Logistics"
    },{
        id:89,
        coverImage:logisticsimg6,
        category:"Logistics"
    },{
        id:90,
        coverImage:logisticsimg7,
        category:"Logistics"
    },{
        id:91,
        coverImage:logisticsimg8,
        category:"Logistics"
    },
    {
        id:92,
        coverImage:Bilingualimg1,
        category:"Bilngual"
    },
    {
        id:93,
        coverImage:Bilingualimg2,
        category:"Bilngual"
    },{
        id:94,
        coverImage:Bilingualimg3,
        category:"Bilngual"
    },{
        id:95,
        coverImage:Bilingualimg4,
        category:"Bilngual"
    },{
        id:96,
        coverImage:Bilingualimg5,
        category:"Bilngual"
    },{
        id:97,
        coverImage:Bilingualimg6,
        category:"Bilngual"
    },{
        id:98,
        coverImage:Bilingualimg7,
        category:"Bilngual"
    },{
        id:99,
        coverImage:Bilingualimg8,
        category:"Bilngual"
    },
    {
        id:100,
        coverImage:ecommerceimg1,
        category:"E-Commerce"
    },
    {
        id:101,
        coverImage:ecommerceimg2,
        category:"E-Commerce"
    },{
        id:102,
        coverImage:ecommerceimg3,
        category:"E-Commerce"
    },{
        id:103,
        coverImage:ecommerceimg4,
        category:"E-Commerce"
    },{
        id:104,
        coverImage:ecommerceimg5,
        category:"E-Commerce"
    },{
        id:105,
        coverImage:ecommerceimg6,
        category:"E-Commerce"
    },{
        id:106,
        coverImage:ecommerceimg7,
        category:"E-Commerce"
    },{
        id:107,
        coverImage:ecommerceimg8,
        category:"E-Commerce"
    },{
        id:108,
        coverImage:ecommerceimg9,
        category:"E-Commerce"
    },{
        id:110,
        coverImage:ecommerceimg10,
        category:"E-Commerce"
    },{
        id:111,
        coverImage:ecommerceimg11,
        category:"E-Commerce"
    },{
        id:112,
        coverImage:ecommerceimg12,
        category:"E-Commerce"
    },
    {
        id:113,
        coverImage:brandingimg1,
        category:"Branding"
    },
    {
        id:114,
        coverImage:brandingimg2,
        category:"Branding"
    },{
        id:115,
        coverImage:brandingimg3,
        category:"Branding"
    },{
        id:116,
        coverImage:brandingimg4,
        category:"Branding"
    },{
        id:117,
        coverImage:brandingimg5,
        category:"Branding"
    },{
        id:118,
        coverImage:brandingimg6,
        category:"Branding"
    },{
        id:119,
        coverImage:brandingimg7,
        category:"Branding"
    },{
        id:120,
        coverImage:brandingimg8,
        category:"Branding"
    },{
        id:121,
        coverImage:brandingimg9,
        category:"Branding"
    },{
        id:122,
        coverImage:brandingimg10,
        category:"Branding"
    },{
        id:123,
        coverImage:brandingimg11,
        category:"Branding"
    },
    {
        id:124,
        coverImage:brandingimg12,
        category:"Branding"
    },
    {
        id:125,
        coverImage:pdctimg1,
        category:"Product"
    },
    {
        id:126,
        coverImage:pdctimg2,
        category:"Product"
    },{
        id:127,
        coverImage:pdctimg3,
        category:"Product"
    },{
        id:128,
        coverImage:pdctimg4,
        category:"Product"
    },{
        id:129,
        coverImage:pdctimg5,
        category:"Product"
    },{
        id:130,
        coverImage:pdctimg6,
        category:"Product"
    },{
        id:131,
        coverImage:pdctimg7,
        category:"Product"
    },{
        id:132,
        coverImage:pdctimg8,
        category:"Product"
    },{
        id:133,
        coverImage:pdctimg9,
        category:"Product"
    },{
        id:134,
        coverImage:pdctimg10,
        category:"Product"
    },
    {
        id:135,
        coverImage:pdctimg11,
        category:"Product"
    },
    {
        id:136,
        coverImage:pdctimg12,
        category:"Product"
    },
    {
        id:137,
        coverImage:salonimg1,
        category:"Salon"
    },
    {
        id:138,
        coverImage:salonimg2,
        category:"Salon"
    },
    {
        id:139,
        coverImage:salonimg3,
        category:"Salon"
    },
    {
        id:140,
        coverImage:warehousterimg1,
        category:"Warehouse"
    },
    {
         id:141,
        coverImage:warehousterimg2,
        category:"Warehouse"
    },
    {
         id:142,
        coverImage:warehousterimg3,
        category:"Warehouse"
    },
  ]

  const servicesMain=[
    {
        id:1001,
        coverImage:educationimg2,
        name:"VASTRAA-GLOBAL",
        category:"SEO",
        links:"https://vastraaglobal.com/"
    },
    {
        id:1002,
        coverImage:"",
        name:""
    }
  ]

  const [category,allCategories]=useState("Education")

  const [visibleCount, setVisibleCount] = useState(8);

  const allCategoriesMerge=[...industryMain, ...servicesMain]

  const filterCategories =
  category === "All"
    ? allCategoriesMerge
    : allCategoriesMerge.filter((x) => x.category === category);

   const displayedItems = filterCategories.slice(0, visibleCount);

  return (
    <>
    <section className='ourimpactcf' id='see-our-work'>
    <div className="container" id='impactcontainer'>
    
    <div className='text-center'>
    <p className='subheading'>OUR IMPACT</p>
    <div className="hrline"></div>
    </div>

    <div  className='text-center flex flex-col gap-3'>
    <h2 className='text-4xl'>Explore Our Work</h2>
    <p className='text-gray-400 contentwrds'>Explore a Collection of Projects That Showcase How Rankraze Combines Strategy,  <br/> Creativity, and Technology to Deliver Meaningful Business Outcomes Across Industries.</p>
    </div>
    
    {/* Category Section Starts */}
    <div className='flex flex-col gap-2 lg:gap-7  category-section'>
    
    <div className='category-parent'>
    <p className='category-head'>INDUSTRIES :</p>
    
    {
        industryCate.map((x,y)=>{
        return(
        <div key={y} className={category===x
            ?
            "category-box-active"
            :
            "category-box"
        }onClick={() => {
  allCategories(x);
  setVisibleCount(8);
}}>
        <p>{x}</p>
        </div>
            )
        })
    }
   
    </div>

    <div className='category-parent'>
    <p className='category-head'>SERVICES :</p>
    
    {
        projectscate.map((x,y)=>{
            return(
                <div key={y} className={category===x
            ?
            "category-box-active"
            :
            "category-box"
        } onClick={() => {allCategories(x);
        setVisibleCount(8);}}>
                <p>{x}</p>
                </div>
            )
        })
    }
   
    </div>

    </div>

    <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 portfolio-card-sec'>
    {
  displayedItems.map((x) => {
    return x.links ? (
      <div key={x.id}>
      <div className="cover-image-service">
      
      </div>
      <h6>{x.name}</h6>
      </div>
    ) : (
      <div className='category-card' key={x.id}>
        <div className='portfolio-image-sec'>
        
        {x.coverImage && (
        <Image
            src={x.coverImage}
            alt='portfolioImages'
            unoptimized
            className='cover-image' 
          />)}
        {x.video && (
        <video
          className="cover-image"
          autoPlay
          muted
          loop
          playsInline> <source src={x.video} type="video/mp4"  />
        </video>
        )}

        
        </div>
      </div>
    );
  })
}
    </div>

    {
  visibleCount < filterCategories.length && (
    <div className="flex justify-center mt-10">
      <button
        className="view-more-btn"
        onClick={() => setVisibleCount((prev) => prev + 8)}
      >
        View More
      </button>
    </div>
  )
}

    </div>
    </section>
    </>
  )
}

export default OurImpact