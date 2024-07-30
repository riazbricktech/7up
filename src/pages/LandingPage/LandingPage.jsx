import { useEffect } from "react";
import "./LandingPage.css";

import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import { useNavigate } from "react-router-dom";

import Lottie from "react-lottie";
import animationData from "../../assets/images/lottie_files/heartbeatlogo.json";
import foodElementsJson from "../../assets/images/lottie_files/new.json";
import architectureJson from "../../assets/images/lottie_files/architecture-nobg.json";
const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      // navigate("/animation");
    }, 3500);

    return () => clearTimeout(timer);
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
  return (
    <Wrapper>
      <div className="landing_page_wrapper">
        <div style={{ width: "100%", height: "auto", position: "absolute", top: "37%", left: "50%", transform: "translateX(-50%) translateY(-50%)" }}>
          <Lottie options={foodElements} style={{ objectFit: "cover" }} />
        </div>
        <div className="landing_logo_wrapper ">
          <Lottie className="" options={defaultOptions} height="300px" width="200px" />
        </div>

        <div className="landing_footer_wrapper">
          <Lottie className="" options={architecture} />
        </div>
      </div>
    </Wrapper>
  );
};

export default LandingPage;
