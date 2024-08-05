import React, { useEffect, useRef } from "react";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import "./CongratulationPage.css";
import { useNavigate } from "react-router-dom";
import PakImage from "../../assets/images/new_images/congrats_image.webp";
import HeartLottie from "../../assets/images/lottie_files/hearts.json";
import Lottie from "lottie-react";
import HeaderLights from "../../assets/images/lottie_files/lights_anim.json";

const CongratulationPage = () => {
  const navigate = useNavigate();
  const lottieRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.clear();
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);
  useEffect(() => {
    console.log("Congratulation Page Initialize");
  }, []);
  return (
    <Wrapper>
      <div className="congrats_header_wrapper">
        <Lottie
          animationData={HeaderLights}
          autoPlay={true}
          loop={false}
          className="spinner_header_lottie"
          initialSegment={[100, 100]}
        />
      </div>
      <div className="congrats_wrapper">
        <div className="congrats_heading_wrapper">
          <span>CONGRATULATIONS!</span>
        </div>

        <div className="congrats_para_wrapper">
          <p>Your Prize Has Been Transferred</p>
          <p>To Your Jazzcash Account</p>
        </div>

        <div className="congrats_image_wrapper">
          <img src={PakImage} alt="Pakistan Image" />
        </div>

        <div className="congrats_heart_wrapper">
          <Lottie
            animationData={HeartLottie}
            autoPlay={true}
            loop={true}
            className="heart_lottie"
            lottieRef={lottieRef}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default CongratulationPage;
