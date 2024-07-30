import React, { useEffect, useState } from "react";

import "./AnimationBottle.css";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import PakImage from "../../assets/images/new_images/pak-logo.webp";
import foodyy from "../../assets/images/lottie_files/foodelementss.json";
import BottleGif from "../../assets/images/gif_images/bottle-anim.gif";
import HeaderLottie from  "../../assets/images/lottie_files/lights_anim.json";
import Lottie from "lottie-react";

import { useNavigate } from "react-router-dom";
const AnimationBottle = () => {
  const [bottleClass, setBottleClass] = useState("");
  const [pakClass, setPakClass] = useState("pakClass");

  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {

      // navigate("/form");
    }, 7000);

    const timerr = setTimeout(() => {
      setPakClass('pakClassExit')
    }, 5500);

  }, [navigate]);
  useEffect(() => {
    const timer = setTimeout(() => {

      setBottleClass("slideDown");
    }, 1000); // 10 seconds

    return () => clearTimeout(timer);
  },  [navigate]);
  return (
    <Wrapper>
      <div className="animation_page_wrapper ">
   {/*  Header Wrapper */}
 
  <div className="animation_header_wrapper">
         
         <div className="header_mask img-fluid animate__animated animate__fadeInBottomRight header_lights img-fluid"> 
         <Lottie animationData={HeaderLottie}
            autoPlay={true} loop={false} 
            height='120px'
             className="" 
            />
         </div>
        </div> 

        <div className={`animation_pak_wrapper ${pakClass}`}>
          <img src={PakImage} className="img-fluid" alt="Meal Image " />
        </div>
        {/* Pak Image Wrapper */}
        <div className="" style={{width:'100%' , zIndex:'0', position:'absolute'}}>
          <Lottie animationData={foodyy} width='100%' className="bottle-img-fluid" />
        </div> 
        <div className="" style={{zIndex:'0'}}>
          <img src={BottleGif} className="bottle-img-fluid" alt="Meal Image " />
        </div> 

        {/* <div className={``}>
        <Lottie animationData={foodyy} className="bottle-img-fluid" />
      </div> */}


        
        

      {/* <div className={`animation_bottle_wrapper animate__animated animate__slideInLeft`}>
          <img className="Bottle-img-fluid " src={BottleGif}  alt="Bottle GIF" />
        </div> */}
        </div>
    </Wrapper>
  );
};

export default AnimationBottle;
