import React from "react";
import "../../index.css";
import { images } from "../../constants";
const FindUs = () => {
   return (
      <div className='text-white md:flex md:justify-around items-center my-20'>
         <div className='md:pl-0 pl-8 md:pb-0 pb-20'>
            <p className='font-[Cormorant] text-5xl pb-2'>contact</p>
            <h1 className='mb-12 text-[#DDCa87] text-7xl font-[cormorant] capitalize'> find us</h1>
            <div className=''>
               <p className=' capitalize text-lg font-mono  '>9 W 53rd St, New York, NY 10019, USA</p>
               <p className=' capitalize text-5xl text-[#DDCA87] font-[cormorant]  my-8 '>opening hours</p>
               <p className=' capitalize text-lg font-mono '>Mon-Fri 10:00-02:00</p>
               <p className=' capitalize text-lg font-mono '>Sat-Sun 10:00-03:00</p>
            </div>
            <button
               className=' bg-stone-600 py-3 px-7 text-white font-medium rounded-sm my-2 hover:bg-white hover:text-black animate-pulse '
               type='button'
            >
               <a href='/'>visit us</a>
            </button>
         </div>
         <div className=''>
            <img src={images.findus} alt='' className='w-[500px] px-8 md:px-0' />
         </div>
      </div>
   );
};

export default FindUs;
