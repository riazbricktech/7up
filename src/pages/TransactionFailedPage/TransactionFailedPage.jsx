import React, { useState,useEffect } from "react";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import Lottie from "lottie-react";
import "./TransactionFailedPage.css";
import { useNavigate } from "react-router-dom";
import SevenUpLottie from "../../assets/images/lottie_files/7UP_anim.json";
import { useSelector } from "react-redux";
import HeaderLights from "../../assets/images/lottie_files/lights_anim.json";

const TransactionFailedPage = () => {
  const transactionData = useSelector((state) => state?.taction?.transactionData);
  const navigate = useNavigate();
const [sevenUpDelay,setSevenUpDelay]=useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.clear();
      navigate('/'); 
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSevenUpDelay(true)
    }, 1400);

    return () => clearTimeout(timer);
  }, [navigate]);


  useEffect(()=>{
    console.log("TransactionFailed Page Initialize");
  },[])
  return (
    <Wrapper>
        <div className="failedPage_header_wrapper">
          <Lottie
            animationData={HeaderLights}
            autoPlay={true}
            loop={false}
            className="spinner_header_lottie"
            initialSegment={[100,100]}
          />
        </div>
      <div className="failedPage_wrapper">
        {/* Images wrapper */}
      

        {/* Para wrapper */}
        <div className="failedPage_heading_wrapper">
          <p>TRANSACTION FAILED</p>
        </div>

        {/* Para wrapper */}
        {transactionData?.response && (
          <div className="failedPage_error_wrapper">
            <p>{transactionData?.response}</p>
          </div>
        )}

         {/* Button wrapper */}
         <div className="failedPage_button_wrapper">
          <button className="btn btn-primary">TRY A DIFFERENT NUMBER</button>
        </div>

        {/* Bottom Lottie Animation */}
        {sevenUpDelay &&
        <div className="failedPage_bottom_img_wrapper">
          <Lottie
            animationData={SevenUpLottie}
            autoPlay={true}
            loop={false}
            className="failedPage_bottom_img"
          />
        </div>}
      </div>
    </Wrapper>
  );
};

export default TransactionFailedPage;
