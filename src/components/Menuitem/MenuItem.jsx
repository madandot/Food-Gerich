import React from "react";

import "../../index.css";

const MenuItem = ({ title, price, tags }) => {
   return (
      <div className=' text-white'>
         <div className='flex justify-between py-4 '>
            <div className=''>
               <p className='text-[#DDCA87] capitalize text-3xl font-[Lugrasimo] tracking-wide'>{title}</p>
            </div>
            <div className=''>
               <p className='text-2xl'>{price}</p>
            </div>
         </div>
         <div className='pb-8'>
            <p className='text-[#AAAAAA]'>{tags}</p>
         </div>
      </div>
   );
};

export default MenuItem;
