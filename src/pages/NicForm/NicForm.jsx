import React, { useState } from "react";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import LogoImage from "../../assets/images/sevenUp_logo.webp";
import "./NicForm.css";
import { useNavigate } from "react-router-dom";
import { validatePakistaniPhoneNumber, nicValidate } from '../../services/NumberValidation';

const NicForm = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    nic: "",
    phoneNumber: "",
  });

  const [formattedNic, setFormattedNic] = useState("");
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  const [errors, setErrors] = useState({
    nic: "",
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
    } else if (name === "nic") {
      // Remove non-numeric characters and format NIC value
      let nicValue = value.replace(/\D/g, "");
      if (nicValue.length > 13) {
        return;
      }
      const formattedValue = nicValue.replace(/(\d{5})(\d{7})?(\d{1})?/, (match, p1, p2, p3) => {
        let formatted = p1;
        if (p2) {
          formatted += " " + p2;
        }
        if (p3) {
          formatted += " " + p3;
        }
        return formatted;
      });
      setFormattedNic(formattedValue);
      updatedValue = nicValue;
      const errorMessage = nicValidate(nicValue);
      setErrors((prevErrors) => ({
        ...prevErrors,
        nic: errorMessage,
      }));
    } else {
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
    const newErrors = {
      nic: nicValidate(formValues.nic),
    };
    const phoneError = validatePakistaniPhoneNumber(formValues.phoneNumber);
    newErrors.phoneNumber = phoneError;
    if (Object.values(newErrors).every(error => error === "")) {
      alert("Form is valid!");
      navigate("/spin")
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Wrapper>
      <div className="nicform_wrapper">
        <div className="nicform_logo_wrapper">
          <img src={LogoImage} className="img-fluid" alt="Logo" />
        </div>
        <div className="nicform_Heading_wrapper">
          <p>Please enter your NIC number</p>
        </div>
        <form onSubmit={handleSubmit} className="form_wrapper" noValidate>
          <div className="form_input_wrapper">
            <input
              type="text"
              className={`form-control form_custom_input ${errors.nic ? "is-invalid" : ""}`}
              id="validationServerName"
              name="nic"
              placeholder="XXXXX XXXXXXX X"
              value={formattedNic}
              onChange={handleChange}
            />
            {errors.nic && (
              <div className="invalid-feedback error_message d-block">
                {errors.nic}
              </div>
            )}
          </div>
          <div className="form_input_wrapper">
            <input
              type="text"
              className={`form-control form_custom_input phone_input ${errors.phoneNumber ? "is-invalid" : ""}`}
              id="validationServerPhone"
              aria-describedby="inputGroupPrepend3 validationServerPhoneFeedback"
              name="phoneNumber"
              placeholder="0312 1234567"
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
      </div>
    </Wrapper>
  );
};

export default NicForm;
