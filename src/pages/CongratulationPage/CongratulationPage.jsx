// import React, { useEffect, useRef } from "react";
// import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
// import "./CongratulationPage.css";
// import { useNavigate } from "react-router-dom";
// import { validatePakistaniPhoneNumber } from '../../services/NumberValidation';
// import HeaderMask from "../../assets/images/new_images/header_mask.webp";
// import HeaderLight from "../../assets/images/new_images/header_lights.webp";
// import PakImage from "../../assets/images/new_images/congrats_image.webp";
// import HeartLottie from  "../../assets/images/lottie_files/hearts.json";

// import Lottie from 'lottie-react';
// import HeaderLights from "../../assets/images/lottie_files/lights_anim.json";

// const CongratulationPage = () => {
//   const lottieRef = useRef();
//   useEffect(() => {

//     const instance = lottieRef.current;
//     if (instance) {
//       // instance.setSpeed(0.5); 
//     }
// localStorage.clear();
//   }, []);

//   return (
//     <Wrapper>
//       <div className="congrats_wrapper">
//         <div className="congrats_header_wrapper">
//           {/* <img src={HeaderMask} className="img-fluid congrats_headerMask" alt="Header Mask" />
//           <img src={HeaderLight} className="img-fluid congrats_headerLight" alt="Lights" /> */}
//             <Lottie
//             animationData={HeaderLights}
//             autoPlay={true}
//             loop={false}
//             className="spinner_header_lottie"
//           />
//         </div>
//         <div className="congrats_heading_wrapper">
//       <span>CONGRATULATIONS!</span>
//         </div>

//         <div className="congrats_para_wrapper">

//           <p>Your Prize Has  Been Tranferred </p>
//           <p>To Your Jazzcash Account</p>
//         </div>

//         <div className="congrats_image_wrapper">
//            <img src={PakImage} alt="Pakistan Image" />
//         </div>
//         {/* Heart Lottie */}
//         <div className="congrats_heart_wrapper">

//         <Lottie animationData={HeartLottie}
//             autoPlay={true} loop={true} 
//             className="heart_lottie"
//             lottieRef={lottieRef}
//             />
//            {/* <img src={PakImage} alt="Pakistan Image" /> */}
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default CongratulationPage;


import React, { useEffect, useRef } from "react";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import "./CongratulationPage.css";
import { useNavigate } from "react-router-dom";
import HeaderMask from "../../assets/images/new_images/header_mask.webp";
import HeaderLight from "../../assets/images/new_images/header_lights.webp";
import PakImage from "../../assets/images/new_images/congrats_image.webp";
import HeartLottie from  "../../assets/images/lottie_files/hearts.json";
import Lottie from 'lottie-react';
import HeaderLights from "../../assets/images/lottie_files/lights_anim.json";

const CongratulationPage = () => {
  const navigate = useNavigate();
  const lottieRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.clear(); // Clear localStorage
      navigate('/'); // Navigate to "/"
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [navigate]);

  return (
    <Wrapper>
      <div className="congrats_wrapper">
        <div className="congrats_header_wrapper">
          <Lottie
            animationData={HeaderLights}
            autoPlay={true}
            loop={false}
            className="spinner_header_lottie"
          />
        </div>
        <div className="congrats_heading_wrapper">
          <span>CONGRATULATIONS!</span>
        </div>

        <div className="congrats_para_wrapper">
          <p>Your Prize Has Been Transferred</p>
          <p>To Your Jazzcash Account</p>
        </div>

        <div className="congrats_image_wrapper">
          <img src={PakImage} alt="Pakistan Image" />
        </div>
        
        <div className="congrats_heart_wrapper">
          <Lottie 
            animationData={HeartLottie}
            autoPlay={true} 
            loop={true} 
            className="heart_lottie"
            lottieRef={lottieRef}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default CongratulationPage;
