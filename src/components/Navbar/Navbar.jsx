import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "../../index.css";
import { useState } from "react";

const Navbar = () => {
   const [toggle, setToggleMenu] = useState(false);
   return (
      <nav className='app__navbar w-full  flex justify-between items-center bg-[#0c0c0c]  text-white font-sans text-base px-2 md:px-20 py-4'>
         <div className='app__navbar-logo flex justify-start items-center'>
            <img src={images.gericht} alt='app-logo' className='w-[250px] px-2' />
         </div>
         <ul className='app__navbar-link  min-[960px]:flex  shrink-0  justify-center items-center gap-x-4 font-sans text-2xl  hidden'>
            <li className='P__opensans hover:text-[#545454] transition-all ease-in-out'>
               <a href='/'>Home</a>
            </li>
            <li className='P__opensans hover:text-[#545454] transition-all ease-in-out'>
               <a href='#about'>About</a>
            </li>
            <li className='P__opensans hover:text-[#545454] transition-all ease-in-out'>
               <a href='#menu'>Menu</a>
            </li>
            <li className='P__opensans hover:text-[#545454] transition-all ease-in-out'>
               <a href='#award'>Awards</a>
            </li>
            <li className='P__opensans hover:text-[#545454] transition-all ease-in-out'>
               <a href='#contact'>Contact</a>
            </li>
         </ul>
         <div className='app__navbar-login min-[960px]:flex justify-end items-center gap-x-4 px-2 hidden font-sans text-2xl'>
            <a className='p__opensans transition-all ease-in-out hover:border-b-2 hover:border-[#DCCA87]' href='#login'>
               Login / Register
            </a>
            <div className='w-[1px] h-[30px] bg-[#AAAAAA]'></div>
            <div>
               <a className='p__opensans transition-all ease-in-out hover:border-b-2 hover:border-[#DCCA87] ' href='/'>
                  Book Table
               </a>
            </div>
         </div>
         <div className='app__navbar-smallscreen min-[960px]:hidden flex'>
            <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
            {toggle && (
               <div className='app__navbar-smallscreen_overlay fixed top-0 left-0 w-full h-[100vh] bg-[#0c0c0c] flex-col z-[5] '>
                  <MdOutlineRestaurantMenu
                     fontSize={27}
                     className='overlay__close text-2xl bg-[#DDCA87] absolute top-5 right-5'
                     onClick={() => setToggleMenu(false)}
                  />
                  <ul className='app__navbar-smallscreen_links  py-10 text-center uppercase'>
                     <li className='P__opensans hover:text-[#545454] transition-all ease-in-out py-10'>
                        <a href='/'>Home</a>
                     </li>
                     <li className='P__opensans hover:text-[#545454] transition-all ease-in-out py-10'>
                        <a href='#about'>About</a>
                     </li>
                     <li className='P__opensans hover:text-[#545454] transition-all ease-in-out py-10'>
                        <a href='#menu'>Menu</a>
                     </li>
                     <li className='P__opensans hover:text-[#545454] transition-all ease-in-out py-10'>
                        <a href='#award'>Awards</a>
                     </li>
                     <li className='P__opensans hover:text-[#545454] transition-all ease-in-out py-10'>
                        <a href='#contact'>Contact</a>
                     </li>
                     <li className='P__opensans hover:text-[#545454] transition-all ease-in-out py-10'>
                        <a href='/'>sign up</a>
                     </li>
                     <li className='P__opensans hover:text-[#545454] transition-all ease-in-out py-10'>
                        <a href='/'>book table</a>
                     </li>
                  </ul>
               </div>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
