import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Spinner.css";
import { v4 as uuidv4 } from "uuid";
import { Wheel } from "react-custom-roulette";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import SevenUpBottle from "../../assets/images/sevenUp_bottle.webp";
import BottleImage from "../../assets/images/sevenUp_bottle.webp";
import { useSelector, useDispatch } from "react-redux";
import HeaderMask from "../../assets/images/new_images/header_mask.webp";
import HeaderLight from "../../assets/images/new_images/header_lights.webp";
import SpinBottle from "../../assets/images/gif_images/form-bottle.gif";
const inputList = [

  {
    id: uuidv4(),
    option: "BBQ"
  },
  {
    id: uuidv4(),
    option: "PASTA"
  },

  {
    id: uuidv4(),
    option: "HALEEM"
  },

  {
    id: uuidv4(),
    option: "TRY AGAIN"
  },

  {
    id: uuidv4(),
    option: "ANDA BURGER"
  },
  {
    id: uuidv4(),
    option: "SUSHI"
  },
  {
    id: uuidv4(),
    option: "BURGER"
  },
  {
    id: uuidv4(),
    option: "BIRYANI"
  },
  {
    id: uuidv4(),
    option: "STEAK"
  },

  {
    id: uuidv4(),
    option: "TRY AGAIN"
  },
  {
    id: uuidv4(),
    option: "BROAST"
  },

  {
    id: uuidv4(),
    option: "SAMOSA"
  },
];

const Spinner = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [rouletteData, setRouletteData] = useState(inputList);
  const cityData = useSelector(state => state?.cities?.citesData);
  const navigate = useNavigate();
  const [bottleClass, setBottleClass] = useState("");
  const [formClass, setFormClass] = useState("");
  const [open, setOpen] = useState(false);

  const handleOk = () => {
    setOpen(false);
  };

  useLayoutEffect(() => {
    const imgElement = document.querySelector('.sc-bdfBwQ');
    if (imgElement) {
      imgElement.src = "";
    }
  }, []);

  const handleSpinClick = (e) => {
    const newPrizeNumber = 1;
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    console.log("trigger")
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

  return (
    <Wrapper>
      <div className={`newclass `} onClick={handleSpinClick}>
      <img className={`bottleToCenter ${bottleClass}`} src={SpinBottle}   alt="Bottle GIF" />

      </div>
      <div className={`spinner_upward ${formClass}`}>



        <div className="spinner_header_wrapper">
          {/* <img src={HeaderImage} className="img-fluid" alt="Pakistan" /> */}
          <img src={HeaderMask} className="spinner_headerMask img-fluid" alt="Pakistan" />
          <img src={HeaderLight} className="spinner_headerLight img-fluid" alt="Pakistan" />
        </div>
        <div className="spinner_logo_wrapper">
          <p>SPIN THE WHEEL!</p>
        </div>
        <div className="spinner_wrapper">
          <div align="center" className="roulette-container">
            <Wheel
              mustStartSpinning={mustSpin}
              spinDuration={[0.7]}
              prizeNumber={prizeNumber}
              data={inputList}
              outerBorderColor={["#005d37"]}
              outerBorderWidth={[17]}
              innerBorderColor={["#00B144"]}
              innerBorderWidth={[9]}
              radiusLineColor={["#00B144"]}
              radiusLineWidth={[0]}
              textColors={["#fff"]}
              textDistance={65}
              fontSize={[16]}
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
                // navigate("/winner");
                setBottleClass("spinerrBottleUpward")
                setFormClass("spinerDownward");
                setTimeout(() => {
                  navigate("/winner");
                }, 2500);
              }}
            />
            <button className="spiner_button roulette-button" onClick={handleSpinClick}>
              <span>      </span>
            </button>
          </div>
          <br />
          <div className="spin_result_wrapper">
            <button
              className="prize-message"
              onClick={handleSpinClick}
              // disabled={mustSpin}
              style={{ textAlign: "center" }}
            >
              Spin
            </button>
            
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Spinner;
