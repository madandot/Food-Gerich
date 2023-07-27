import React from "react";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";

import "../../index.css";

const Header = () => (
   <div className='bg-[#0c0c0c] md:flex md:justify-around md:items-center md:h-[700px] text-center md:text-start  py-8 mb-8' id='home'>
      <div className='md:w-[500px]'>
         <SubHeading title='chase the  new flavour' />
         <h1 className='text-[#DCCA87] font-[Pacifico] tracking-wider capitalize md:text-7xl  text-4xl font-bold '>
            the key to fine dining
         </h1>
         <p className='my-2 text-white md:w-[700px] md:py-4'>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
         </p>
         <button
            className='text-black bg-[#DDCA87] border-2 border-[#DDCA87] 
         font-[pacifico] hover:bg-black hover:text-[#DDCA87] hover:animate-bounce capitalize py-3 px-8 my-8 '
            type='button'
         >
            <a href='#'>explore more</a>
         </button>
      </div>
      <div className=''>
         <img className='w-[500px] h-full px-8' src={images.welcome} alt='welcome' />
      </div>
   </div>
);

export default Header;
