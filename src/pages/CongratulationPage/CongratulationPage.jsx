import React,{useState, useEffect} from 'react';
import "./CongratulationPage.css";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import LogoImage from "../../assets/images/sevenUp_logo.webp";
import LeftHand from "../../assets/images/winningBottle.webp";
import RightHand from "../../assets/images/winningBottle2.webp";
import HotalImage from "../../assets/images/hotel_image.webp";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
const CongratulationPage = () => {

    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);
    const [confettiOn, setConfettiOn] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [showModal, setShowModal] = useState(false);
  
    useEffect(() => {
      // Animation Time Out
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 1200);
  
      // Confetti Time Out
      const confettiTimer = setTimeout(() => {
        setConfettiOn(true);
      }, 2700);
  
      // Button Show Time Out
      const buttonTimer = setTimeout(() => {
        setShowButton(true);
      }, 5000); // Adjust the time as needed
  
      // Clean up the timeouts when the component is unmounted
      return () => {
        clearTimeout(timer);
        clearTimeout(confettiTimer);
        clearTimeout(buttonTimer);
      };
    }, []);
  return (
    <>
     <Wrapper>
      {/* ///// Header Wrapper    ////// */}
      <div className="congrats_wrapper">
        <div className="congrats_logo_wrapper">
          <img src={LogoImage} className="img-fluid" alt="Logo" />
        </div>
        {/* ///////////  Celebration Wrapper   ///////////// */}
        <div className="congrats_celebration_wrapper">
          <img
            src={LeftHand}
            className={`leftHand ${animate ? "animate-leftHand" : ""}`}
          />

          <img
            src={RightHand}
            className={`rightHand ${animate ? "animate-rightHand" : ""}`}
          />
        </div>

        {confettiOn && (
          <Confetti
            width={1700}
            height={800}
            colors={["#FFE53F"]}
            tweenDuration={500}
            numberOfPieces={800}
          />
        )}

        {showButton && (
          <div className="congrats_button_wrapper">
            <button className="congrats_button">congratulations!</button>
            <button className="congrats_button">you have recieved <br /> your gift</button>
          </div>
        )}

      </div>
    </Wrapper>
    </>
  )
}

export default CongratulationPage