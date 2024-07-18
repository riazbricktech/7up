import React, { useState , useEffect} from "react";
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

// const cityData = [
//   { id: 1, name: "Bhakkar" },
//   { id: 2, name: "Faislabad" },
//   { id: 3, name: "Jhang" },
//   { id: 4, name: "Khushab" },
//   { id: 5, name: "Mianwali" },
//   { id: 6, name: "Okara" },
//   { id: 7, name: "Sargodha" },
//   { id: 8, name: "Toba Tek Singh" },
//   { id: 9, name: "Chiniot" },
//   { id: 10, name: "Gojra" },
//   { id: 11, name: "Samundri" },
//   { id: 12, name: "Dijkot" },
//   { id: 13, name: "Gujranwala" },
//   { id: 14, name: "Bhakkar (Unknown 1)" },
//   { id: 15, name: "Chakwal" },
// ];

// const cityOptions = cityData.map(city => ({
//   value: city.id,
//   label: city.name
// }));

function FormPage() {
  const cityData = useSelector(state => state?.cities?.citesData);

  
  const cityOptions = cityData?.map(city => ({
    value: city.id,
    label: city.name
  }));
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    phone: "",
    name: "",
    qr_code: "",
    city_name: "",
    terms: false,
  });

  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  const [errors, setErrors] = useState({
    phone: "",
    name: "",
    qr_code: "",
    city_name: "",
    terms: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let updatedValue = type === "checkbox" ? checked : value;

    if (name === "phone") {
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
        phone: errorMessage,
      }));
    } else if (name === "qr_code") {
      const uniqueIdValue = value.replace(/\D/g, "");
      if (uniqueIdValue.length > 8) {
        return;
      }
      updatedValue = uniqueIdValue;
      const errorMessage = validateUniqueId(uniqueIdValue);
      setErrors((prevErrors) => ({
        ...prevErrors,
        qr_code: errorMessage,
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
    setFormValues((prevValues) => ({
      ...prevValues,
      city_name: selectedOption?.label,
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
      case "qr_code":
        return validateUniqueId(value);
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
      qr_code: validateUniqueId(formValues.qr_code),
      city_name: validateCity(formValues.city_name),
      terms: validateTerms(formValues.terms),
    };
    const phoneError = validatePakistaniPhoneNumber(formValues.phone);
    newErrors.phone = phoneError;

    if (Object.values(newErrors).every((error) => error === "")) {
      alert("Form is valid!");
      console.log(formValues,"formValues");
      // dispatch(createUser(formValues));
      navigate("/spin");
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
              errors.phone ? "is-invalid" : ""
            }`}
            id="validationServerPhone"
            aria-describedby="inputGroupPrepend3 validationServerPhoneFeedback"
            name="phone"
            placeholder="0312 1234567"
            value={formattedPhoneNumber}
            onChange={handleChange}
          />
          {errors.phone && (
            <div className="invalid-feedback error_message d-block">
              {errors.phone}
            </div>
          )}
        </div>

        <div className="form_input_wrapper">
          <input
            type="text"
            className={`form-control form_custom_input ${
              errors.qr_code ? "is-invalid" : ""
            }`}
            id="validationServerUniqueId"
            name="qr_code"
            placeholder="Unique Id"
            value={formValues?.qr_code}
            onChange={handleChange}
          />
          {errors.qr_code && (
            <div className="invalid-feedback error_message d-block">
              {errors.qr_code}
            </div>
          )}
        </div>
        <div className="form_selectbox_wrapper">
 

        <Select
        isSearchable={true}
        value={cityOptions?.find(option => option?.name === formValues.city_name)}
        onChange={handleSelectChange}
        id="validationServerCity"
        name="city_name"
        options={cityOptions}
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
