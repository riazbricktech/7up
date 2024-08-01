import { useEffect, useState } from "react";
import "./AnimationBottle.css";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import PakImage from "../../assets/images/new_images/pak-logo.webp";
import food from "../../assets/images/lottie_files/shabbir-neww.json";
import BottleGif from "../../assets/images/gif_images/bottle-anim.gif";
import HeaderLottie from "../../assets/images/lottie_files/lights_anim.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

const AnimationBottle = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLoad = () => {
      const navigate_timer = setTimeout(() => {
        // navigate("/form");
      }, 6000);
      return () => {
        clearTimeout(navigate_timer);
      };
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, [navigate]);

  return (
    <Wrapper>
      <div className="animation_page_wrapper">
        <div className="animation_header_wrapper">
          <div className={`header_mask img-fluid header_lights img-fluid headerMaskExit`}>
            <Lottie animationData={HeaderLottie} autoPlay={true} loop={false} height="120px" />
          </div>
        </div>

        <div className={`animation_pak_wrapper pakClass`}>
          <div className="pakClassExit">
            <img src={PakImage} className="img-fluid" alt="Meal Image" />
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "auto",
            zIndex: "0",
            position: "absolute",
            top: "9%",
            left: "50%",
            transform: "translateX(-50%) translateY(20%)",
            animationDelay: "2s",
          }}
        >
          <Lottie animationData={food} loop={false}/>
        </div>

        <div className="" style={{ zIndex: "0" }}>
          <img src={BottleGif} className="bottle-img-fluid" alt="Meal Image" />
        </div>
      </div>
    </Wrapper>
  );
};

export default AnimationBottle;
