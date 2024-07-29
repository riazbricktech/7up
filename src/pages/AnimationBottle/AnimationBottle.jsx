import React, { useEffect, useState } from "react";

import "./AnimationBottle.css";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import PakImage from "../../assets/images/new_images/pak_image.webp";
import HeaderMask from "../../assets/images/new_images/header_mask.webp";
import HeaderLight from "../../assets/images/new_images/header_lights.webp";
import MealImage from "../../assets/images/new_images/collection_of_meal.webp";
import BottleImage from "../../assets/images/sevenUp_bottle.webp";
import BottleGif from "../../assets/images/gif_images/bottle-background.gif";

import Lottie from "lottie-react";

import { useNavigate } from "react-router-dom";
const AnimationBottle = () => {
  const [bottleClass, setBottleClass] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/form");
    }, 6500);

    return () => clearTimeout(timer);
  }, [navigate]);
  useEffect(() => {
    const timer = setTimeout(() => {
      
      setBottleClass("slideDown");
    }, 1000); // 10 seconds

    return () => clearTimeout(timer);
  },  [navigate]);
  return (
    <Wrapper>
      {/* <div className="animation_page_wrapper"> */}
   {/*  Header Wrapper */}
   {/* <div className="animation_header_wrapper">
          <img src={HeaderMask} className="header_mask img-fluid animate__animated animate__fadeInBottomRight" alt="Mask Image " />
          <img src={HeaderLight} className="header_lights img-fluid " alt="Lights Image " />
        </div> */}


        {/* Pak Image Wrapper */}
        {/* <div className="animation_pak_wrapper ">
          <img src={PakImage} className="img-fluid" alt="Meal Image " />
        </div> */}

      


        
        

      <div className={`animation_bottle_wrapper animate__animated animate__slideInLeft`}>
          <img className="Bottle-img-fluid " src={BottleGif}  alt="Bottle GIF" />
        </div>
    </Wrapper>
  );
};

export default AnimationBottle;
