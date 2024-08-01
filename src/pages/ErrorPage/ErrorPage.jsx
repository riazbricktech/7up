import React from "react";
import "./ErrorPage.css";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import ErrorIcon from "../../assets/images/new_images/error.webp";
const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="errorWrapper">
        <img src={ErrorIcon} alt="Error icon" />
        <span>
          Oops! Something <br /> went wrong.
        </span>
        {/* <p>We are working on fixing the problem. Please try again later.</p> */}
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
