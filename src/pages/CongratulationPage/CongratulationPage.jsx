import React, { useEffect, useRef } from "react";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import "./CongratulationPage.css";
import PakImage from "../../assets/images/new_images/congrats_image.webp";
import HeartLottie from "../../assets/images/lottie_files/hearts.json";
import Lottie from "lottie-react";
import HeaderLights from "../../assets/images/lottie_files/lights_anim.json";
import { clearSpinFunction } from "../../redux/slice/SpinSlice";
import { useDispatch } from "react-redux";
import { clearUserFunction } from "../../redux/slice/CreateUserSlice";
import { clearTransactionFunction } from "../../redux/slice/TransactionSlice";
import { prizeName } from "../../redux/slice/WinPrizeSlice";
import { jcNumFunction } from "../../redux/slice/JcNumberSlice";

const CongratulationPage = () => {
  const dispatch = useDispatch();
  const lottieRef = useRef();

  useEffect(() => {
    dispatch(clearSpinFunction());
    dispatch(clearUserFunction());
    dispatch(clearTransactionFunction());
    dispatch(jcNumFunction(""));
    dispatch(prizeName(null));
  }, [dispatch]);

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
