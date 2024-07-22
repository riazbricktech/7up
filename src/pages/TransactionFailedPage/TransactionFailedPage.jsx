

import React, { useState } from "react";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import "./TransactionFailedPage.css";
import { useNavigate } from "react-router-dom";
import { validatePakistaniPhoneNumber } from "../../services/NumberValidation";
import HeaderMask from "../../assets/images/new_images/header_mask.webp";
import HeaderLight from "../../assets/images/new_images/header_lights.webp";
import SevenUPLogo from "../../assets/images/new_images/seven_up_bottom.webp";
const TransactionFailedPage = () => {
  return (
    <Wrapper>
      <div className="failedPage_wrapper">
        {/* Images wrapper */}
        <div className="failedPage_header_wrapper">
          <img
            src={HeaderMask}
            className="img-fluid failedPage_headerMask"
            alt="Header Mask"
          />
          <img
            src={HeaderLight}
            className="img-fluid failedPage_headerLight"
            alt="Lights"
          />
        </div>

        {/* Para wrapper */}
        <div className="failedPage_heading_wrapper">
          <p>TRANSACTION FAILED</p>
        </div>

        {/* Button wrapper */}
        <div className="failedPage_button_wrapper">
          <button className="btn btn-primary">TRY A DIFFERENT NUMBER</button>
        </div>

               {/* Button wrapper */}
               <div className="failedPage_bottomLogo_wrapper">
          <img src={SevenUPLogo} alt="Seven Bottom" />
        </div>
      </div>
    </Wrapper>
  );
};

export default TransactionFailedPage;
