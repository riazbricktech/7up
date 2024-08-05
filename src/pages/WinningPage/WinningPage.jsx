import React, { useState, useEffect } from "react";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import Frame from "../../assets/images/new_images/frame.webp";
import "./WinningPage.css";
import Lottie from "lottie-react";

// Animated Can Lottie
import AnimatedCan from "../../assets/images/lottie_files/Can-animation.json";
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
import Samosa from "../../assets/images/lottie_files/samosa.json";
import HeaderLights from "../../assets/images/lottie_files/lights_anim.json";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { transaction } from "../../redux/actions/TransactionAction";

const price = {
  50: FiftyPrice,
  100: HundredPrice,
  1000: ThousandPrice,
  10000: TenThousandPrice,
};

const Meal = {
  SAMOSA: Samosa,
  "PARATHA ROLL": ParathaRoll,
  "ANDA BURGER": AndaBurger,
  BURGER: Burger,
  HALEEM: Haleem,
  BIRYANI: Biryani,
  BROAST: Broast,
  BBQ: BBQ,
  SUSHI: Sushi,
  PASTA: Pasta,
};

const WinningPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const prizeName = useSelector((state) => state?.prizeDetail?.mealPrizeName);
  const spinData = useSelector((state) => state?.spin?.spinData);
  const userData = useSelector((state) => state?.user?.createUserData);
  console.log(prizeName, "prizeName");

  const isLoading = useSelector((state) => state?.taction?.isLoading);

  const return_transaction_id = userData?.response?.return_transaction_id;
  const return_user_id = userData?.response?.return_user_id;
  const return_phone_user = userData?.response?.return_phone_user;
  const return_prize_amount = spinData?.response?.return_prize_amount;

  const jazzCashData = {
    receiver_number: return_phone_user,
    amount: return_prize_amount,
    transaction_id: return_transaction_id,
    user_id: return_user_id,
  };

  const handleJazzCashTransaction = () => {
    dispatch(transaction(jazzCashData)).then((data) => {
      if (data?.payload?.status === 1) {
        navigate("/congrats");
      } else if (
        data?.payload?.status === 0 &&
        data?.payload?.code === "G2P-T-2001"
      ) {
        navigate("/jazzcash");
        return;
      } else {
        navigate("/transactionfailed");
      }
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
      setTimeout(() => {
        setShowModal(true);
      }, 500);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(buttonTimer);
    };
  }, []);

  useEffect(() => {
    if (!spinData) {
      navigate("/form");
    }
  }, [spinData]);

  useEffect(() => {
    console.log("Winning Page Initialize");
  }, []);
  return (
    <Wrapper>
      {/*  WinninG Wrapper */}
      <div className="winner_wrapper">
        <div className="winner_header_wrapper">
          <Lottie
            animationData={HeaderLights}
            autoPlay={true}
            loop={false}
            className="winner_header_lottie"
            initialSegment={[100, 100]}
          />
        </div>
        <div className="winner_frame_wrapper">
          <img src={Frame} className="img-fluid" alt="Logo" />
          <p>YOU WON!</p>
        </div>

        {/*  Header Wrapper     */}
        <div className="winner_meal_wrapper">
          <Lottie
            animationData={Meal[prizeName]}
            autoPlay={true}
            loop={false}
            className="meal_lottie"
          />
        </div>

        {/*   Celebration Wrapper  */}
        <div className="celebration_wrapper">
          {animate && (
            <Lottie
              animationData={AnimatedCan}
              autoPlay={true}
              loop={false}
              className="animated_can_lottie"
            />
          )}
        </div>

        {showButton && (
          <div className="you-won-button-wrapper">
            <Lottie
              animationData={price[return_prize_amount]}
              autoPlay={true}
              loop={false}
              className="price_lottie"
            />
          </div>
        )}

        {showModal && (
          <>
            <button
              className="claim-button"
              disabled={isLoading}
              onClick={handleJazzCashTransaction}
            >
              {isLoading ? (
                <div className="spinner-border text-warning mt-1" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "claim prize"
              )}
            </button>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default WinningPage;
