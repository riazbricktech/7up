import "./AnimationBottle.css";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import AnimatedGif from "../../assets/images/gif_images/final_bottle_anim.gif";

const AnimationBottle = () => {
  const navigate = useNavigate();
  const gifLoaded = useRef(true);

  useEffect(() => {
    
    const timeoutId = setTimeout(() => {
      navigate("/form")
      gifLoaded.current = false;

    }, 10500);
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <Wrapper>
      {gifLoaded.current && (
        <div className="animation_page_wrapper">
          <img
            src={AnimatedGif}
            alt="Animation Lottie"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      )}
    </Wrapper>
  );
};

export default AnimationBottle;
