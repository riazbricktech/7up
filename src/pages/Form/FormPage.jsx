import React, { useState, useEffect } from "react";
import "./FormPage.css";
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
import Select, { components }  from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { getCities } from "../../redux/actions/CityAction";
import { createUser } from "../../redux/actions/CreateUserAction";
import { canCode, bottleCode } from "../../constant/Codes";
import LeftCircle from "../../assets/images/new_images/form_left_circle.webp";
import RightCircle from "../../assets/images/new_images/form_right_circle.webp";
import QuestionMark from "../../assets/images/new_images/question_mark.webp";
import CapModal from "../../components/CapModal/CapModal";
import TermsAndCondition from "../../components/Term&Condition/TermsAndCondition";
import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy";
import UniqueIdModal from "../../components/UniqueIdModal/UniqueIdModal";
import Lottie from "lottie-react";
import HeaderLottie from "../../assets/images/lottie_files/lights_anim.json";
import bottleFallingWebm from "../../assets/videos/bottle.webm"

import BottleFall from "../../assets/images/gif_images/form-bottle.gif";

const CustomInput = (props) => {
  const handlePaste = (event) => {
    event.preventDefault();
  };

  return <components.Input {...props} onPaste={handlePaste} />;
};


function FormPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cityData = useSelector((state) => state?.cities?.citesData);
  const [bottleClass, setBottleClass] = useState("bottledown");
  const [formClass, setFormClass] = useState("formdown");
  const [isCodeFound, setIsCodeFound] = useState(false);

  const qrCode = useSelector((state) => state?.qrCode?.qrCodeNumber);
  const userInfoLoading = useSelector((state) => state?.user?.isLoading);

const cityOptions = cityData
  ? Array.isArray(cityData)
    ? cityData.map((city) => ({
        value: city?.id,
        label: city?.name,
      }))
    : Object.keys(cityData).map((key) => ({
        value: cityData[key]?.id,
        label: cityData[key]?.name,
      }))
  : undefined;




  const [isQrCode, setIsQrCode] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [zIndex, setZIndex] = useState(10);
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
  const [isUniqueQrCode, setIsUniqueQrCode] = useState(false);

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
  useEffect(() => {
    setIsQrCode(true);
    
    if (qrCode === `/${bottleCode}`) {
      setIsQrCode(true);
    }
    if (qrCode === `/${canCode}`) {

      setIsQrCode(false);
    }
    if (qrCode !== `/${bottleCode}` && qrCode !== `/${canCode}`) {

      setIsQrCode(true);
    }
  }, [qrCode]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let updatedValue = type === "checkbox" ? checked : value;
  
    setIsCodeFound(false);
  
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
        // Allow only alphabets and spaces, and limit to 64 characters
        if (!/^[a-zA-Z\s]*$/.test(value) || value.length > 64) {
          return;
        }
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
        setErrors({ [key]: newErrors[key] });
        return;
      }
    }

    if (data) {
      dispatch(createUser(data)).then((res) => {
        if (res?.payload?.response?.return_value === 1) {
          setApiResponse(res?.payload?.response);
          setTimeout(() => {
            navigate("/spin");
          }, 500);
        }

        if(res?.payload?.response?.return_value === 0){
          if(res?.payload?.response?.return_message ===  'You have entered incorrect unique ID'){
            setIsCodeFound(true);
            return;
          }
          else if (res?.payload?.response?.return_message === 'YOUR UNIQUE ID HAS ALREADY BEEN USED') {
            setIsUniqueQrCode(true);
            return;
          }

          setApiResponse(res?.payload?.response);
          return;
        }
      });
    }
  };

  const openModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleUniqueQrModal = () => {
    setIsUniqueQrCode(false);
  };

  useEffect(() => {
    if (!cityOptions || cityOptions === undefined) {
      dispatch(getCities());
    }
  }, [cityOptions]);

  const openTermsCon = () => {
    setTCOpen(true);
  };

  const closeTermsCon = (response) => {
    if (response === 1) {
      setFormValues({ ...formValues, terms: true });
    } else if (response === 0) {
      setFormValues({ ...formValues, terms: false });
    }
    setTCOpen(false);
  };

  const handleClosePrivacyPolicy = () => {
    setIsPrivacyOpen(false);
  };

  const handlePaste = (event) => {
    event.preventDefault();
  };
  useEffect(()=>{
    console.log("Form Page Initialize");
  },[])


  useEffect(() => {
    const timer = setTimeout(() => {
      setZIndex(0);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (  
  
    <Wrapper>
      <div className="bottle-wrapper "  style={{ zIndex }}>
        <div className="bottle-inner-wrapper w-full">
          <img src={BottleFall} className="z-20 bottle-form"></img>
        </div>
      </div>
      <div className={`form_page_wrapper ${formClass}`}>
        {/* Header Wrapper */}

        <div className="form_header_wrapper">
          <Lottie animationData={HeaderLottie} autoPlay={true} loop={false} className="form_header_lottie" />
        </div>

        <div className="form_heading_wrapper class-3">
          <p>
            Fill in the form to
            <br />
            win exciting prizes
          </p>
        </div>

        {/* Form Wrapper */}
        <form onSubmit={handleSubmit} className="form_wrapper" noValidate>
          <div className="form_input_wrapper class-4">
            <label htmlFor="validationServerName" style={!isQrCode ? { padding: "3px 0" } : { padding: "0" }}>
              Name*
            </label>
            <input
              type="text"
              className={`form-control form_custom_input ${errors.name ? "is-invalid" : ""}`}
              id="validationServerName"
              name="name"
              placeholder="Full Name"
              value={formValues.name}
              onChange={handleChange}
              onPaste={handlePaste}
              onCopy={handlePaste} 
              onCut={handlePaste} 
              autoComplete="off" 
              style={{fontWeight:"lighter !important"}}
            />
            {errors.name && <div className="invalid-feedback error_message d-block">{errors.name}</div>}
          </div>

          <div className="form_input_wrapper class-5">
            <label htmlFor="validationServerPhone" style={!isQrCode ? { padding: "3px 0" } : { padding: "0" }}>
              Phone Number*
            </label>
            <input
              type="text"
              className={`form-control form_custom_input ${errors.phone_user ? "is-invalid" : ""}`}
              id="validationServerPhone"
              aria-describedby="inputGroupPrepend3 validationServerPhoneFeedback"
              name="phone_user"
              placeholder="03XX XXXX XXX"
              value={formattedPhoneNumber}
              onChange={handleChange}
              onPaste={handlePaste}
              onCopy={handlePaste} 
              onCut={handlePaste} 
              autoComplete="off" 
            />
            {errors.phone_user && <div className="invalid-feedback error_message d-block">{errors.phone_user}</div>}
          </div>
          <div className="form_selectbox_wrapper class-6">
            <label htmlFor="validationServerCity" style={!isQrCode ? { padding: "3px 0" } : { padding: "0" }}>
              City*
            </label>
            <Select
            components={{ Input: CustomInput }}
              isSearchable={true}
              menuPlacement="auto"
              value={cityOptions?.find((option) => option?.name === formValues.city_name)}
              onChange={handleSelectChange}
              id="validationServerCity"
              name="city_name"
              options={cityOptions}
              placeholder="Select Your City"
            />
            {errors.city_name && (
              <div className="invalid-feedback selectBox_error_message d-block" style={{ marginLeft: "10px" }}>
                {errors.city_name}
              </div>
            )}
          </div>
          {isQrCode && (
            <div className="form_input_wrapper  class-7">
              <label htmlFor="validationServerUniqueId">Unique ID*</label>
              <div className="unique_id_wrapper">
                <input
                  type="text"
                  onPaste={handlePaste}
                  onCopy={handlePaste} 
                  onCut={handlePaste} 
                  autoComplete="off" 
                  className={`form-control form_custom_input unique_input_field ${
                    errors.qr_code_user ? "is-invalid" : ""
                  } ${
                    isCodeFound ? "codeFound" : ""
                  } `}
                  id="validationServerUniqueId"
                  name="qr_code_user"
                  placeholder="Enter 8 Digit Code"
                  value={formValues?.qr_code_user}
                  onChange={handleChange}
                />
                <button onClick={openModal}>
                  <img src={QuestionMark} className="img-fluid" alt="Question Marl" />
                </button>
              </div>
              {errors.qr_code_user ? <div className="invalid-feedback error_message d-block">{errors.qr_code_user}</div> : ""}

              {!errors.qr_code_user && isCodeFound ? <div className="invalid-feedback error_message d-block">Enter a valid Unique ID</div> : ""}
              <div className="description_unique_id">
                <p>Find your Unique ID inside the cap</p>
              </div>
            </div>
          )}

          <div className="form_checkbox_wrapper" style={!isQrCode ? { marginTop: "20px" } : {}}>
            <div className="tc_wrapper class-8">
              <div>
                <input
                  type="checkbox"
                  className={`form-check-input ${errors.terms ? "is-invalid" : ""}`}
                  id="validationServerTerms"
                  name="terms"
                  checked={formValues.terms}
                  onChange={handleChange}
                />
                <label
                  className={`form-check-label ${errors.terms ? "errorLabel" : ""}`}
                  // htmlFor="validationServerTerms"
                  htmlFor=""

                  // style={{color: errors.terms ? "#E81D2C" : "white"}}
                >
                  I have read the{" "}
                  <span style={{ color: errors.terms ? "#E81D2C !important" : "white" }} onClick={openTermsCon}>
                    Terms & Conditions
                  </span>{" "}
                  and consent to the use of my personal data as per the Privacy Notice. I have the option to opt-out anytime.
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className={`form-check-input ${errors.privacy ? "is-invalid" : ""}`}
                  id="validationServerPrivacy"
                  name="privacy"
                  checked={formValues.privacy}
                  onChange={handleChange}
                />
                <label
                  className={`form-check-label ${errors.privacy ? "errorLabel" : ""}`}
                  // htmlFor="validationServerPrivacy"
                  htmlFor=""
                  // onClick={handleOpenPrivacyPolicy}
                  // style={{color: errors.privacy ? "#E81D2C" : "white"}}
                >
                  I consent to receiving product information and promotional offers from PepsiCo, electronically, including, SMS & WhatsApp
                </label>
              </div>
            </div>
            {/* {errors.terms && (
              <div className="invalid-feedback error_message error_message d-block">
                {errors.terms}
              </div>
            )} */}
            {/* {errors.privacy && (
              <div className="invalid-feedback error_message error_message d-block">
                {errors.privacy}
              </div>
            )} */}
          </div>

          {/* {apiResponse?.return_value === 0 ? (
            <p className="response_error">{apiResponse?.return_message}</p>
          ) : (
            <p className="response_success">{apiResponse?.return_message}</p>
          )} */}
          <div className="form_button_wrapper class-9">
            <button type="submit" disabled={userInfoLoading} className="btn btn-primary">
              {userInfoLoading ? (
                <div className="spinner-border text-warning mt-1" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Next"
              )}
            </button>
          </div>
        </form>

        {/* Circle  */}
      </div>
      <CapModal showModal={showModal} closeModal={closeModal} />
      <TermsAndCondition isOpen={isTCOpen} onClose={closeTermsCon} />
      <PrivacyPolicy show={isPrivacyOpen} handleClose={handleClosePrivacyPolicy} />
      <UniqueIdModal showUniqueQrModal={isUniqueQrCode} closeQrModalModal={handleUniqueQrModal} />
      <img src={LeftCircle} className="img-fluid form_lefts_circle class-10" alt="Cutted Circle" />
      <img src={RightCircle} className="img-fluid form_rights_circle class-11" alt="Cutted Circle" />
    </Wrapper>
  );
}

export default FormPage;
