import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderImage from "../../assets/images/header_image.webp";
import LogoImage from "../../assets/images/sevenUp_logo.webp";
import BetterLuck from "../../assets/images/better_luck.webp";
import Tikka from "../../assets/images/tikka.webp";
import Zinger from "../../assets/images/zinger.webp";
import RollParatha from "../../assets/images/roll_paratha.webp";
import "./Spinner.css";
import { v4 as uuidv4 } from "uuid";
import { Wheel } from "react-custom-roulette";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import SevenUpBottle from "../../assets/images/sevenUp_bottle.webp";

const inputList = [
  {
    id: uuidv4(),
    option: "Samosa"
  },
  {
    id: uuidv4(),
    option: "Pakoras"
  },
  {
    id: uuidv4(),
    option: "Chicken Patties"
  },
  {
    id: uuidv4(),
    option: "Chana Chaat"
  },
  {
    id: uuidv4(),
    option: "Paratha Roll"
  },
  {
    id: uuidv4(),
    option: "Dahi Bhalay"
  },
  {
    id: uuidv4(),
    option: "Gol Gappay"
  },
  {
    id: uuidv4(),
    option: "Anda Burger"
  },
  {
    id: uuidv4(),
    option: "Chicken Cheese Paratha"
  },
  {
    id: uuidv4(),
    option: "Sandwich"
  },
  {
    id: uuidv4(),
    option: "Burger"
  },
  {
    id: uuidv4(),
    option: "Biryani"
  },
  {
    id: uuidv4(),
    option: "Chicken Qeema"
  },
  {
    id: uuidv4(),
    option: "Haleem"
  },
  {
    id: uuidv4(),
    option: "Pizza"
  },
  {
    id: uuidv4(),
    option: "Chicken Broast"
  },
  {
    id: uuidv4(),
    option: "Steak"
  },
  {
    id: uuidv4(),
    option: "BBQ"
  },
  {
    id: uuidv4(),
    option: "Sushi"
  },
  {
    id: uuidv4(),
    option: "Pasta"
  },
  {
    id: uuidv4(),
    option: "Next Time"
  },
];

const Spinner = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [rouletteData, setRouletteData] = useState(inputList);

  const navigate = useNavigate();

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
    console.log(e, "ee");
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
      <div className="spinner_header_wrapper">
        <img src={HeaderImage} className="img-fluid" alt="Pakistan" />
      </div>
      <div className="spinner_logo_wrapper">
        <img src={LogoImage} className="img-fluid" alt="7up Logo" />
      </div>
      <div className="spinner_wrapper">
        <div align="center" className="roulette-container">
          <Wheel
            mustStartSpinning={mustSpin}
            spinDuration={[0.6]}
            prizeNumber={prizeNumber}
            data={inputList}
            outerBorderColor={["#00B144"]}
            outerBorderWidth={[7]}
            innerBorderColor={["#00B144"]}
            innerBorderWidth={[9]}
            radiusLineColor={["#00B144"]}
            radiusLineWidth={[9]}
            textColors={["#f5f5f5"]}
            textDistance={65}
            fontSize={[10]}
            backgroundColors={[
              "#ff9100",
              "#7fe953",
              "#6601dd",
              "#f4333e",
              "#7fe953",
              "#6601dd",
              "#ff9100",
              "#7fe953",
              "#f4333e",
              "#ff9100",
              "#f4333e",
              "#6601dd",
              "#7fe953",
              "#f4333e",
              "#ff9100",
              "#6601dd",
              "#7fe953",
              "#f4333e",
              "#6601dd",
              "#000",
            ]}
            onStopSpinning={() => {
              setMustSpin(false);
              navigate("/winner");
            }}
          />
          <button className="spiner_button roulette-button" onClick={handleSpinClick}>
            <span>Start Spin</span>
          </button>
        </div>
        <br />
        <div className="spin_result_wrapper">
          <button
            className="prize-message"
            onClick={handleSpinClick}
            disabled={mustSpin}
            style={{ textAlign: "center" }}
          >
            Spin
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Spinner;
