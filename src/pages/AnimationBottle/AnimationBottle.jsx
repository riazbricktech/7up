import React, { useEffect, useState } from "react";
import "./AnimationBottle.css";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import PakImage from "../../assets/images/new_images/pak-logo.webp";
import foodyy from "../../assets/images/lottie_files/shabbir-neww.json";
import BottleGif from "../../assets/images/gif_images/bottle-anim.gif";
import HeaderLottie from "../../assets/images/lottie_files/lights_anim.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

const AnimationBottle = () => {
  const [bottleClass, setBottleClass] = useState("");
  const [pakClass, setPakClass] = useState("pakClass");
  const [headerClass, setHeaderClass] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/form");
    }, 6000);

    const timerr = setTimeout(() => {
      setPakClass("pakClassExit");
      setHeaderClass("headerMaskExit"); 
    }, 5500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timerr);
    };
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBottleClass("slideDown");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      <div className="animation_page_wrapper">
        <div className="animation_header_wrapper">
          <div className={`header_mask img-fluid header_lights img-fluid ${headerClass}`}>
            <Lottie animationData={HeaderLottie} autoPlay={true} loop={false} height="120px" />
          </div>
        </div>

        <div className={`animation_pak_wrapper ${pakClass}`}>
          <img src={PakImage} className="img-fluid" alt="Meal Image" />
        </div>

        <div className="foodElem " style={{ width: '100%', zIndex: '0', position: 'absolute', top:'8%' }}>
          <Lottie animationData={foodyy} width="100%" className="bottle-img-fluid" />
        </div>

        <div className="" style={{ zIndex: '0' }}>
          <img src={BottleGif} className="bottle-img-fluid" alt="Meal Image" />
        </div>
      </div>
    </Wrapper>
  );
};

export default AnimationBottle;
