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

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/animation");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Wrapper>
      <div className="landing_page_wrapper">
        {/* /////////  logo Wrapper  /////////// */}
        <div className="landing_logo_wrapper">
          <img src={LogoImage} className="img-fluid" alt="7up Logo" />
          <img src="" alt="" />
        </div>

        {/* /////////  Footer Wrapper  /////////// */}
        <div className="landing_footer_wrapper">
          <img
            src={FooterPlaces}
            className="img-fluid footer_place"
            alt="Emojis"
          />
          <img
            src={FooterWave}
            className="img-fluid footer_wave"
            alt="Emojis"
          />
        </div>

        {/* ///////// Meal Images ////////////// */}
        <img src={CTikka} className="img-fluid tikka" alt="Tikka" />
        <img src={DLemon} className="img-fluid d_lemon" alt="Lemon" />
        <img src={Biryani} className="img-fluid biryani" alt="Biryani" />
        <img src={UChilli} className="img-fluid u_chilli" alt="Chilli" />
        <img src={ULemon} className="img-fluid lemon" alt="Lemon" />
        <img src={Oat} className="img-fluid oats" alt="Cheesy Fries" />
        <img
          src={CheesyFries}
          className="img-fluid cheesy_fries"
          alt="Cheesy Fries"
        />
        <img src={FLemon} className="img-fluid f_lemon" alt="Lemon" />
        <img src={GolGappy} className="img-fluid gol_gappy" alt="Gol Gappy" />

        <img src={DChilli} className="img-fluid d_chilli" alt="Chilli" />
        <img
          src={GreenChilli}
          className="img-fluid green_chilli"
          alt="Green Chilli"
        />
        <img src={Tomoto} className="img-fluid tomoto" alt="Tomoto" />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
