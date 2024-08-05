import React, { useEffect } from "react";
import "./HealthPage.css";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import { healthCheck } from "../../redux/actions/HealthAction";

const HealthPage = () => {
  const dispatch = useDispatch();
  const healthData = useSelector((state) => state?.health?.healthData);
  useEffect(() => {
    dispatch(healthCheck());
    console.log("Health Page Initialize");
  }, []);

  return (
    <Wrapper>
      <div className="health_wrapper">
        <span>Frontend: Running</span>
        {healthData &&
          Object.keys(healthData).map((key, index) => (
            <span key={index}>
              {key}: {healthData[key]}
            </span>
          ))}
      </div>
    </Wrapper>
  );
};

export default HealthPage;
