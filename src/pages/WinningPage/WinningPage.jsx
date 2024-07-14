import React from "react";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import LogoImage from "../../assets/images/sevenUp_logo.webp";
import LeftHand from "../../assets/images/winningBottle.webp";
import RightHand from "../../assets/images/winningBottle2.webp";

import "./WinningPage.css";
const WinningPage = () => {
  return (
    <Wrapper>
      {/* ///// Header Wrapper    ////// */}
      <div className="winner_wrapper">
        <div className="winner_logo_wrapper">
          <img src={LogoImage} className="img-fluid" alt="Logo" />
        </div>







           {/* ///////////  Celebration Wrapper   ///////////// */}
           <div className="celebration_wrapper">
      <img src={LeftHand}LogoImage alt="img-fluid" />

      <img src={LogoImage} alt="img-fluid" />

       </div>

      </div>


     
    </Wrapper>
  );
};

export default WinningPage;
