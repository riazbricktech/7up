import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import UpLoader from "../../assets/images/lottie_files/heartbeatlogo.json";
import Lottie from "lottie-react";
import "./Loader.css"
const LoaderPage = () => {
  return (
    <Wrapper>
      <div className="loaderWrapper">
        <Lottie
          animationData={UpLoader}
          autoPlay={true}
          loop={true}
          className="loader_lottie"
        />
      </div>
    </Wrapper>
  );
};

export default LoaderPage;
