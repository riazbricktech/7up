import React, { useState, useEffect, useLayoutEffect } from "react";

import HeaderImage from "../../assets/images/header_image.webp";
import LogoImage from "../../assets/images/sevenUp_logo.webp";
import BetterLuck from "../../assets/images/better_luck.webp";

import Tikka from "../../assets/images/tikka.webp";

import Zinger from "../../assets/images/zinger.webp";
import RollParatha from "../../assets/images/roll_paratha.webp";
import "./Spinner.css";
import { v4 as uuidv4 } from "uuid";
import { Wheel } from "react-custom-roulette";
import SevenUpBottle from "../../assets/images/sevenUp_bottle.webp";
import Confetti from 'react-confetti';


const inputList =[
    {
        id: uuidv4(),
        image: {
          uri: BetterLuck,
          background: "transparent", 
          sizeMultiplier: 1, 
          offsetY: 140
        }
      },
    {
      id: uuidv4(),
      image: {
        uri: Zinger,
        background: "transparent", 
        sizeMultiplier: 1,
        offsetY: 140 
      }
    //   text: "win 10"
    },
    {
      id: uuidv4(),
      image: {
        uri: Tikka,
        background: "transparent",
        sizeMultiplier: 1,
        offsetY: 140
    }
    //   text: "win 140"
    },
    {
      id: uuidv4(),
      image: {
        uri: RollParatha,
        background: "transparent", 
        sizeMultiplier: 1, 
        offsetY: 140
      }
    //   text: "win 400"
    },
  ]
const Spinner = () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [rouletteData, setRouletteData] = useState(inputList);
  console.log(prizeNumber,"prizeNumber")
  
  //   Ant d Modal
  const [open, setOpen] = useState(false);
  
    const handleOk = () => {
          setOpen(false)
    };
  
    // wheel Spin Start
    useLayoutEffect(() => {
        const imgElement = document.querySelector('.sc-bdfBwQ');
        if (imgElement) {
            imgElement.src = "";
        }
    });
    

    const handleSpinClick = (e) => {
      const newPrizeNumber = 1;
  
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      console.log(e,"ee")
    };
  
    useEffect(() => {
      const addShortString = inputList.map((item,index) => {
        return {
          completeOption: index,
  
          // option:
          //   item.image.length >= 3000
          //     ? item.image.substring(0, 30).trimEnd() + "..."
          //     : item.image
        };
      });
      console.log(addShortString,"addShortString");
      setRouletteData(addShortString);    
    }, [inputList]);
  
  
    useEffect(() => {
  //  if(rouletteData[prizeNumber]?.completeOption === 0 ? false  : !mustSpin ? true :false){
  //     setOpen(true)
  //  }
  //  else{
  //     setOpen(false)
  //  }
  if(mustSpin){
      setOpen(true)
  }
    }, [mustSpin])
  return (
    <div className="container-fluid landingPage_container">
      <div className="row">
        <div className="col-12 landingPage_col">
          {/* ///// Header Wrapper    ////// */}
          <div className="header_image_wrapper">
            <img src={HeaderImage} className="img-fluid" alt="Pakistan" />
          </div>

          {/* /////////  logo Wrapper  /////////// */}
          <div className="logo_wrapper">
            <img src={LogoImage} className="img-fluid" alt="7up Logo" />
          </div>

          {/* /////////  Spinner Wrapper */}

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
            "#f4333e",
            "#6601dd"
          ]}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button className="button roulette-button" onClick={handleSpinClick}>
        <span>  Start Spin </span>
        </button>
      </div>
      <br />
     <div className="spin_result_wrapper">

          <button
        className="prize-message"
    onClick={handleSpinClick}
disabled={mustSpin}
style={{textAlign:"center"}}
>
    
       Spin
      </button>
      </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
