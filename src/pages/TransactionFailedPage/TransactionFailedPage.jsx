import React from "react";
import "./TransactionFailedPage.css";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import LogoImage from "../../assets/images/sevenUp_logo.webp";
import { useNavigate } from "react-router-dom";

const TransactionFailedPage = () => {
    const navigate = useNavigate();
  return (
    <Wrapper>
      {/*  Not Found Wrapper */}
      <div className="failedPage_wrapper">
        {/* Logo Wrapper */}
        <div className="failedPage_logo_wrapper">
          <img src={LogoImage} className="img-fluid" alt="Logo" />
        </div>

        {/* Not Found Content */}
        <div className="failedPage_content_wrapper">
          <h5>Transaction Failed</h5>
          <p>Try a different number</p>
        </div>

        {/* Redirect Button */}
        <div className="failedPage_button_wrapper">
          <button className="failedPage_button"  onClick={() => navigate("/")}>Next</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default TransactionFailedPage;
