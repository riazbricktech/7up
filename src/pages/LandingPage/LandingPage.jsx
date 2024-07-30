import React, { useEffect } from "react";
import "./LandingPage.css";

import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import { useNavigate } from "react-router-dom";

import LogoImage from "../../assets/images/new_images/center_logo.webp";
import FooterPlaces from "../../assets/images/new_images/places.webp";
import FooterWave from "../../assets/images/new_images/waves.webp";

import CTikka from "../../assets/images/new_images/c_tikka.webp";
import Biryani from "../../assets/images/new_images/biryani.webp";
import CheesyFries from "../../assets/images/new_images/cheesy_fires.webp";
import DChilli from "../../assets/images/new_images/d_chilli.webp";
import DLemon from "../../assets/images/new_images/d_lemon_slice.webp";
import FLemon from "../../assets/images/new_images/f_lemon.webp";
import GolGappy from "../../assets/images/new_images/gol_gappy.webp";
import GreenChilli from "../../assets/images/new_images/green_chilli.webp";
import Tomoto from "../../assets/images/new_images/tomato.webp";
import UChilli from "../../assets/images/new_images/u_chilli.webp";
import ULemon from "../../assets/images/new_images/u_lemon_slice.webp";
import Oat from "../../assets/images/new_images/oats.webp";
import Lottie from 'react-lottie';
import animationData from "../../assets/images/lottie_files/heartbeatlogo.json";
import foodElementsJson from "../../assets/images/lottie_files/new.json";
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
    loop: true,
    autoplay: true,
    animationData: foodElementsJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const architecture = {
    loop: true,
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

<Lottie options={foodElements}  width='100%'/>
{/* <img src={CTikka} className="img-fluid tikka animate__animated animate__bounce animate__infinite infinite" alt="Tikka" /> 
<img src={DLemon} className="img-fluid d_lemon animate__animated animate__bounce animate__infinite infinite" alt="Lemon" />
<img src={Biryani} className="img-fluid biryani animate__animated animate__fadeInTopRight" alt="Biryani" />
<img src={UChilli} className="img-fluid u_chilli animate__animated animate__bounce animate__infinite infinite" alt="Chilli" />
<img src={ULemon} className="img-fluid lemon animate__animated animate__fadeInBottomRight" alt="Lemon" />
<img src={Oat} className="img-fluid oats animate__animated animate__fadeInBottomRight" alt="Cheesy Fries" />
<img
  src={CheesyFries}
  className="img-fluid cheesy_fries animate__animated animate__lightSpeedInRight"
  alt="Cheesy Fries"
/>
<img src={FLemon} className="img-fluid f_lemon animate__animated animate__bounceInDown" alt="Lemon" />
<img src={GolGappy} className="img-fluid gol_gappy animate__animated  animate__fadeInBottomLeft" alt="Gol Gappy" />

<img src={DChilli} className="img-fluid d_chilli animate__animated animate__heartBeat animate__infinite infinite" alt="Chilli" />
<img
  src={GreenChilli}
  className="img-fluid green_chilli animate__animated animate__heartBeat animate__infinite infinite"
  alt="Green Chilli"
/>
<img src={Tomoto} className="img-fluid tomoto animate__animated animate__shakeX animate__infinite infinite" alt="Tomoto" /> */}
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
