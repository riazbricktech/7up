import React, { useState } from "react";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import "./CongratulationPage.css";
import { useNavigate } from "react-router-dom";
import { validatePakistaniPhoneNumber } from '../../services/NumberValidation';
import HeaderMask from "../../assets/images/new_images/header_mask.webp";
import HeaderLight from "../../assets/images/new_images/header_lights.webp";
import PakImage from "../../assets/images/new_images/congrats_image.webp";
const CongratulationPage = () => {


  return (
    <Wrapper>
      <div className="congrats_wrapper">
        <div className="congrats_header_wrapper">
          <img src={HeaderMask} className="img-fluid congrats_headerMask" alt="Header Mask" />
          <img src={HeaderLight} className="img-fluid congrats_headerLight" alt="Lights" />
        </div>
        <div className="congrats_heading_wrapper">
      <span>CONGRATULATIONS!</span>
        </div>

        <div className="congrats_para_wrapper">

          <p>YOUR PRIZE HAS BEEN TRANSFERRED </p>
          <p>TO YOUR JAZZCASH ACCOUNT</p>
        </div>

        <div className="congrats_image_wrapper">
           <img src={PakImage} alt="Pakistan Image" />
        </div>
      </div>
    </Wrapper>
  );
};

export default CongratulationPage;
