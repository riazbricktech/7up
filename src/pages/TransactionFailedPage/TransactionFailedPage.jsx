import React, { useState, useEffect } from "react";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import Lottie from "lottie-react";
import "./TransactionFailedPage.css";
import { useNavigate } from "react-router-dom";
import SevenUpLottie from "../../assets/images/lottie_files/7UP_anim.json";
import { useSelector } from "react-redux";
import HeaderLights from "../../assets/images/lottie_files/lights_anim.json";
import resMessage from "../../constant/Response";

// Clear redux State
import { clearSpinFunction } from "../../redux/slice/SpinSlice";
import { useDispatch } from "react-redux";
import { clearUserFunction } from "../../redux/slice/CreateUserSlice";
import { clearTransactionFunction } from "../../redux/slice/TransactionSlice";
import { prizeName } from "../../redux/slice/WinPrizeSlice";
import { jcNumFunction } from "../../redux/slice/JcNumberSlice";


const TransactionFailedPage = () => {
  const dispatch = useDispatch();
  const transactionData = useSelector(
    (state) => state?.taction?.transactionData
  );


  const navigate = useNavigate();
  const [sevenUpDelay, setSevenUpDelay] = useState(false);
  const [errorMessage, seterrorMessage] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     // localStorage.clear();
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSevenUpDelay(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if(transactionData?.code === "G2P-T-2001"){
        navigate("/form");
  }
  }, [transactionData,navigate])


  useEffect(() => {
    if(transactionData?.response === "Something went wrong"){
      seterrorMessage(true)
      dispatch(clearSpinFunction());
      dispatch(clearUserFunction());
      dispatch(clearTransactionFunction());
      dispatch(jcNumFunction(""));
      dispatch(prizeName(null));

    }
  }, [transactionData])

  useEffect(() => {
    console.log("TransactionFailed Page Initialize");
  }, []);
  return (
    <Wrapper>
      <div className="failedPage_header_wrapper">
        <Lottie
          animationData={HeaderLights}
          autoPlay={true}
          loop={false}
          className="spinner_header_lottie"
          initialSegment={[100, 100]}
        />
      </div>
      <div className="failedPage_wrapper">
        {/* Images wrapper */}

        {/* Para wrapper */}
        <div className="failedPage_heading_wrapper">
          <p>TRANSACTION FAILED</p>
        </div>

        {/* Para wrapper */}
        {errorMessage ?
          <div className="failedPage_error_wrapper">
            <p>Something went wrong</p>
          </div>
          :
          <div className="failedPage_error_wrapper">
          <p>{resMessage}</p>
        </div>
           }  

        {/* Button wrapper */}
        {
transactionData?.response !== "Something went wrong"   &&  transactionData?.response  &&
          <div className="failedPage_button_wrapper">
          <button className="btn btn-primary" onClick={()=>{navigate('/jazzcash')}}>TRY A DIFFERENT NUMBER</button>
        </div>
        }

        {/* Bottom Lottie Animation */}
        {sevenUpDelay && (
          <div className="failedPage_bottom_img_wrapper">
            <Lottie
              animationData={SevenUpLottie}
              autoPlay={true}
              loop={false}
              className="failedPage_bottom_img"
            />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default TransactionFailedPage;
