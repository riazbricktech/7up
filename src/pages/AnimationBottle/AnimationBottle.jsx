import "./AnimationBottle.css";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedGif from "../../assets/images/gif_images/bottle-anim-changed-wh-min.gif";

const AnimationBottle = () => {
  const navigate = useNavigate();
  const [gifLoaded, setGifLoaded] = useState(false);

  useEffect(() => {
    setGifLoaded(true);

    const timeoutId = setTimeout(() => navigate("/form"), 6400);
    return () => clearTimeout(timeoutId);
  }, [navigate]);
  return (
    <Wrapper>
      {gifLoaded && (
        <div className="animation_page_wrapper">
          <img
            src={AnimatedGif}
            alt="Animation Lottie"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}
    </Wrapper>
  );
};

export default AnimationBottle;
