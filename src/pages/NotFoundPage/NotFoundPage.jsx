import React, { useEffect } from "react";
import "./NotFoundPage.css";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../assets/images/lottie_files/heartbeatlogo.json";
import { useSelector } from "react-redux";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const qrCode = useSelector((state) => state?.qrCode?.qrCodeNumber);
  const architecture = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    console.log("Not Found Page Initialize");
  }, []);

  return (
    <>
      <Wrapper>
        {/*  Not Found Wrapper */}
        <div className="notFound_wrapper">
          {/* Logo Wrapper */}
          <div className="notFound_logo_wrapper">
            <Lottie className="" options={architecture} />
          </div>

          {/* Not Found Content */}
          <div className="notFound_content_wrapper">
          {qrCode ===  "/5TJ7qu" || qrCode ===  "/yzZI3Z" ? 
           <><h2>404</h2>
            <p>Page Not Found</p></>:
        
            <p>Please scan the <br /> QR code on any 7UP <br /> Pack to enter this <br /> contest!</p> }
            
          </div>

         
        </div>
      </Wrapper>
    </>
  );
};

export default NotFoundPage;
