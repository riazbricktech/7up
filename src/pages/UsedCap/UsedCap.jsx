import React from "react";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";

import Used_Cap from  "../../assets/images/used_cap.webp";
import BottleImage from "../../assets/images/sevenUp_bottle.webp";
import HeartImage from "../../assets/images/heart.webp";
import "./UsedCap.css";
const UsedCap = () => {
 
    return (
        <>
          <Wrapper>
            <div className="usedCap_wrapper">
                {/* lossPage Logo Wrapper */}
              <div className="usedCap_cap_wrapper">
                <img src={Used_Cap} className="img-fluid" alt="Logo" />
              </div>
              {/* Button Wrapper */}
              <div className="usedCap_button_wrapper">
                <button type="submit" className="btn btn-primary">
                scan new qr code
                </button>
              </div>
              {/* Bottle Wrapper */}
      <div className="usedCap_bottle_wrapper">
        <img src={BottleImage} className="img-fluid" alt="7up Bottle" />
      </div>
    
                {/* Bottle Wrapper */}
                <div className="usedCap_stickerOne_wrapper">
        <img src={HeartImage} className="img-fluid" alt="7up Bottle" />
      </div>
    
                {/* Bottle Wrapper */}
                <div className="usedCap_stickerTwo_wrapper">
        <img src={HeartImage} className="img-fluid" alt="7up Bottle" />
      </div>
            </div>
          </Wrapper>
        </>
      );
  
}

export default UsedCap