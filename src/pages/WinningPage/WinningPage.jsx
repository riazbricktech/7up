import React, { useState, useEffect } from "react";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
// import LogoImage from "../../assets/images/sevenUp_logo.webp";
// import LeftHand from "../../assets/images/new_images/left_hand.webp";
// import RightHand from "../../assets/images/new_images/right_hand.webp";
import Frame from "../../assets/images/new_images/frame.webp";
// import Samosas from "../../assets/images/meal_images/samosa.webp";
import "./WinningPage.css";
// import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Lottie from 'lottie-react';

// Animated Can Lottie
import AnimatedCan from "../../assets/images/lottie_files/Can-animation.json";

// Button Lottie
import ClaimButton from  "../../assets/images/lottie_files/claim-button.json";


// Price Value Lottie
import FiftyPrice from "../../assets/images/lottie_files/50-pricing.json";
import HundredPrice from "../../assets/images/lottie_files/100-pricing.json";
import ThousandPrice from "../../assets/images/lottie_files/1000-pricing.json";
import TenThousandPrice from "../../assets/images/lottie_files/10000-pricing.json";

// Meal Lottie
import AndaBurger from "../../assets/images/lottie_files/anda-burger.json";
import BBQ from "../../assets/images/lottie_files/BBQ.json";
import Biryani from "../../assets/images/lottie_files/biryani.json";
import Broast from "../../assets/images/lottie_files/broast.json";
import Burger from "../../assets/images/lottie_files/burger.json";
import Haleem from "../../assets/images/lottie_files/haleem.json";
import ParathaRoll from "../../assets/images/lottie_files/paratha-roll.json";
import Pasta from "../../assets/images/lottie_files/pasta.json";
import Sushi from "../../assets/images/lottie_files/sushi.json";
import Samosa from  "../../assets/images/lottie_files/samosa.json";


const price ={
  50: FiftyPrice,
  100: HundredPrice,
  1000: ThousandPrice,
  10000: TenThousandPrice
}



const Meal={
  
  "SAMOSA": Samosa,
  "PARATHA ROLL": ParathaRoll,
  "ANDA BURGER": AndaBurger,
  "BURGER" : Burger,
  "HALEEM" : Haleem,
  "BIRYANI" : Biryani,
  "CHICKEN BROAST": Broast,
  "BBQ" : BBQ,
  "PASTA": Pasta,
  "SUSHI" : Sushi,
};

const WinningPage = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [confettiOn, setConfettiOn] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const prizeName = useSelector((state) => state?.prizeDetail?.mealPrizeName);
  const spinData = useSelector((state) => state?.spin?.spinData);

  const prizeValue = spinData?.response?.return_prize_amount;

  console.log(prizeName,"win page prizename ------------- 23")
  console.log(prizeValue,"prizeValue  ---------- 24");


  // const defaultOptions = {
  //   loop: false,
  //   autoplay: true,
  //   animationData: price[100],
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };




  useEffect(() => {
    // Animation Time Out
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1200);

    // Confetti Time Out
    // const confettiTimer = setTimeout(() => {
    //   setConfettiOn(true);
    // }, 1300);

    // Button Show Time Out
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
      // Show modal 2 seconds after the button is shown
      setTimeout(() => {
        setShowModal(true);
      }, 500);
    }, 2500); // Adjust the time as needed

    return () => {
      clearTimeout(timer);
      // clearTimeout(confettiTimer);
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
    
<Lottie animationData={Meal[prizeName]}
            autoPlay={true} loop={false} 
            className="meal_lottie"
            />
           
        </div>


        {/* ///////  Celebration Wrapper   /////// */}
        <div className="celebration_wrapper">

        {animate && <Lottie animationData={AnimatedCan}
            autoPlay={true} loop={false} 
            className="animated_can_lottie"
            />}
        
        </div>

{/* confetti */}
        {/* {confettiOn && (
          <Confetti
            width={1700}
            height={800}
            colors={["#FFE53F"]}
            tweenDuration={500}
            numberOfPieces={800}
          />
        )} */}

        {showButton && (
          <div className="you-won-button-wrapper">
                 
                    <Lottie animationData={price[prizeValue]}
            autoPlay={true} loop={false} 
            className="price_lottie"
            />
         
          </div>
        )}

{showModal && (
    <>
              <Lottie animationData={ClaimButton}
            autoPlay={true} loop={false} 
            className="claim-button"  onClick={()=> navigate("/jazzcash") }
            />
        
    </>
        )}
      </div>
    </Wrapper>
  );
};

export default WinningPage;
