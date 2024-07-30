import React, { useState, useEffect } from "react";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import Frame from "../../assets/images/new_images/frame.webp";
import "./WinningPage.css";
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
import HeaderLights from  "../../assets/images/lottie_files/lights_anim.json";

import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { transaction } from "../../redux/actions/TransactionAction";




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
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(false);
  // const [confettiOn, setConfettiOn] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const prizeName = useSelector((state) => state?.prizeDetail?.mealPrizeName);
  const spinData = useSelector((state) => state?.spin?.spinData);
  const userData = useSelector((state) => state?.user?.createUserData);

  const isLoading = useSelector(
    (state) => state?.taction?.isLoading
  );
  // const {return_prize_amount}=spinData?.response;
  // const {return_transaction_id, return_user_id,return_phone_user}=userData?.response; 



  const return_transaction_id = userData?.response?.return_transaction_id;
  const return_user_id = userData?.response?.return_user_id;
  const return_phone_user =   userData?.response?.return_phone_user;
  const return_prize_amount = spinData?.response?.return_prize_amount;



  // console.log(return_transaction_id,"return_transaction_id");
  // console.log(return_user_id,"return_user_id");
  // console.log(return_phone_user,"return_phone_user");
  // console.log(return_prize_amount,"return_prize_amount");
  // const jazzCashData ={
  //   receiver_number:return_phone_user,
  //   amount:`${return_prize_amount}.00`,
  //   transaction_id: return_transaction_id,
  //   user_id:return_user_id,
  // };

    const jazzCashData ={
    receiver_number:return_phone_user,
    amount:return_prize_amount,
    transaction_id: return_transaction_id,
    user_id:return_user_id,
  };

  //   const jazzCashData ={
  //   receiver_number: `03234182009`,
  //   amount:`50.00`,
  //   transaction_id: 88,
  //   user_id:92,
  // };

console.log(jazzCashData,"jazzCashData");

const handleJazzCashTransaction =()=>{


  dispatch(transaction(jazzCashData)).then((data)=>{
    console.log(data?.payload,"data *-+-*+-*--*/**/*+");
    if(data?.payload?.status === 1)
      {
        navigate("/congrats");
      }
      else if(data?.payload?.status === 0 &&  data?.payload?.code === "G2P-T-2001" ){
        // setTransactionFailedError("*This number is not on JazzCash");
        navigate("/jazzcash");
        return
      }
      else{
        navigate("/transactionfailed");

      }
  })
}


  useEffect(() => {
    // Animation Time Out
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1200);

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
      <div className="winner_header_wrapper">
      <Lottie animationData={HeaderLights}
            autoPlay={true} loop={false} 
            className="winner_header_lottie" 
            />
</div>
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
                 
                    <Lottie animationData={price[return_prize_amount]}
            autoPlay={true} loop={false} 
            className="price_lottie"
            />
         
          </div>
        )}

{showModal && (
    <>
 <button className="claim-button" disabled={isLoading}  onClick={handleJazzCashTransaction}> {isLoading ? <div className="spinner-border text-warning mt-1" role="status">
  <span className="visually-hidden">Loading...</span>
</div> : "claim price"}</button>

              {/* <Lottie animationData={ClaimButton}
            autoPlay={true} loop={false} 
            className="claim-button" 
            onClick={handleJazzCashTransaction}
            //  onClick={()=> navigate("/jazzcash") }
            /> */}
        
    </>
        )}
      </div>
    </Wrapper>
  );
};

export default WinningPage;
