import React from "react";
import "../styles/LandingPage.css";
import HeaderImage from "../assets/images/header_image.png";
import LogoImage from "../assets/images/sevenUp_logo.png";
import BottleImage from "../assets/images/sevenUp_bottle.png";
import FooterImage from "../assets/images/footer_image.png";

const LandingPage = () => {
  return (
    <div className="container-fluid landingPage_container">
      <div className="row">
        <div className="col-12 landingPage_col">
          {/* ///// Header Wrapper    ////// */}
          <div className="header_image_wrapper">
            <img src={HeaderImage} className="img-fluid" alt="Pakistan" />
          </div>
          {/* /////////  logo Wrapper  /////////// */}

          <div className="logo_wrapper">
            <img src={LogoImage} className="img-fluid"  alt="7up Logo"  />
          </div>

          {/* /////////  Bottle Wrapper  /////////// */}

          <div className="Bottle_wrapper">
            <img src={BottleImage} className="img-fluid" alt="7up Bottle" />
          </div>

          {/* /////////  Bottle Wrapper  /////////// */}

          <div className="Footer_wrapper">
            <img src={FooterImage} className="img-fluid" alt="Emojis" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
