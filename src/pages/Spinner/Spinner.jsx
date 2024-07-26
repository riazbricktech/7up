import React, { useState, useEffect, useLayoutEffect,useRef } from "react";
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
import { spinPrice } from "../../redux/actions/SpinAction";
import BetterLuckModal from "../../components/BetterLuckModal/BetterLuckModal";
import { prizeName } from "../../redux/slice/WinPrizeSlice";
import Lottie from 'lottie-react';
import HeaderLights from  "../../assets/images/lottie_files/lights_anim.json";

const inputList = [

  {
    id: uuidv4(),
    option: "SAMOSA"
  },
  {
    id: uuidv4(),
    option: "PARATHA ROLL"
  },

  {
    id: uuidv4(),
    option: "ANDA BURGER"
  },
  
  {
    id: uuidv4(),
    option: "TRY AGAIN"
  },

  {
    id: uuidv4(),
    option: "BURGER"
  },
  {
    id: uuidv4(),
    option: "HALEEM"
  },
  {
    id: uuidv4(),
    option: "BIRYANI"
  },
  {
    id: uuidv4(),
    option: "CHICKEN BROAST",
  },
  {
    id: uuidv4(),
    option: "BBQ"
  },
  
  {
    id: uuidv4(),
    option: "TRY AGAIN"
  },
  {
    id: uuidv4(),
    option: "SUSHI"
  },
  
  {
    id: uuidv4(),
    option: "PASTA"
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
  const spinLoading = useSelector((state) => state?.spin?.isLoading);
const lossOption =[3,9];
  const fiftyOptions = [0];
  const hundredOptions = [1,2];
  const thousandOptions = [4, 5, 6, 7];
  const tenThousandOptions = [8,10,11];
const spinValue = spinData?.response?.return_value;
const spinPrize = spinData?.response?.return_prize_amount;
const spinMessage = spinData?.response?.return_message;


console.log(spinData?.response?.return_value , "spinData?response?.return_value");
console.log(spinData?.response?.return_prize_amount , "spinData?response?.return_prize_amount");
console.log(spinData?.response?.return_message , "spinData?response?.return_prize_amount");


    const userIDs = {
      transaction_id :  userData?.response?.return_transaction_id,
      city_id : userData?.response?.return_city_id
      };

  const navigate = useNavigate();
const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [prizeValue, setPrizeValue] = useState(0);


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
    console.log(prizeValue,"prizeValue")
    const newPrizeNumber = prizeValue;
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    console.log(e, "trigger");
  };



  useEffect(() => {
    const addShortString = inputList.map((item, index) => {
      return {
        completeOption: index,
      };
    });
    setRouletteData(addShortString);
  }, [inputList]);

  //  spin  ==============================
  useEffect(() => {
    if (mustSpin) {
      setOpen(true);
    }
  }, [mustSpin]);


//  Modal ==================================
  const handleBetterLuckModal = () => {
    setIsBetterLuck(false);
  };



  // Disptach ==============================================
  useEffect(()=>{
    if (userData  && !hasDispatched.current) {
      hasDispatched.current = true;
    dispatch(spinPrice(userIDs)).then((data)=>{
      console.log(data?.payload?.response?.return_prize_amount,"155")

           //  IF WIN 0 Rupees
           if(data?.payload?.response?.return_prize_amount === 0){
            setPrizeValue(() => {
              const randomIndex = Math.floor(Math.random() * lossOption.length);
              return lossOption[randomIndex];
            })
          }

      //  IF WIN 50 Rupees
      if(data?.payload?.response?.return_prize_amount === 50){
        setPrizeValue(0)
      }
      //  IF WIN 100 Rupees
      if(data?.payload?.response?.return_prize_amount === 100){
        setPrizeValue(() => {
          const randomIndex = Math.floor(Math.random() * hundredOptions.length);
          return hundredOptions[randomIndex];
        })
      }
         //  IF WIN 1,000 Rupees


      if(data?.payload?.response?.return_prize_amount === 1000){
        setPrizeValue(() => {
          const randomIndex = Math.floor(Math.random() * thousandOptions.length);
          return thousandOptions[randomIndex];
        })
      }

          //  IF WIN 10,000 Rupees


          if(data?.payload?.response?.return_prize_amount === 10000){
            setPrizeValue(() => {
              const randomIndex = Math.floor(Math.random() * tenThousandOptions.length);
              return tenThousandOptions[randomIndex];
            })
          }

    //       if(data?.payload?.response?.return_value === 0){
    //         setIsBetterLuck(true);
    //       }
    })
  }
  },[])
console.log(prizeValue,"200")
  return (
    <Wrapper>
   <div className="spinner_spin_wrapper">

      <div className="spinner_header_wrapper">
      <Lottie animationData={HeaderLights}
            autoPlay={true} loop={false} 
            className="spinner_header_lottie" 
            />

        {/* <img src={HeaderMask} className="spinner_headerMask img-fluid" alt="Pakistan" /> 
        <img src={HeaderLight} className="spinner_headerLight img-fluid" alt="Pakistan" />  */}
      </div>
      <div className="spinner_logo_wrapper">
    <p>SPIN THE WHEEL!</p>
    {/* <span>Already Used</span> */}
      </div>
      <div className="spinner_wrapper">
        <div align="center" className="roulette-container">
          <Wheel
          style={{}}
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
            textDistance={65}
            fontSize={[13]}
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
              if(spinValue === 1 && spinPrize === 0 ){
                console.log(spinValue,"249")
                console.log(spinPrize,"250")
                const selectedItem = inputList[prizeNumber];
                console.log("252", selectedItem);

                setTimeout(function() {
                  setIsBetterLuck(true);
                }, 3000);
              }

              //  if QR code is already used ///   OR  some other Error
              if(spinValue === 0){
                console.log(spinValue,"261")

                const selectedItem = inputList[prizeNumber];
                console.log("264", selectedItem);
                setTimeout(function() {
                  setIsBetterLuck(true);
                }, 3000);
              }

              //  if User won prize
              if(spinValue === 1 && spinPrize !== 0 ){
                console.log(spinValue,"272")
                console.log(spinPrize,"273")
                const selectedItem = inputList[prizeNumber];
                console.log("276", selectedItem);
                dispatch(prizeName(selectedItem?.option))
                setTimeout(function() {
                navigate("/winner");
              }, 3000);
              }
            }}
          />
          <button className="spiner_button roulette-button" onClick={handleSpinClick}>
            <span>      <img src={BottleImage}alt="7up Bottle" /></span>
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

      <BetterLuckModal  showBetterLuckModal={isBetterLuck}  closeBetterLuckModal={handleBetterLuckModal} />
   </div>

    </Wrapper>
  );
};

export default Spinner;
