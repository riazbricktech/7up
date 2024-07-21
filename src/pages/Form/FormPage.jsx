import React, { useState, useEffect, useLayoutEffect } from "react";
import "./FormPage.css";
import BottleImage from "../../assets/images/sevenUp_bottle.webp";
import HeaderImage from "../../assets/images/header_image.webp";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import {
  validatePakistaniPhoneNumber,
  validateTerms,
  validateCity,
  validateUniqueId,
  validateName,
} from "../../services/NumberValidation";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { getCities } from "../../redux/actions/CityAction";
import { createUser } from "../../redux/actions/CreateUserAction";
import { useLocation } from "react-router-dom";
import { canCode, bottleCode } from "../../constant/Codes";
import HeaderMask from "../../assets/images/new_images/header_mask.webp";
import HeaderLight from "../../assets/images/new_images/header_lights.webp";
import LeftCircle from "../../assets/images/new_images/form_left_circle.webp";
import RightCircle from "../../assets/images/new_images/form_right_circle.webp";
import QuestionMark from "../../assets/images/new_images/question_mark.webp";
function FormPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const cityData = useSelector((state) => state?.cities?.citesData);
  const isLoading = useSelector((state) => state?.cities?.isLoading);

  const qrCode = useSelector((state) => state?.qrCode?.qrCodeNumber);
  const userData = useSelector((state) => state?.user?.createUserData);

  console.log(userData, "userData");

  const cityOptions = cityData
    ? cityData?.map((city) => ({
        value: city?.id,
        label: city?.name,
      }))
    : undefined;

  const [isQrCode, setIsQrCode] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    phone_user: "",
    qr_code_user: "",
    city_name: "",
    terms: false,
  });

  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    phone_user: "",
    qr_code_user: "",
    city_id: "",
    city_name: "",
    terms: "",
  });
  useLayoutEffect(() => {
    if (qrCode === `/${bottleCode}`) {
      setIsQrCode(true);
    }
    if (qrCode === `/${canCode}`) {
      setIsQrCode(false);
    }
    if (qrCode !== `/${bottleCode}` && qrCode !== `/${canCode}`) {
      setIsQrCode(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let updatedValue = type === "checkbox" ? checked : value;

    if (name === "phone_user") {
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
        phone_user: errorMessage,
      }));
    } else if (name === "qr_code_user" && isQrCode) {
      const uniqueIdValue = value.replace(/\D/g, "");
      if (uniqueIdValue.length > 8) {
        return;
      }
      updatedValue = uniqueIdValue;
      const errorMessage = validateUniqueId(uniqueIdValue);
      setErrors((prevErrors) => ({
        ...prevErrors,
        qr_code_user: errorMessage,
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

  const handleSelectChange = (selectedOption) => {
    console.log(selectedOption, "selectedOption");
    setFormValues((prevValues) => ({
      ...prevValues,
      city_name: selectedOption?.label,
      city_id: selectedOption?.value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      city_name: validateField("city_name", selectedOption?.label),
    }));
  };

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return validateName(value);
      case "qr_code_user":
        return isQrCode ? validateUniqueId(value) : "";
      case "city_name":
        return validateCity(value);
      case "terms":
        return validateTerms(value);
      default:
        return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateName(formValues.name),
      qr_code_user: isQrCode ? validateUniqueId(formValues.qr_code_user) : "",
      city_name: validateCity(formValues.city_name),
      terms: validateTerms(formValues.terms),
    };

    const phoneError = validatePakistaniPhoneNumber(formValues.phone_user);
    newErrors.phone_user = phoneError;

    if (Object.values(newErrors).every((error) => error === "")) {
      alert("Form is valid!");
      const { phone_user, name, qr_code_user, city_name, city_id } = formValues;
      const data = { phone_user, name, qr_code_user, city_name, city_id };
      console.log(data, "data====");
      console.log(formValues, "formValues");
      if (data) {
        console.log(data, "111111111111");
        dispatch(createUser(data));
      }
      // navigate("/spin");
    } else {
      setErrors(newErrors);
    }
  };

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  return (
    <Wrapper>
      <div className="form_page_wrapper">


    {/* Header Wrapper */}
    <div className="form_header_wrapper">
      {/* <img src={HeaderImage} className="img-fluid" alt="Pakistan" /> */}
      <img src={HeaderMask} className="form_headerMask img-fluid" alt="Pakistan" /> 
      <img src={HeaderLight} className="form_headerLight img-fluid" alt="Pakistan" /> 
    </div>

    <div className="form_heading_wrapper">
      <p>Please fill in the form <br />
      to win Prize</p> 
    </div>

    {/* Form Wrapper */}
    <form onSubmit={handleSubmit} className="form_wrapper" noValidate>
  <div className="form_input_wrapper">
    <label htmlFor="validationServerName">Name</label>
    <input
      type="text"
      className={`form-control form_custom_input ${
        errors.name ? "is-invalid" : ""
      }`}
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
    <label htmlFor="validationServerPhone">Phone Number</label>
    <input
      type="text"
      className={`form-control form_custom_input ${
        errors.phone_user ? "is-invalid" : ""
      }`}
      id="validationServerPhone"
      aria-describedby="inputGroupPrepend3 validationServerPhoneFeedback"
      name="phone_user"
      placeholder="0312 1234567"
      value={formattedPhoneNumber}
      onChange={handleChange}
    />
    {errors.phone_user && (
      <div className="invalid-feedback error_message d-block">
        {errors.phone_user}
      </div>
    )}
  </div>
  <div className="form_selectbox_wrapper">
    <label htmlFor="validationServerCity">City</label>
    <Select
      isSearchable={true}
      value={cityOptions?.find(option => option?.name === formValues.city_name)}
      onChange={handleSelectChange}
      id="validationServerCity"
      name="city_name"
      options={cityOptions}
      placeholder="Select City"

    />
    {errors.city_name && (
      <div className="invalid-feedback selectBox_error_message d-block" style={{marginLeft:"10px"}}>
        {errors.city_name}
      </div>
    )}
  </div>
  {isQrCode && (
    <div className="form_input_wrapper">
      <label htmlFor="validationServerUniqueId">Unique Id</label>
      <div className="unique_id_wrapper">

      <input
        type="text"
        className={`form-control form_custom_input unique_input_field ${
          errors.qr_code_user ? "is-invalid" : ""
          }`}
          id="validationServerUniqueId"
          name="qr_code_user"
          placeholder="Unique Id"
          value={formValues?.qr_code_user}
          onChange={handleChange}
          />
      <button><img src={QuestionMark} className="img-fluid" alt="Question Marl" /></button>
          </div>
      {errors.qr_code_user && (
        <div className="invalid-feedback error_message d-block">
          {errors.qr_code_user}
        </div>
      )}
           <div className="description_unique_id">
          <p>Find your unique ID inside the cap</p>
        </div>
    </div>
  )}



  <div className="form_checkbox_wrapper">
    <div className="tc_wrapper">
      <div>

      <input
        type="checkbox"
        className={`form-check-input ${errors.terms ? "is-invalid" : ""}`}
        id="validationServerTerms"
        name="terms"
        checked={formValues.terms}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor="validationServerTerms">
        Terms & <br /> Conditions
      </label>
      </div>
<div>
      <input
        type="checkbox"
        className={`form-check-input ${errors.terms ? "is-invalid" : ""}`}
        id="validationServerTerms"
        name="terms"
        checked={formValues.terms}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor="validationServerTerms">
        Privacy <br /> Policy
      </label>
      </div>
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

{/* Circle  */}
<img src={LeftCircle} className="img-fluid form_left_circle" alt="Cutted Circle" />
<img src={RightCircle}  className="img-fluid form_right_circle" alt="Cutted Circle" />

    {/* Bottle Wrapper */}
    <div className="form_bottle_wrapper">
      <img src={BottleImage} className="img-fluid" alt="7up Bottle" />
    </div>
      </div>

  </Wrapper>
  );
}

export default FormPage;
