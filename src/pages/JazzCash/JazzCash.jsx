import React, { useState } from "react";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import "./JazzCash.css";
import { useNavigate } from "react-router-dom";
import { validatePakistaniPhoneNumber } from '../../services/NumberValidation';
import HeaderMask from "../../assets/images/new_images/header_mask.webp";
import HeaderLight from "../../assets/images/new_images/header_lights.webp";
import { useDispatch,useSelector } from "react-redux";
import { transaction } from "../../redux/actions/TransactionAction";
import Lottie from "lottie-react";
import HeaderLights from "../../assets/images/lottie_files/lights_anim.json";

const JazzCash = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [formValues, setFormValues] = useState({
    phoneNumber: "",
  });
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  const [errors, setErrors] = useState({
    phoneNumber: "",
  });
  const [transactionFailedError, setTransactionFailedError] = useState("");


  const userData = useSelector((state) => state?.user?.createUserData);
  const spinData = useSelector((state) => state?.spin?.spinData);

const spinPrize =   spinData?.response?.return_prize_amount;
const transactionId = userData?.response?.return_transaction_id;
const userId = userData?.response?.return_user_id;
const jazzCashData ={
  receiver_number:formValues.phoneNumber,
  amount:`${spinPrize}.00`,
  transaction_id: transactionId,
  user_id:userId,
  type:1
}
  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;
    setTransactionFailedError("");

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
      case "phoneNumber":
        return validatePakistaniPhoneNumber(value);
      default:
        return "";
    }
  };
  const handleApplication = ()=>{
    const userAgent = navigator.userAgent || navigator.vendor;

if (/android/i.test(userAgent)) {
  window.location.href = "https://www.google.com/aclk?sa=L&ai=DChcSEwjfouHticKHAxXIkmgJHQgmDl4YABAAGgJ3Zg&ase=2&gclid=CjwKCAjw74e1BhBnEiwAbqOAjJywEfNlb_OkPGlZ-1ELTiyJp93dYS7Mi9GO6Z8jLRJbH-GwYlIlSBoC7aQQAvD_BwE&sig=AOD64_3i9IZynsqNsw21KtCWULPczOHYHA&q=&nis=6&ved=2ahUKEwiM-tnticKHAxWqcKQEHfmOAeEQ3ooFegQIERAB&adurl="
} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  window.location.href = "https://apps.apple.com/pk/app/jazzcash/id1254853964";
} else {
    console.log("User is using some other device");
}

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneError = validatePakistaniPhoneNumber(formValues.phoneNumber);
    const newErrors = {
      phoneNumber: phoneError,
    };

    if (Object.values(newErrors).every(error => error === "")) {
      dispatch(transaction(jazzCashData)).then((data)=>{
        if(data?.payload?.status === 1)
          {
            navigate("/congrats");
          }
          else if(data?.payload?.status === 0 &&  data?.payload?.code === "G2P-T-2001" ){
            // setErrors("*This number is not on JazzCash");
            setErrors({
              phoneNumber: "",
            });
            setTransactionFailedError("*This number is not on JazzCash");

            // alert( "Please Registor your acount on  Jazz Cash ");
            return
          }
          else{
            // alert( "Transaction Failed please try different account");
            navigate("/transactionfailed");

          }
      })
      // alert("Form is valid!");
      // navigate("/congrats");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Wrapper>
      <div className="jazzcash_form_wrapper">
        <div className="jazzcash_header_wrapper">
        <Lottie
            animationData={HeaderLights}
            autoPlay={true}
            loop={false}
            className="jazzcash_headerMask"
          />
          {/* <img src={HeaderMask} className="img-fluid spinner_headerMask" alt="Header Mask" />
          <img src={HeaderLight} className="img-fluid spinner_headerLight" alt="Lights" /> */}
        </div>
        <div className="jazzcash_form_Heading_wrapper">
          <p>Enter jazzcash number <br /> to receive your prize</p>
        </div>
        <form onSubmit={handleSubmit} className="form_wrapper" noValidate>
          <div className="jazzcash_input_wrapper">
            <input
              type="text"
              className={`form-control jazzcash_custom_input phone_input ${errors.phoneNumber ? "is-invalid" : ""}`}
              id="validationServerPhone"
              aria-describedby="inputGroupPrepend3 validationServerPhoneFeedback"
              name="phoneNumber"
              placeholder="03XX XXXX XXX"
              value={formattedPhoneNumber}
              onChange={handleChange}
              style={{fontWeight:"800"}}
            />
            {errors.phoneNumber ? (
              <div className="invalid-feedback error_message d-block">
                {errors.phoneNumber}
              </div>
            ): ''}
            
            {!errors.phoneNumber && transactionFailedError ? (
              <div className="invalid-feedback error_message d-block">
                {transactionFailedError}
              </div>
            ): ''}
          </div>
          <div className="form_button_wrapper">
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
        </form>
        <p className="or_para">OR</p>
        <div className="jazzCash_button_wrapper" >
          <button className="btn btn-primary" onClick={handleApplication}>
            CREATE JAZZCASH ACCOUNT
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default JazzCash;
