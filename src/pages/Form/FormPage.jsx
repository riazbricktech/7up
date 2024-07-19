import React, { useState , useEffect, useLayoutEffect} from "react";
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
import { canCode, bottleCode } from '../../constant/Codes';


function FormPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const cityData = useSelector(state => state?.cities?.citesData);
  const isLoading = useSelector(state => state?.cities?.isLoading);

  const qrCode = useSelector(state => state?.qrCode?.qrCodeNumber);
  const userData = useSelector(state => state?.user?.createUserData);

console.log(userData,"userData");

  const cityOptions = cityData ? cityData?.map(city => ({
    value: city?.id,
    label: city?.name
  })) : undefined;



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
  useLayoutEffect(()=>{
  
    if (qrCode === `/${bottleCode}`) {
      setIsQrCode(true);
    }
    if (qrCode === `/${canCode}`) {
      setIsQrCode(false);
    }
    if(qrCode !== `/${bottleCode}` && qrCode !== `/${canCode}`){
      setIsQrCode(true);

    }
  },[])
  
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
    console.log(selectedOption,"selectedOption")
    setFormValues((prevValues) => ({
      ...prevValues,
      city_name: selectedOption?.label,
      city_id:selectedOption?.value,
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
      const { phone_user, name, qr_code_user, city_name, city_id} = formValues;
      const data ={phone_user, name, qr_code_user, city_name, city_id};
      console.log(data,"data====")
      console.log(formValues, "formValues");
      if(data){
console.log(data,"111111111111")
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
      {/* Header Wrapper */}
      <div className="form_header_wrapper">
        <img src={HeaderImage} className="img-fluid" alt="Pakistan" />
      </div>

      {/* Form Wrapper */}
      <form onSubmit={handleSubmit} className="form_wrapper" noValidate>
        <div className="form_input_wrapper">
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
{isQrCode &&  <div className="form_input_wrapper">
          <input
            type="text"
            className={`form-control form_custom_input ${
              errors.qr_code_user ? "is-invalid" : ""
            }`}
            id="validationServerUniqueId"
            name="qr_code_user"
            placeholder="Unique Id"
            value={formValues?.qr_code_user}
            onChange={handleChange}
          />
          {errors.qr_code_user && (
            <div className="invalid-feedback error_message d-block">
              {errors.qr_code_user}
            </div>
          )}
        </div>
}
        <div className="form_selectbox_wrapper">
        <Select
        isSearchable={true}
        value={cityOptions?.find(option => option?.name === formValues.city_name)}
        onChange={handleSelectChange}
        id="validationServerCity"
        name="city_name"
        options={cityOptions}
        isLoading={isLoading}
      />
        </div>
        {errors.city_name && (
          <div className="invalid-feedback selectBox_error_message d-block" style={{marginLeft:"10px"}}>
            {errors.city_name}
          </div>
        )}

        <div className="form_checkbox_wrapper">
          <div>
            <input
              type="checkbox"
              className={`form-check-input ${errors.terms ? "is-invalid" : ""}`}
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
      {/* <div className="form_bottle_wrapper">
        <img src={BottleImage} className="img-fluid" alt="7up Bottle" />
      </div> */}
    </Wrapper>
  );
}

export default FormPage;
