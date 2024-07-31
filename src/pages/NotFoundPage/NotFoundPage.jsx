import React,{useEffect} from "react";
import "./NotFoundPage.css";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import LogoImage from "../../assets/images/sevenUp_logo.webp";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../assets/images/lottie_files/heartbeatlogo.json";
const NotFoundPage = () => {
const navigate = useNavigate();

const architecture = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
useEffect(()=>{
  console.log("Not Found Page Initialize");
},[])

  return (
    <>
      <Wrapper>
        {/*  Not Found Wrapper */}
        <div className="notFound_wrapper">
          {/* Logo Wrapper */}
          <div className="notFound_logo_wrapper">

          <Lottie className="" options={architecture} />
            {/* <img src={LogoImage} className="img-fluid" alt="Logo" /> */}
          </div>

          {/* Not Found Content */}
          <div className="notFound_content_wrapper">
            <h2>404</h2>
            <p>Page Not Found</p>
          </div>

          {/* Redirect Button */}
          <div className="notFound_button_wrapper">
            <button className="notFound_button" onClick={() => navigate("/")}>
              Go to home
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default NotFoundPage;
