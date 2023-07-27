import React from "react";
import "../../index.css";
import { images } from "../../constants";
const AboutUs = () => {
   return (
      <div className='flex relative py-8' id='about'>
         <div className=' absolute inset-0 items-center justify-center flex'>
            <img src={images.G} alt='G letter' className='md:w-[391px] md:h-[415px] md:z-[0] w-[280px] h-[207px]' />
         </div>
         <div className='flex flex-col  md:flex-row md:w-full justify-center items-center z-[2] text-white'>
            <div
               className='md:flex md:flex-1 md:justify-end md:items-end md:flex-col md:text-right
                flex-col flex   '
            >
               <h1 className='md:text-7xl font-medium font-serif text-5xl text-center mb-2 text-[#DDCA87] '>About Us</h1>
               <img src={images.spoon} alt='about_spoon' className='mb-8 h-10' />
               <p className='mb-8 pl-10 md:pr-0 md:pl-20 pr-10 text-center md:text-right'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In
                  sed odio nec aliquet eu proin mauris et.
               </p>
               <button
                  className='bg-[#DDCA87] text-black border-2 border-[#DDCA87] hover:text-[#DDCA87]
                hover:bg-black px-7 py-3 mx-10 md:mx-0 rounded-sm transition ease-in-out duration-1000 font-[Pacifico]'
                  type='button'
               >
                  <a href='/'>Know More</a>
               </button>
            </div>
            <div className=' mx-16 my-8'>
               <img src={images.knife} alt='knife' className='md:h-[810px] h-[405px]' />
            </div>
            <div
               className='md:flex md:flex-1 md:justify-start md:items-start md:flex-col md:text-right
                flex-col flex  '
            >
               <h1 className='md:text-7xl font-medium font-serif text-5xl text-center mb-2 text-[#DDCA87]'>Our History</h1>
               <img src={images.spoon} alt='about_spoon' className='mb-8 h-10' />
               <p className='mb-8 pl-10 md:pr-20 md:pl-0 pr-10 text-center md:text-left'>
                  Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi
                  aliquam In sed odio nec aliquet.
               </p>
               <button
                  className='bg-[#DDCA87] text-black border-2 border-[#DDCA87] hover:text-[#DDCA87]
                hover:bg-black px-7 py-3 mx-10 md:mx-0  rounded-sm transition ease-in-out duration-1000 font-[Pacifico] '
                  type='button'
               >
                  <a href='/'>Know More</a>
               </button>
            </div>
         </div>
      </div>
   );
};

export default AboutUs;
