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
  const [pakClass, setPakClass] = useState("pakClass");
  const [headerClass, setHeaderClass] = useState("");
  const [foodTranslateClass, setFoodTranslateClass] = useState("translateX(-50%)");

  const navigate = useNavigate();

  useEffect(() => {
    const navigate_timer = setTimeout(() => {
      navigate("/form");
    }, 6000);

    const animate_end_timer = setTimeout(() => {
      setPakClass("pakClassExit");
      // setHeaderClass("headerMaskExit");
    }, 5500);

    const food_translate_timer = setTimeout(() => {
      setFoodTranslateClass("translateX(-50%) translateY(20%)");
    }, 2250)

    return () => {
      clearTimeout(navigate_timer);
      clearTimeout(animate_end_timer);
      clearTimeout(food_translate_timer);
    };
  }, [navigate]);
useEffect(()=>{
  console.log("Animation Initialize");
},[])

  return (
    <Wrapper>
      <div className="animation_page_wrapper">
        <div className="animation_header_wrapper">
          <div className={`header_mask img-fluid header_lights img-fluid ${headerClass}`}>
            <Lottie animationData={HeaderLottie} autoPlay={true} loop={false} height="120px" />
          </div>
        </div>

        <div className={`animation_pak_wrapper ${pakClass}`}>
          <img src={PakImage} className="img-fluid" alt="Meal Image" />
        </div>

        <div style={{ width: "100%", height: "auto", zIndex: "0", position: "absolute", top: "9%", left: "50%", transform: foodTranslateClass, transition: "transform 1.0s"}}>
          <Lottie animationData={food} />
        </div>

        <div className="" style={{ zIndex: "0" }}>
          <img src={BottleGif} className="bottle-img-fluid" alt="Meal Image" />
        </div>
      </div>
    </Wrapper>
  );
};

export default AnimationBottle;
