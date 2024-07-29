import React, { useState, useEffect, useLayoutEffect } from "react";
import "./FormPage.css";
import BottleImage from "../../assets/images/sevenUp_bottle.webp";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import {
  validatePakistaniPhoneNumber,
  validateTerms,
  validateCity,
  validateUniqueId,
  validateName,
  validatePrivacy,
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
import CapModal from "../../components/CapModal/CapModal";
import TermsAndCondition from "../../components/Term&Condition/TermsAndCondition";
import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy";
import BottleFall from "../../assets/images/gif_images/form-bottle.gif";
function FormPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const cityData = useSelector((state) => state?.cities?.citesData);
  const isLoading = useSelector((state) => state?.cities?.isLoading);
  const [bottleClass, setBottleClass] = useState("bottledown");
  const [formClass, setFormClass] = useState("formdown");

  const qrCode = useSelector((state) => state?.qrCode?.qrCodeNumber);
  const userData = useSelector((state) => state?.user?.createUserData);

  console.log(userData?.response?.return_value, "userData11");

  const cityOptions = cityData
    ? cityData?.map((city) => ({
        value: city?.id,
        label: city?.name,
      }))
    : undefined;

  const [isQrCode, setIsQrCode] = useState(false);
  const [apiResponse, setApiResponse] = useState("");

  const [formValues, setFormValues] = useState({
    name: "",
    phone_user: "",
    qr_code_user: "",
    city_name: "",
    terms: false,
    privacy: false,
  });
  const [showModal, setShowModal] = useState(false);
  const [isTCOpen, setTCOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    phone_user: "",
    qr_code_user: "",
    city_id: "",
    city_name: "",
    terms: "",
    privacy: "",
  });
  function formatName(name) {
    return name.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
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
      if (name === "name") {
        updatedValue = formatName(value);
      }
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
      case "privacy":
        return validatePrivacy(value);
      default:
        return "";
    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const newErrors = {
      name: validateName(formValues.name),
      phone_user: validatePakistaniPhoneNumber(formValues.phone_user),
      city_name: validateCity(formValues.city_name),
      qr_code_user: isQrCode ? validateUniqueId(formValues.qr_code_user) : "",
      terms: validateTerms(formValues.terms),
      privacy: validatePrivacy(formValues.privacy),
    };
    const { phone_user, name, qr_code_user, city_name, city_id } = formValues;
    const data = { phone_user, name, qr_code_user, city_name, city_id };

    for (const key in newErrors) {
      if (newErrors[key]) {
        console.log({ [key]: newErrors[key] }, "{ [key]: newErrors[key] }");
        setErrors({ [key]: newErrors[key] });
        return;
      }
    }

    if (data) {
      console.log(data, "111111111111");
      dispatch(createUser(data)).then((res) => {
        console.log(res?.payload?.response?.return_value, "ffsdfdsf");
        // setApiResponse(userData)
        if (res?.payload?.response?.return_value === 0) {
          setApiResponse(res?.payload?.response);
          
          return;
        }
        if (res?.payload?.response?.return_value === 1) {
          setApiResponse(res?.payload?.response);
          setBottleClass("bottleUpward")
          setFormClass("formUpward");
          setTimeout(() => {
            navigate("/spin");
          }, 2500);
        }
      });
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  const openTermsCon = () => {
    setTCOpen(true);
  };

  const closeTermsCon = () => {
    setTCOpen(false);
  };

  const handleOpenPrivacyPolicy = () => {
    setIsPrivacyOpen(true);
  };

  const handleClosePrivacyPolicy = () => {
    setIsPrivacyOpen(false);
  };

  return (
    <Wrapper>
      
    <div className={`form_bottle_wrapper `}>
    {/* <img src={BottleImage} className={`img-fluid bottledown ${bottleClass}`} alt="7up Bottle" /> */}
    <img className={`newGif   ${bottleClass}`} src={BottleFall}  alt="Bottle GIF" />
        </div>
      <div className={`form_page_wrapper ${formClass}`}>

        {/* Header Wrapper */}
           {/* Bottle Wrapper */}
          
        <div className="form_header_wrapper">
          {/* <img src={HeaderImage} className="img-fluid" alt="Pakistan" /> */}
          <img
            src={HeaderMask}
            className="form_headerMask img-fluid class-1"
            alt="Pakistan"
          />
          <img
            src={HeaderLight}
            className="form_headerLight img-fluid class-2"
            alt="Pakistan"
          />
        </div>

        <div className="form_heading_wrapper class-3">
          <p>
            Please fill in the form <br />
            to win Prize
          </p>
        </div>

        {/* Form Wrapper */}
        <form onSubmit={handleSubmit} className="form_wrapper" noValidate>
          <div className="form_input_wrapper class-4">
            <label
              htmlFor="validationServerName"
              style={!isQrCode ? { padding: "17px 0" } : { padding: "0" }}
            >
              Name
            </label>
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

          <div className="form_input_wrapper class-5">
            <label
              htmlFor="validationServerPhone"
              style={!isQrCode ? { padding: "17px 0" } : { padding: "0" }}
            >
              Phone Number
            </label>
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
          <div className="form_selectbox_wrapper class-6">
            <label
              htmlFor="validationServerCity"
              style={!isQrCode ? { padding: "17px 0" } : { padding: "0" }}
            >
              City
            </label>
            <Select
              isSearchable={true}
              value={cityOptions?.find(
                (option) => option?.name === formValues.city_name
              )}
              onChange={handleSelectChange}
              id="validationServerCity"
              name="city_name"
              options={cityOptions}
              placeholder="Select City"
            />
            {errors.city_name && (
              <div
                className="invalid-feedback selectBox_error_message d-block"
                style={{ marginLeft: "10px" }}
              >
                {errors.city_name}
              </div>
            )}
          </div>
          {isQrCode && (
            <div className="form_input_wrapper class-7">
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
                <button onClick={openModal}>
                  <img
                    src={QuestionMark}
                    className="img-fluid"
                    alt="Question Marl"
                  />
                </button>
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

          <div
            className="form_checkbox_wrapper"
            style={!isQrCode ? { marginTop: "20px" } : {}}
          >
            <div className="tc_wrapper class-8">
              <div>
                <input
                  type="checkbox"
                  className={`form-check-input ${
                    errors.terms ? "is-invalid" : ""
                  }`}
                  id="validationServerTerms"
                  name="terms"
                  checked={formValues.terms}
                  onChange={handleChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="validationServerTerms"
                  onClick={openTermsCon}
                >
                  Terms & <br /> Conditions
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className={`form-check-input ${
                    errors.privacy ? "is-invalid" : ""
                  }`}
                  id="validationServerPrivacy"
                  name="privacy"
                  checked={formValues.privacy}
                  onChange={handleChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="validationServerPrivacy"
                  onClick={handleOpenPrivacyPolicy}
                >
                  Privacy <br /> Policy
                </label>
              </div>
            </div>
            {errors.terms && (
              <div className="invalid-feedback error_message error_message d-block">
                {errors.terms}
              </div>
            )}
            {errors.privacy && (
              <div className="invalid-feedback error_message error_message d-block">
                {errors.privacy}
              </div>
            )}
          </div>

          {apiResponse?.return_value === 0 ? (
            <p className="response_error">{apiResponse?.return_message}</p>
          ) : (
            <p className="response_success">{apiResponse?.return_message}</p>
          )}
          <div className="form_button_wrapper class-9">
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
        </form>

        {/* Circle  */}
        <img
          src={LeftCircle}
          className="img-fluid form_left_circle class-10"
          alt="Cutted Circle"
        />
        <img
          src={RightCircle}
          className="img-fluid form_right_circle class-11"
          alt="Cutted Circle"
        />

     
      </div>
      <CapModal showModal={showModal} closeModal={closeModal} />
      <TermsAndCondition isOpen={isTCOpen} onClose={closeTermsCon} />
      <PrivacyPolicy show={isPrivacyOpen} handleClose={handleClosePrivacyPolicy} />
    </Wrapper>
  );
}

export default FormPage;
