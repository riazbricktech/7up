import React, { useEffect, useState } from "react";
import Wrapper from "../../reusableComponents/Wrapper/Wrapper";
import "./JazzCash.css";
import { useNavigate } from "react-router-dom";
import { validatePakistaniPhoneNumber } from "../../services/NumberValidation";
import { useDispatch, useSelector } from "react-redux";
import { transaction } from "../../redux/actions/TransactionAction";
import Lottie from "lottie-react";
import HeaderLights from "../../assets/images/lottie_files/lights_anim.json";
import ErrorIcon from "../../assets/images/new_images/error.webp";
import CreateAccountModal from "../../components/CreateAccountModal/CreateAccountModal";
import MaxAttemptModal from "../../components/MaxAttemptModal/MaxAttemptModal";
import { transactionCountFunction } from "../../redux/slice/TransactionCountSlice";

const JazzCash = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const [isDisabledFields, setIsDisabledFields] = useState(true);



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
  const transactionData = useSelector(
    (state) => state?.taction?.transactionData
  );

  const isLoader = useSelector(
    (state) => state?.taction?.isLoading
  );

  // const { return_transaction_id, return_user_id, return_phone_user } =
  //   userData?.response;

  // const { return_prize_amount } = spinData?.response || null;

    const return_transaction_id = userData?.response?.return_transaction_id;
    const return_user_id = userData?.response?.return_user_id;
    const return_phone_user =   userData?.response?.return_phone_user;
    const return_prize_amount = spinData?.response?.return_prize_amount;
  






  const jazzCashData = {
    receiver_number: formValues.phoneNumber,
    amount: return_prize_amount,
    transaction_id: return_transaction_id,
    user_id: return_user_id,
  };
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

  
  const handleCreateAccountAlert = () => {
    setIsCreateAccount(true);

    setTimeout(() => {
      setIsDisabledFields(false);
    }, 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneError = validatePakistaniPhoneNumber(formValues.phoneNumber);
    const newErrors = {
      phoneNumber: phoneError,
    };

    if (Object.values(newErrors).every((error) => error === "")) {
      dispatch(transaction(jazzCashData)).then((data) => {
        if (data?.payload?.status === 1) {
          navigate("/congrats");
        } else if (
          data?.payload?.status === 0 &&
          data?.payload?.code === "G2P-T-2001"
        ) {
          // setErrors("*This number is not on JazzCash");
          // dispatch(transactionCountFunction(transactionCount + 1));
          setErrors({
            phoneNumber: "",
          });
          setTransactionFailedError("*This number is not on JazzCash");
          return;
        } else {
          navigate("/transactionfailed");
        }
      });
      // navigate("/congrats");
    } else {
      setErrors(newErrors);
    }
  };

  const handleCreateAccountModal = () => {
    setIsCreateAccount(false);
  };

  const handleMaxAttemptModal = () => {
    // setIsMaxAttempt(false)
  };

  useEffect(() => {
    if (transactionData?.code === "G2P-T-2001") {

      setTransactionFailedError("*This number is not on JazzCash");
    } else {
      setTransactionFailedError(transactionData?.response);
    }
  }, [transactionData]);

  useEffect(() => {

    if (return_phone_user) {
      setFormattedPhoneNumber(return_phone_user)
      // setFormValues(() => ({
      //   phoneNumber: return_phone_user,
      // }));
    }
  }, [return_phone_user]);
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
        </div>

        {transactionData?.attempt_counter === 1 && (
          <div className="jazzcash_error_wrapper">
            <img src={ErrorIcon} alt="Error" />
            <p>
              You have already tried twice. <br />
              One last attempt left
            </p>
          </div>
        )}

        <div className="jazzCash_button_wrapper">
          <button className="btn btn-primary" onClick={handleCreateAccountAlert}>
            CREATE JAZZCASH ACCOUNT
          </button>
        </div>
        <p className="and_para">  {transactionData?.attempt_counter === 0 ? "OR" : "AND" }</p>

        <div className="jazzcash_form_Heading_wrapper">
          <p>
            Enter jazzcash number <br /> to receive your prize
          </p>
        </div>
        <form onSubmit={handleSubmit} className="form_wrapper" noValidate>
          <div className="jazzcash_input_wrapper">
            <input
              type="text"
              className={`form-control jazzcash_custom_input phone_input ${
                errors.phoneNumber ? "is-invalid" : ""
              }`}
              id="validationServerPhone"
              aria-describedby="inputGroupPrepend3 validationServerPhoneFeedback"
              name="phoneNumber"
              placeholder="03XX XXXX XXX"
              value={formattedPhoneNumber}
              onChange={handleChange}
              style={{
                color: isDisabledFields ? "gray" : "white",
                cursor: isDisabledFields ? "no-drop" : "",
              }}
              disabled={isDisabledFields}
            />
            {errors.phoneNumber ? (
              <div className="invalid-feedback error_message d-block">
                {errors.phoneNumber}
              </div>
            ) : (
              ""
            )}

            {!errors.phoneNumber && transactionFailedError ? (
              <div className="invalid-feedback error_message d-block">
                {transactionFailedError}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form_button_wrapper">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isDisabledFields || isLoader}
              style={{
                backgroundColor: isDisabledFields ? "#aaaaaa" : "#E81D2C",
                color: isDisabledFields ? "#E81D2C" : "white",

                cursor: isDisabledFields ? "no-drop" : "",

              }}
            >
          {isLoader ? <div className="spinner-border text-warning mt-1" role="status">
  <span className="visually-hidden">Loading...</span>
</div> : "Next"}
            </button>
          </div>
        </form>
      </div>
      {isCreateAccount && (
        <CreateAccountModal
          showCreateAccountModal={isCreateAccount}
          closeCreateAccountModal={handleCreateAccountModal}
        />
      )}
      {transactionData?.attempt_counter === 2 && (
        <MaxAttemptModal
          showMaxAttemptModal={true}
          closeMaxAttemptModal={handleMaxAttemptModal}
        />
      )}
    </Wrapper>
  );
};

export default JazzCash;
