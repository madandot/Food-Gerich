import React from "react";
import "../../index.css";
import { images } from "../../constants";
const SubHeading = ({ title }) => {
   return (
      <div className='mb-4 text-[#fff]'>
         <p className='font-[Lumanosimo]  text-3xl capitalize mb-1'>{title}</p>
         <img src={images.spoon} alt='spoon' className='ml-14  md:ml-0' />
      </div>
   );
};

export default SubHeading;
