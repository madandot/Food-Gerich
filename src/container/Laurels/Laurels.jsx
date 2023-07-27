import React from "react";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import "../../index.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
   <div className='app__laurels_awards-card flex md:justify-start  items-center flex-wrap mt-8 cursor-default '>
      <img src={imgUrl} alt='awards' className='w-[100px] h-[100px] ' />
      <div className=' text-white flex flex-col  ml-4 mb-4'>
         <p className='' style={{ color: "#DCCA87" }}>
            {title}
         </p>
         <p className=''>{subtitle}</p>
      </div>
   </div>
);

const Laurels = () => (
   <div className=' md:flex md:justify-around md:py-20 ' id='award'>
      <div className='pl-8 '>
         <h1 className='text-white font-[cormorant] text-2xl pb-4'>Awards & recognition</h1>
         <h1 className='text-[#DDCA87] text-6xl font-[Cormorant] pb-8'>Our Laurels</h1>
         <div className=''>
            {data.awards.map((award) => (
               <AwardCard award={award} key={award.title} />
            ))}
         </div>
      </div>

      <div className=''>
         <img src={images.laurels} alt='laurels_img' className='md:w-[500px] md:h-full w-[400px] h-[400px] mt-8 p-8 hidden md:block' />
      </div>
   </div>
);

export default Laurels;
