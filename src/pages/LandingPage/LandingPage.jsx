import React, { useState, useEffect, useRef } from "react";
import "./LandingPage.css";
import HeaderImage from "../../assets/images/header_image.webp";
import LogoImage from "../../assets/images/sevenUp_logo.webp";
import BottleImage from "../../assets/images/sevenUp_bottle.webp";
import FooterImage from "../../assets/images/footer_image.webp";

import BottleNeck from "../../assets/images/heart_cap.webp";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const imgElement = imageRef.current;
    if (imgElement && imgElement.complete) {
      imgElement.style.display = "none";
      void imgElement.offsetHeight; // Trigger reflow
      imgElement.style.display = "block";
    } else if (imgElement) {
      imgElement.addEventListener("load", () => {
        imgElement.style.display = "none";
        void imgElement.offsetHeight; // Trigger reflow
        imgElement.style.display = "block";
      });
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // navigate("/form");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Wrapper>
      {/* ///// Header Wrapper    ////// */}
      <div className="landing_header_wrapper">
        <img src={HeaderImage} className="img-fluid" alt="Pakistan" />
      </div>

      {/* /////////  logo Wrapper  /////////// */}
      <div className="landing_logo_wrapper">
        <img src={LogoImage} className="img-fluid" alt="7up Logo" />
      </div>

      {/* /////////  Bottle Wrapper  /////////// */}
      <div className="landing_bottle_wrapper">
        <img src={BottleImage} className="img-fluid" alt="7up Bottle" />
      </div>

      {/* /////////  Bottle Wrapper  /////////// */}
      <div className="landing_footer_wrapper">
        <img
          src={FooterImage}
          className="img-fluid fadeIn"
          alt="Emoji"
          ref={imageRef}
        />
      </div>

      {/* /////////  Bottle neck Wrapper  /////////// */}
      <div className="landing_bottleNeck_wrapper">
        <img src={BottleNeck} className="img-fluid" alt="7up Bottle" />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
