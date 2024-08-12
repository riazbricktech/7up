import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Spinner.css";
import { v4 as uuidv4 } from "uuid";
import { Wheel } from "react-custom-roulette";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import BottleImage from "../../assets/images/sevenUp_bottle.webp";
import { useSelector, useDispatch } from "react-redux";
import { spinPrice } from "../../redux/actions/SpinAction";
import BetterLuckModal from "../../components/BetterLuckModal/BetterLuckModal";
import { prizeName } from "../../redux/slice/WinPrizeSlice";
import Lottie from "lottie-react";
import HeaderLights from "../../assets/images/lottie_files/lights_anim.json";
import LeftCircle from "../../assets/images/new_images/form_left_circle.webp";
import RightCircle from "../../assets/images/new_images/form_right_circle.webp";
import BottleFall from "../../assets/images/gif_images/new-form-bottle.gif";

const inputList = [
  {
    id: uuidv4(),
    option: "SAMOSA",
  },
  {
    id: uuidv4(),
    option: "PARATHA ROLL",
  },

  {
    id: uuidv4(),
    option: "ANDA BURGER",
  },

  {
    id: uuidv4(),
    option: "TRY AGAIN",
  },

  {
    id: uuidv4(),
    option: "BURGER",
  },
  {
    id: uuidv4(),
    option: "HALEEM",
  },
  {
    id: uuidv4(),
    option: "BIRYANI",
  },
  {
    id: uuidv4(),
    option: "BROAST",
  },
  {
    id: uuidv4(),
    option: "BBQ",
  },

  {
    id: uuidv4(),
    option: "TRY AGAIN",
  },
  {
    id: uuidv4(),
    option: "SUSHI",
  },

  {
    id: uuidv4(),
    option: "PASTA",
  },
];

const Spinner = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [rouletteData, setRouletteData] = useState(inputList);
  const [isBetterLuck, setIsBetterLuck] = useState(false);
  const hasDispatched = useRef(false);

  const userData = useSelector((state) => state?.user?.createUserData);
  const spinData = useSelector((state) => state?.spin?.spinData);
  const isLoading = useSelector((state) => state?.spin?.isLoading);

  const lossOption = [3, 9];
  const hundredOptions = [1, 2];
  const thousandOptions = [4, 5, 6, 7];
  const tenThousandOptions = [8, 10, 11];
  const spinValue = spinData?.response?.return_value;
  const spinPrize = spinData?.response?.return_prize_amount;

  const userIDs = {
    transaction_id: userData?.response?.return_transaction_id,
    city_id: userData?.response?.return_city_id,
  };

  const dispatch = useDispatch();
  const cityData = useSelector((state) => state?.cities?.citesData);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [prizeValue, setPrizeValue] = useState(0);
  const [isDisabled, setisDisabled] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useLayoutEffect(() => {
    const imgElement = document.querySelector(".sc-bdfBwQ");
    if (imgElement) {
      imgElement.src = "";
    }
  }, []);

  const handleSpinClick = (e) => {
    setisDisabled(true);
    const newPrizeNumber = prizeValue;
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  useEffect(() => {
    const addShortString = inputList.map((item, index) => {
      return {
        completeOption: index,
      };
    });
    setRouletteData(addShortString);
  }, [inputList]);

  useEffect(() => {
    if (mustSpin) {
      setOpen(true);
    }
  }, [mustSpin]);

  const handleBetterLuckModal = () => {
    console.log("Better Luck Open")
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (userData && !hasDispatched.current) {
      hasDispatched.current = true;
      dispatch(spinPrice(userIDs)).then((data) => {
        //  IF WIN 0 Rupees
        if (data?.payload?.response?.return_prize_amount === 0) {
          setPrizeValue(() => {
            const randomIndex = Math.floor(Math.random() * lossOption.length);
            return lossOption[randomIndex];
          });
        }

        //  IF WIN 50 Rupees
        else if (data?.payload?.response?.return_prize_amount === 50) {
          setPrizeValue(0);
        }
        //  IF WIN 100 Rupees
        else if (data?.payload?.response?.return_prize_amount === 100) {
          setPrizeValue(() => {
            const randomIndex = Math.floor(
              Math.random() * hundredOptions.length
            );
            return hundredOptions[randomIndex];
          });
        }
        //  IF WIN 1,000 Rupees
        else if (data?.payload?.response?.return_prize_amount === 1000) {
          setPrizeValue(() => {
            const randomIndex = Math.floor(
              Math.random() * thousandOptions.length
            );
            return thousandOptions[randomIndex];
          });
        }

        //  IF WIN 10,000 Rupees
        else if (data?.payload?.response?.return_prize_amount === 10000) {
          setPrizeValue(() => {
            const randomIndex = Math.floor(
              Math.random() * tenThousandOptions.length
            );
            return tenThousandOptions[randomIndex];
          });
        }

        // IF RESPONSE IN 0 OR RETURN VALUE IN 0
        else if (data?.payload?.response?.return_value === 0) {
          setPrizeValue(() => {
            const randomIndex = Math.floor(Math.random() * lossOption.length);
            return lossOption[randomIndex];
          });
        }
        // FURTHER ELSE USER WILL LOSS
        else {
          setPrizeValue(() => {
            const randomIndex = Math.floor(Math.random() * lossOption.length);
            return lossOption[randomIndex];
          });
        }
      });
    }
  }, []);

  useEffect(() => {
    if (!userData && !isBetterLuck) {
      if (location.pathname === "/spin") {

      navigate("/form");
      }
    }
  }, [userData]);

  useEffect(() => {
    console.log("Spinner Page Initialize");
  }, []);

  const handleConsole = () => {
    console.log("start Console");
  };

  return (
    <Wrapper>
      {windowDimensions.width > 350 && (
        <div className="newclassC">
          {!isBetterLuck && (
            <img src={BottleFall} className="z-20 bottleToCenter"></img>
          )}
        </div>
      )}
      <div className="spinner_header_wrapper">
        <Lottie
          animationData={HeaderLights}
          autoPlay={true}
          loop={false}
          className="spinner_header_lottie"
        />
      </div>
      <div className="roulette_container ">
        <div className="spinner_upward">
          <div className="spinner_logo_wrapper">
            <p>SPIN THE WHEEL!</p>
          </div>

          <div className="wheel_container">
            <Wheel
              mustStartSpinning={mustSpin}
              spinDuration={[0.9]}
              prizeNumber={prizeNumber}
              data={inputList}
              outerBorderColor={["#005d37"]}
              outerBorderWidth={[17]}
              innerBorderColor={["#00B144"]}
              innerBorderWidth={[9]}
              radiusLineColor={["#00B144"]}
              radiusLineWidth={[0]}
              textColors={["#fff"]}
              textDistance={62}
              fontSize={[14]}
              fontFamily="BentonSans_Black"
              backgroundColors={[
                "#00b451",
                "#a4d925",
                "#00b451",
                "#a4d925",
                "#00b451",
                "#a4d925",
                "#00b451",
                "#a4d925",
                "#00b451",
                "#a4d925",
                "#00b451",
                "#a4d925",
                "#00b451",
              ]}
              onStopSpinning={() => {
                setMustSpin(false);
                //  if QR code is unique and user did not won
                if (spinValue === 1 && spinPrize === 0) {
                  setTimeout(function () {
                    setIsBetterLuck(true);
                  }, 3000);
                }

                //  if QR code is already used //   OR  some other Error
                if (spinValue === 0) {
                  setTimeout(function () {
                    setIsBetterLuck(true);
                  }, 3000);
                }

                //  if User won prize
                if (spinValue === 1 && spinPrize !== 0) {
                  const selectedItem = inputList[prizeNumber];
                  dispatch(prizeName(selectedItem?.option));
                  setTimeout(function () {
                    navigate("/winner");
                  }, 3000);
                }
              }}
            />
            <button
              className="spiner_button roulette-button"
              onClick={handleConsole}
            >
              {windowDimensions.width <= 350 && (
                <span>
                  <img
                    src={BottleImage}
                    alt="7up Bottle"
                    onClick={handleConsole}
                  />
                </span>
              )}
            </button>
          </div>

          <br />

          <div className="spin_result_wrapper">
            <button
              className="prize-message"
              onClick={handleSpinClick}
              style={{ textAlign: "center" }}
              disabled={isLoading || isDisabled}
            >
              {isLoading ? (
                <div
                  className="spinner-border text-warning"
                  style={{ fontWeight: "100  !important" }}
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Spin"
              )}
            </button>
          </div>
        </div>
        {/* Circle  */}
        <img
          src={LeftCircle}
          className="img-fluid spinner_left_circle"
          alt="Cutted Circle"
        />
        <img
          src={RightCircle}
          className="img-fluid spinner_right_circle"
          alt="Cutted Circle"
        />
        {isBetterLuck &&
          <BetterLuckModal
          showBetterLuckModal={isBetterLuck}
          closeBetterLuckModal={handleBetterLuckModal}
          />
        }
      </div>
    </Wrapper>
  );
};

export default Spinner;
