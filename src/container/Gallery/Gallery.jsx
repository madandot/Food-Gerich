import React from "react";
import { images } from "../../constants";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import "../../index.css";
import { SubHeading } from "../../components";

const Gallery = () => {
   const scrollRef = React.useRef(null);

   const scroll = (direction) => {
      const { current } = scrollRef;

      if (direction === "left") {
         current.scrollLeft -= 300;
      } else {
         current.scrollLeft += 300;
      }
   };

   return (
      <div className='app__gallery flex__center'>
         <div className='app__gallery-content'>
            <SubHeading title='Instagram' />
            <h1 className='text-[#DDCA87] w-28 md:text-7xl font-[Cormorant] pb-4'>Photo Gallery</h1>
            <p className='text-[#AAAAAA]'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
            </p>
            <button type='button' className='bg-[#DDCA87] py-3 px-7 rounded-sm hover:bg-white animate-pulse'>
               View More
            </button>
         </div>
         <div className='app__gallery-images'>
            <div className='app__gallery-images_container' ref={scrollRef}>
               {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
                  <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
                     <img src={image} alt='gallery_image' />
                     <BsInstagram className='gallery__image-icon' />
                  </div>
               ))}
            </div>
            <div className='app__gallery-images_arrows'>
               <BsArrowLeftShort
                  className='gallery__arrow-icon text-white bg-black hover:bg-white hover:text-black'
                  onClick={() => scroll("left")}
               />
               <BsArrowRightShort
                  className='gallery__arrow-icon text-white bg-black hover:bg-white hover:text-black'
                  onClick={() => scroll("right")}
               />
            </div>
         </div>
      </div>
   );
};

export default Gallery;
