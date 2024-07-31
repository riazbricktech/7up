

// import React, { useState } from "react";
// import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
// import Lottie from "lottie-react";
// import "./TransactionFailedPage.css";
// import { useNavigate } from "react-router-dom";
// // import { validatePakistaniPhoneNumber } from "../../services/NumberValidation";
// // import HeaderMask from "../../assets/images/new_images/header_mask.webp";
// // import HeaderLight from "../../assets/images/new_images/header_lights.webp";
// // import SevenUPLogo from "../../assets/images/new_images/seven_up_bottom.webp";
// import SevenUpLottie from "../../assets/images/lottie_files/7UP_anim.json";
// import { useSelector } from "react-redux";
// import HeaderLights from "../../assets/images/lottie_files/lights_anim.json";
// const TransactionFailedPage = () => {
//   const transactionData = useSelector((state) => state?.taction?.transactionData);
//   return (
//     <Wrapper>
//       <div className="failedPage_wrapper">
//         {/* Images wrapper */}
//         <div className="failedPage_header_wrapper">
//           {/* <img
//             src={HeaderMask}
//             className="img-fluid failedPage_headerMask"
//             alt="Header Mask"
//           />
//           <img
//             src={HeaderLight}
//             className="img-fluid failedPage_headerLight"
//             alt="Lights"
//           /> */}
          
//           <Lottie
//             animationData={HeaderLights}
//             autoPlay={true}
//             loop={false}
//             className="spinner_header_lottie"
//           />
//         </div>

//         {/* Para wrapper */}
//         <div className="failedPage_heading_wrapper">
//           <p>TRANSACTION FAILED</p>
//         </div>

        
//         {/* Para wrapper */}
//         {transactionData?.response &&
//         <div className="failedPage_error_wrapper">
//           <p>{transactionData?.response}</p>
//         </div>
// }
//         {/* Button wrapper */}
//         <div className="failedPage_button_wrapper">
//           <button className="btn btn-primary">TRY A DIFFERENT NUMBER</button>
//         </div>

//                {/* Button wrapper */}
//                <div className="failedPage_bottom_img_wrapper">
//           {/* <img src={SevenUPLogo} alt="Seven Bottom" /> */}
//           <Lottie animationData={SevenUpLottie}
//             autoPlay={true} loop={false} 
//             className="failedPage_bottom_img"
//             />
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default TransactionFailedPage;


import React, { useEffect } from "react";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import Lottie from "lottie-react";
import "./TransactionFailedPage.css";
import { useNavigate } from "react-router-dom";
import SevenUpLottie from "../../assets/images/lottie_files/7UP_anim.json";
import { useSelector } from "react-redux";
import HeaderLights from "../../assets/images/lottie_files/lights_anim.json";

const TransactionFailedPage = () => {
  const transactionData = useSelector((state) => state?.taction?.transactionData);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.clear(); // Clear localStorage
      navigate('/'); // Navigate to "/"
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [navigate]);


  useEffect(()=>{
    console.log("TransactionFailed Page Initialize");
  },[])
  return (
    <Wrapper>
      <div className="failedPage_wrapper">
        {/* Images wrapper */}
        <div className="failedPage_header_wrapper">
          <Lottie
            animationData={HeaderLights}
            autoPlay={true}
            loop={false}
            className="spinner_header_lottie"
          />
        </div>

        {/* Para wrapper */}
        <div className="failedPage_heading_wrapper">
          <p>TRANSACTION FAILED</p>
        </div>

        {/* Para wrapper */}
        {transactionData?.response && (
          <div className="failedPage_error_wrapper">
            <p>{transactionData?.response}</p>
          </div>
        )}

        {/* Bottom Lottie Animation */}
        <div className="failedPage_bottom_img_wrapper">
          <Lottie
            animationData={SevenUpLottie}
            autoPlay={true}
            loop={false}
            className="failedPage_bottom_img"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default TransactionFailedPage;
