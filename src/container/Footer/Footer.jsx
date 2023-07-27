import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";
import "../../index.css";

const Footer = () => {
   const top = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   };
   return (
      <div className='' id='contact'>
         <FooterOverlay />
         <Newsletter />
         <div className='md:flex justify-around items-center text-center text-white my-12'>
            <div className='text-[#AAAAAA] font-semibold' id='contact'>
               <h1 className='text-white font-[cormorant] font-medium text-3xl pb-4'>contact us</h1>
               <p className='pb-4'>9 W 53rd St, New York, NY 10019, USA</p>
               <p>+91 9874563210</p>
               <p>+91 9741570286</p>
            </div>
            <div className='flex flex-col justify-center items-center my-4'>
               <img src={images.gericht} alt='' className='w-[200px]' />
               <p className='w-80 pb-2'>“The best way to find yourself is to lose yourself in the service of others.”</p>
               <img src={images.spoon} alt='' className='mb-2' />
               <div className='text-white grid grid-cols-3 gap-x-5 text-3xl my-4 cursor-pointer '>
                  <FiFacebook className=' hover:text-blue-600' />
                  <FiInstagram className=' hover:text-pink-600' />
                  <FiTwitter className=' hover:text-sky-600' />
               </div>
            </div>
            <div className=''>
               <h1 className='text-white font-[cormorant] font-medium text-3xl pb-4'>Working Hours</h1>
               <div className='pb-4 text-[#AAAAAA] font-semibold'>
                  <p>Monday-Friday</p>
                  <p>08:00 am 12:00 am</p>
               </div>
               <div className='pb-4 text-[#AAAAAA] font-semibold'>
                  <p>Saturday-Sunday</p>
                  <p>07:00 am 11:00 pm</p>
               </div>
            </div>
         </div>
         <div className='text-white font-sans text-center my-20  '>
            <p>© 2021 Geritcht. All Rights Reserved.</p>
         </div>
         <div className='flex justify-end items-end mx-4 my-4 text-5xl cursor-pointer text-white' onClick={top}>
            <FaArrowUp />
         </div>
      </div>
   );
};

export default Footer;
