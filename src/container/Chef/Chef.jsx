import React from "react";
import { images } from "../../constants";
import { SubHeading, subHeading } from "../../components";
import "../../index.css";

const Chef = () => {
   return (
      <div className='md:flex  py-20 max-w-7xl mx-auto  text-white'>
         <div className=''>
            <img src={images.chef} alt='' className='w-full h-full md:px-0 py-4 px-4' />
         </div>
         <div className=' md:px-20 px-4'>
            <SubHeading title="chef's world" />
            <h1 className='text-[#DDCA87] md:text-7xl text-3xl font-[Lumanosimo] md:py-2 md:mb-8 leading-[100px]'>What We Believe In</h1>
            <div className=''>
               <img src={images.quote} alt='' className=' mr-4 mb-4 w-[47px] h-[40px]' />
               <p className=' text-[#686868] text-lg py-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .auctor sit iaculis in arcu. Vulputate nulla lobortis
                  mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer
                  curabitur semper sit nunc.
               </p>
            </div>
            <h1 className='text-[#DDCA87] py-2 text-lg font-[lumanosimo]'>Kevin Luo</h1>
            <p className='text-gray-400 py-2'>Chef & Founder</p>
            <img src={images.sign} alt='sign' className='my-2  h-[100px]' />
         </div>
      </div>
   );
};

export default Chef;
