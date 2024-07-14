import React, { useState } from "react";
import "./FormPage.css";
import BottleImage from "../../assets/images/sevenUp_bottle.webp";
import HeaderImage from "../../assets/images/header_image.webp";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import { validatePakistaniPhoneNumber, validateTerms, validateCity, validateUniqueId, validateName } from '../../services/NumberValidation';
import { useNavigate } from "react-router-dom";

function FormPage() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    phoneNumber: "",
    name: "",
    uniqueId: "",
    city: "",
    terms: false
  });

  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  const [errors, setErrors] = useState({
    phoneNumber: "",
    name: "",
    uniqueId: "",
    city: "",
    terms: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let updatedValue = type === 'checkbox' ? checked : value;

    if (name === 'phoneNumber') {
      let phoneValue = value.replace(/\D/g, '');
      if (phoneValue.length > 11) {
        return;
      }
      const formattedValue = phoneValue.replace(/(.{4})/g, '$1 ').trim();
      setFormattedPhoneNumber(formattedValue);
      updatedValue = phoneValue;
      const errorMessage = validatePakistaniPhoneNumber(phoneValue);
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: errorMessage
      }));
    } else if (name === 'uniqueId') {
      const uniqueIdValue = value.replace(/\D/g, '');
      if (uniqueIdValue.length > 8) {
        return;
      }
      updatedValue = uniqueIdValue;
      const errorMessage = validateUniqueId(uniqueIdValue);
      setErrors((prevErrors) => ({
        ...prevErrors,
        uniqueId: errorMessage
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validateField(name, updatedValue)
      }));
    }

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: updatedValue
    }));
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return validateName(value);
      case 'uniqueId':
        return validateUniqueId(value);
      case 'city':
        return validateCity(value);
      case 'terms':
        return validateTerms(value);
      default:
        return '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: validateName(formValues.name),
      uniqueId: validateUniqueId(formValues.uniqueId),
      city: validateCity(formValues.city),
      terms: validateTerms(formValues.terms)
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
    <Wrapper >
  {/* Header Wrapper */}
  <div className="form_header_wrapper">
    <img src={HeaderImage} className="img-fluid" alt="Pakistan" />
  </div>

  {/* Form Wrapper */}
  <form onSubmit={handleSubmit} className="form_wrapper" noValidate>
    <div className="form_input_wrapper">
      <input
        type="text"
        className={`form-control form_custom_input ${errors.name ? 'is-invalid' : ''}`}
        id="validationServerName"
        name="name"
        placeholder="Name"
        value={formValues.name}
        onChange={handleChange}
      />
      {errors.name && (
        <div className="invalid-feedback error_message d-block">
          {errors.name}
        </div>
      )}
      
    </div>
    <div className="form_input_wrapper">
      <input
        type="text"
        className={`form-control form_custom_input ${errors.phoneNumber ? 'is-invalid' : ''}`}
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

    <div className="form_input_wrapper">
      <input
        type="text"
        className={`form-control form_custom_input ${errors.uniqueId ? 'is-invalid' : ''}`}
        id="validationServerUniqueId"
        name="uniqueId"
        placeholder="Unique Id"
        value={formValues.uniqueId}
        onChange={handleChange}
      />
      {errors.uniqueId && (
        <div className="invalid-feedback error_message d-block">
          {errors.uniqueId}
        </div>
      )}
    </div>
    <div className="form_selectbox_wrapper">
      <select
        className={` form_custom_select ${errors.city ? 'is-invalid' : ''}`}
        aria-label="Default select example"
        id="validationServerCity"
        name="city"
        value={formValues.city}
        onChange={handleChange}

        
      >
        <option value="">Select City</option>
        <option value="Karachi">Karachi</option>
        <option value="Lahore">Lahore</option>
        <option value="Islamabad">Islamabad</option>
      </select>
    </div>
    {errors.city && (
        <div className="invalid-feedback selectBox_error_message d-block">
          {errors.city}
        </div>
      )}

    <div className="form_checkbox_wrapper">
      <div>
        <input
          type="checkbox"
          className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
          id="validationServerTerms"
          name="terms"
          checked={formValues.terms}
          onChange={handleChange}
        />
        <span className="form-check-label" htmlFor="validationServerTerms">
          Terms and Conditions
        </span>
      </div>
      {errors.terms && (
        <div className="invalid-feedback error_message error_message d-block">
          {errors.terms}
        </div>
      )}
    </div>

    <div className="form_button_wrapper">
      <button type="submit" className="btn btn-primary">
        Next
      </button>
    </div>
  </form>

  {/* Bottle Wrapper */}
  <div className="form_bottle_wrapper">
    <img src={BottleImage} className="img-fluid" alt="7up Bottle" />
  </div>
</Wrapper>
  );
}

export default FormPage;
