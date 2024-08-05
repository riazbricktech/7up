import "./AnimationBottle.css";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import PakImage from "../../assets/images/new_images/pak-logo.webp";
import food from "../../assets/images/lottie_files/shabbir-neww.json";
import HeaderLottie from "../../assets/images/lottie_files/lights_anim.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import bottle from "../../assets/images/gif_images/bottle-anim-new.gif";
import { useEffect } from "react";

const AnimationBottle = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // WARN: don't forget to update the timeout when changing the gif file
    setTimeout(() => navigate("/form"), 7000);
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
      </div>

      <div className="z-20 w-full">
        <img src={bottle} className="z-20 w-full object-cover"></img>
      </div>

      <div className="abs z-10 top-10">
        <Lottie animationData={food} loop={false} />
      </div>
    </Wrapper>
  );
};

export default AnimationBottle;
