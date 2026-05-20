import React from 'react'
import { useEffect } from 'react';  
import AOS from 'aos';
import p1 from "./P1.png"
import p2 from "./p2.png"
import p3 from "./p3.png"
import p4 from "./p4.png"
import p5 from "./P5.png"
import p6 from "./P6.png"
import p7 from "./P7.png"
import p9 from "./P9.png"


function Project() {
    useEffect(() => {
        AOS.init({
          easing: "ease-out-quart",
          delay: 0,
          duration: 750,
        });
      }, []);
  return (
    <div id='Project' className='p-20 flex flex-col items-center justify-center'>
      <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Project</h1> 
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10'>
          <a target='_self' href="https://luminous-biscuit-bd1143.netlify.app/"><img data-aos="fade-down" height={300} width={300} className='text-[26px] flex items-center justify-center rounded-b-3xl h-36 p-1 border-2 border-fuchsia-800 b_glow' src={p1} alt="" /></a>
          <a target='_self' href="https://tranquil-muffin-03c989.netlify.app/"><img data-aos="fade-down" height={300} width={300} className='text-[26px] flex items-center justify-center rounded-b-3xl h-36 p-1 border-2 border-fuchsia-800 b_glow' src={p2} alt="" /></a>
          <a target='_self' href="https://majestic-conkies-104d89.netlify.app/"><img data-aos="fade-down" height={300} width={300} className='text-[26px] flex items-center justify-center rounded-b-3xl h-36 p-1 border-2 border-fuchsia-800 b_glow' src={p3} alt="" /></a>
          <a target='_self' href="https://tangerine-shortbread-650ebd.netlify.app/"><img data-aos="fade-down" height={300} width={300} className='text-[26px] flex items-center justify-center rounded-b-3xl h-36 p-1 border-2 border-fuchsia-800 b_glow' src={p4} alt="" /></a>
          <a target='_self' href="https://gorgeous-begonia-5e1ab3.netlify.app/"><img data-aos="fade-up" height={300} width={300} className='text-[26px] flex items-center justify-center rounded-b-3xl h-36 p-1 border-2 border-fuchsia-800 b_glow' src={p5} alt="" /></a>
          <a target='_self' href="https://rawcdn.githack.com/manishnirmal2962002/Faculty-Feedback-System/33a071b869bd53b1cac36766f0dbc28f2a57e1fb/index.html"><img data-aos="fade-up" height={300} width={300} className='text-[26px] flex items-center justify-center rounded-b-3xl h-36 p-1 border-2 border-fuchsia-800 b_glow'  src={p6} alt="" /></a>
          <a target='_self' href="https://rad-mooncake-6753e3.netlify.app/"><img data-aos="fade-up" height={300} width={300} className='text-[26px] flex items-center justify-center rounded-b-3xl h-36 p-1 border-2 border-fuchsia-800 b_glow'  src={p7} /></a>
          <a href="https://sage-maamoul-ea6185.netlify.app/"><img data-aos="fade-up" height={300} width={300} className='text-[26px] flex items-center justify-center rounded-b-3xl h-36 p-1 border-2 border-fuchsia-800 b_glow'  src={p9}/></a>
     
     </div> 
    </div>
  )
}

export default Project