import React, { useState } from "react";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import "./JazzCash.css";
import { useNavigate } from "react-router-dom";
import { validatePakistaniPhoneNumber } from '../../services/NumberValidation';
import HeaderMask from "../../assets/images/new_images/header_mask.webp";
import HeaderLight from "../../assets/images/new_images/header_lights.webp";
const JazzCash = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    phoneNumber: "",
  });

  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState(null);
  const [errors, setErrors] = useState({
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === "phoneNumber") {
      let phoneValue = value.replace(/\D/g, "");
      if (phoneValue.length > 11) {
        return;
      }
      const formattedValue = phoneValue.replace(/(.{4})/g, "$1 ").trim();
      setFormattedPhoneNumber(formattedValue);
      updatedValue = phoneValue;
      const errorMessage = validatePakistaniPhoneNumber(phoneValue);
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: errorMessage,
      }));
    } 

    
    else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validateField(name, updatedValue),
      }));
    }

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: updatedValue,
    }));
  };

  const validateField = (name, value) => {
    switch (name) {
      case "nic":
        return nicValidate(value);
      default:
        return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newErrors = {
    //   nic: nicValidate(formValues.nic),
    // };
    const phoneError = validatePakistaniPhoneNumber(formValues.phoneNumber);
    // newErrors.phoneNumber = phoneError;
    if (Object.values(newErrors).every(error => error === "")) {
      alert("Form is valid!");
      navigate("/congrats")
    } else {
      setErrors({phoneError});
    }
  };

  return (
    <Wrapper>
      <div className="jazzcash_form_wrapper">
        <div className="jazzcash_header_wrapper">
          <img src={HeaderMask} className="img-fluid spinner_headerMask" alt="Header Mask" />
          <img src={HeaderLight} className="img-fluid spinner_headerLight" alt="Lights" />
        </div>
        <div className="jazzcash_form_Heading_wrapper">
          <p>Enter jazzcash number <br />
          to receive your prize</p>
        </div>
        <form onSubmit={handleSubmit} className="form_wrapper" noValidate>
      
          <div className="form_input_wrapper">
            <input
              type="text"
              className={`form-control form_custom_input phone_input ${errors.phoneNumber ? "is-invalid" : ""}`}
              id="validationServerPhone"
              aria-describedby="inputGroupPrepend3 validationServerPhoneFeedback"
              name="phoneNumber"
              placeholder="0301 1234567"
              value={formattedPhoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <div className="invalid-feedback error_message d-block">
                {errors.phoneNumber}
              </div>
            )}
          </div>
          <div className="form_button_wrapper">
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
        </form>
        <p className="or_para">OR</p>
        <div className="jazzCash_button_wrapper">
            <button className="btn btn-primary">
            CREATE JAZZCASH ACCOUNT
            </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default JazzCash;
