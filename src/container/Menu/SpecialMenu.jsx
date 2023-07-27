import React from "react";
import "../../index.css";
import { images, data } from "../../constants";
import { MenuItem } from "../../components";

const SpecialMenu = () => {
   return (
      <div className=''>
         <div className='text-center ' id='menu'>
            <h1 className='md:text-3xl text-2xl text-white font-[Lugrasimo] mb-4 capitalize'>menu that fits your palatte</h1>
            <img src={images.spoon} alt='' className='inline-flex justify-center items-center mb-4' />
            <h1 className='md:text-7xl text-3xl font-[Lugrasimo] text-[#DDCA87] capitalize'>today's special</h1>
         </div>

         <div className='md:flex md:justify-around py-8 items-center'>
            <div className='py-8 px-8'>
               <p className='text-white md:text-7xl text-4xl text-center md:py-12 capitalize font-mono'>wine & beer</p>
               <div className='py-4 '>
                  {data.wines.map((wine, index) => (
                     <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
                  ))}
               </div>
            </div>

            <div className=''>
               <img src={images.menu} alt='menu' className='w-[500px] h-full px-4' />
            </div>

            <div className='py-8 px-8'>
               <p className='text-white md:text-7xl text-3xl md:py-12 text-center capitalize font-mono'>cocktails</p>
               <div className='py-4 '>
                  {data.cocktails.map((cocktail, index) => (
                     <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                  ))}
               </div>
            </div>
         </div>
         <div>
            <button
               className='bg-[#DDCA87] text-black border-2 border-[#DDCA87] hover:text-[#DDCA87] hover:bg-black capitalize tracking-wider
                mx-auto mb-12 w-60 h-14 rounded-sm transition ease-in-out duration-1000 font-[Pacifico] flex flex-row items-center justify-center'
               type='button'
            >
               <a href='#'>view more</a>
            </button>
         </div>
      </div>
   );
};

export default SpecialMenu;
