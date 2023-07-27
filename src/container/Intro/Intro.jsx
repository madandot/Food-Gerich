import React from "react";
import "../../index.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

const Intro = () => {
   const [playVideo, setPlayVideo] = React.useState();
   const vidRef = React.useRef();
   const handleVideo = () => {
      setPlayVideo((prevPlayVideo) => !prevPlayVideo);
      if (playVideo) {
         vidRef.current.pause();
      } else {
         vidRef.current.play();
      }
   };
   return (
      <div className=' relative inset-0 md:py-20 flex justify-center items-center '>
         <video
            className='md:w-full md:h-[800px] w-[300px] h-[400px]'
            src={meal}
            ref={vidRef}
            type='video/mp4'
            loop
            controls={false}
            muted
         ></video>
         <div className=' absolute md:top-[40%] md:left-[45%] z-[2] border-2 border-white rounded-full text-9xl'>
            <div className='' onClick={handleVideo}>
               {playVideo ? <BsPauseFill color='#fff' fontSize={90} /> : <BsFillPlayFill color='#fff' fontSize={90} />}
            </div>
         </div>
      </div>
   );
};

export default Intro;
