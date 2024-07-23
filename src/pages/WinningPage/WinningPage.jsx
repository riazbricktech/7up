import React, { useState, useEffect } from "react";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import LogoImage from "../../assets/images/sevenUp_logo.webp";
import LeftHand from "../../assets/images/new_images/left_hand.webp";
import RightHand from "../../assets/images/new_images/right_hand.webp";
import Frame from "../../assets/images/new_images/frame.webp";
import Samosa from "../../assets/images/meal_images/samosa.webp";


import "./WinningPage.css";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const WinningPage = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [confettiOn, setConfettiOn] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const prizeName = useSelector((state) => state?.prizeDetail?.mealPrizeName);
  console.log(prizeName,"win page prizename 21")
  useEffect(() => {
    // Animation Time Out
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1200);

    // Confetti Time Out
    const confettiTimer = setTimeout(() => {
      setConfettiOn(true);
    }, 1300);

    // Button Show Time Out
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
      // Show modal 2 seconds after the button is shown
      setTimeout(() => {
        setShowModal(true);
      }, 500);
    }, 2500); // Adjust the time as needed

    // Clean up the timeouts when the component is unmounted
    return () => {
      clearTimeout(timer);
      clearTimeout(confettiTimer);
      clearTimeout(buttonTimer);
    };
  }, []);
  return (
    <Wrapper>

      {/*  WinninG Wrapper */}
      <div className="winner_wrapper">

      <div className="winner_frame_wrapper">
          <img src={Frame} className="img-fluid" alt="Logo" />
        <p>YOU WON!</p>
        </div>





      {/* ///// Header Wrapper    ////// */}
        <div className="winner_meal_wrapper">
          <img src={Samosa} className="img-fluid" alt="Logo" />
          <p>CHICKEN SAMOSA</p>
        </div>


        {/* ///////  Celebration Wrapper   /////// */}
        <div className="celebration_wrapper">
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
          <div className="you-won-button-wrapper">
            <button className="you-won-button">RS 500</button>
          </div>
        )}

{showModal && (
    <>
          {/* <div className="modal-overlay">
            <div className="modal-content">
              <h2>You Won</h2>
              <img src={HotalImage} alt="Hotel" />
              <div className="modal-description">Dinner Deal</div>
            </div> */}
              <button className="claim-button" onClick={()=> navigate("/jazzcash") }>claim price</button>
          {/* </div> */}
    </>
        )}
      </div>
    </Wrapper>
  );
};

export default WinningPage;
