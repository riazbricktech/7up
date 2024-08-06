import "./AnimationBottle.css";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import AnimatedGif from "../../assets/images/gif_images/bottle-anim-changed-wh-min.gif";
import AnimatedGif from "../../assets/images/bottle-anim-changed-wh-min1-ezgif.com-optipng (1).png";

const AnimationBottle = () => {
  const navigate = useNavigate();

  useEffect(() => {

    const timeoutId = setTimeout(() => navigate("/form"), 6400);
    return () => clearTimeout(timeoutId);
  }, [navigate]);
  return (
    <Wrapper>
        <div className="animation_page_wrapper">
          <img
            src={AnimatedGif}
            alt="Animation Lottie"
            style={{ width: "100%", height: "100%", position: "absolute" }}
          />
        </div>
    </Wrapper>
  );
};

export default AnimationBottle;
