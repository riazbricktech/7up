import { useEffect } from "react";
import "./LandingPage.css";

import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import { useNavigate } from "react-router-dom";

import Lottie from "react-lottie";
import animationData from "../../assets/images/lottie_files/heartbeatlogo.json";
import foodElementsJson from "../../assets/images/lottie_files/new.json";
import architectureJson from "../../assets/images/lottie_files/architecture-nobg.json";

// import bottleAnim from "../../assets/images/gif_images/final_bottle_anim.gif";
// import bottle from "../../assets/images/gif_images/new-form-bottle.gif";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLoad = () => {
      const timer = setTimeout(() => {
        navigate("/animation");
      }, 3500);

      return () => clearTimeout(timer);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [navigate]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const foodElements = {
    loop: false,
    autoplay: true,
    animationData: foodElementsJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const architecture = {
    loop: false,
    autoplay: true,
    animationData: architectureJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    console.log("Landing Page Initialize");
  }, []);
  return (
    <Wrapper>
      {/* <PreloadAssets /> */}
      {/* <img src={bottleAnim} alt="bottle Anim"  style={{display:"none"}}/>
      <img src={bottle} alt="bottle" style={{display:"none"}}/> */}
      <div className="landing_page_wrapper">
        <div
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
          }}
        >
          <Lottie options={foodElements} className="foodElement"  />
        </div>
        <div className="landing_logo_wrapper_dynamic">
          <Lottie options={defaultOptions} className="heartBeat" />
        </div>
        <div className="landing_footer_wrapper">
          <Lottie options={architecture} />
        </div>
      </div>
    </Wrapper>
  );
};

// const PreloadAssets = () => {
//   useEffect(() => {
//     const preloadImage = (url) => {
//       const img = new Image();
//       img.src = url;
//     };

//     preloadImage(bottle);
//     preloadImage(bottleAnim);
//   }, []);

//   return null;
// };

export default LandingPage;
