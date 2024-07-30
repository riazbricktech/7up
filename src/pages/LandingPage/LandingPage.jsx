import React, { useEffect } from "react";
import "./LandingPage.css";

import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import { useNavigate } from "react-router-dom";

import Lottie from 'react-lottie';
import animationData from "../../assets/images/lottie_files/heartbeatlogo.json";
import foodElementsJson from "../../assets/images/lottie_files/foodelements.json";
import architectureJson from "../../assets/images/lottie_files/architecture-nobg.json";
const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      // navigate("/animation");
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const foodElements = {
    loop: false,
    autoplay: true,
    animationData: foodElementsJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const architecture = {
    loop: false,
    autoplay: true,
    animationData: architectureJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Wrapper>
        {/* <div className="lottie_animation">
          <Lottie options={defaultOptions} height='100vh' width={500} />
        </div> */}
      <div className="landing_page_wrapper">
      <div className="foodElements" >

<Lottie options={foodElements}  width='100%' height='auto' />
</div>
        <div className="landing_logo_wrapper ">
        
          <Lottie className="" options={defaultOptions} height='300px' width='200px' />
        </div>

     
        <div className="landing_footer_wrapper"> 
        <Lottie className="" options={architecture}  />
          {/* <img
            src={FooterPlaces}
            className="img-fluid footer_place animate__animated animate__rotateInDownLeft"
            alt="Emojis"
          />
          <img
            src={FooterWave}
            className="img-fluid footer_wave animate__animated animate__bounceInUp"
            alt="Emojis"
          /> */}
        </div> 

       
   
      </div>
    </Wrapper>
  );
};

export default LandingPage;
