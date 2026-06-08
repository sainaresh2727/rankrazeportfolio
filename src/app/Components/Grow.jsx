import React from 'react'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Grow() {
 let contactArray = [
  {
    id: 1,
    name: "Email Us",
    value: "info@rankraze.com",
    icon: <FaEnvelope />
  },
  {
    id: 2,
    name: "Let's Talk",
    value: ["+91 9962262210", "+91 9710079798"],
    icon: <FaPhoneAlt />
  },
  {
    id: 3,
    name: "Office Hour",
    value: ["Monday - Saturday", "10.00 AM - 07.00 PM"],
    icon: <FaClock />
  },
  {
    id: 4,
    name: "Head Office",
    value: "Karuna Conclave, AD 42 & 45, 4th Ave, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600040.",
    icon: <FaMapMarkerAlt />
  }
];
  return (
    <>
    <section className='grow-cf' id='grow-contact'>
    <div className="container" id='grow-container'>
    <h2 className='text-4xl'>Ready To Grow Your Bussiness Online?</h2>
    <p className='text-gray-400 text-middle-align contentwrds'>Whether you need SEO, website development, branding, paid advertising, or a complete digital growth strategy, RankRaze is here to help you achieve your business goals with confidence. </p>
    <div>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5" style={{marginTop:"12px"}}>
    {
  contactArray.map((x, y) => {
    return (
      <div className="contact-card" key={x.id}>
        <div className="herosecicon">
          <span>{x.icon}</span>
        </div>

        <h6>{x.name}</h6>

        {
          Array.isArray(x.value) ? (
            x.value.map((item, index) => (
              <p key={index} className='text-gray-400 contentwrds'>{item}</p>
            ))
          ) : (
            <p className='text-gray-400 contentwrds'>{x.value}</p>
          )
        }
      </div>
    );
  })
}
    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Grow