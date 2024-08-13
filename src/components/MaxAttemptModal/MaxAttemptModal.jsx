import React, { useEffect } from "react";
import "./MaxAttemptModal.css";
import Emoji from "../../assets/images/new_images/emoji.webp";
import { clearSpinFunction } from "../../redux/slice/SpinSlice";
import { useDispatch } from "react-redux";
import { clearUserFunction } from "../../redux/slice/CreateUserSlice";
import { clearTransactionFunction } from "../../redux/slice/TransactionSlice";
import { prizeName } from "../../redux/slice/WinPrizeSlice";
import { jcNumFunction } from "../../redux/slice/JcNumberSlice";

const MaxAttemptModal = ({ showMaxAttemptModal, closeMaxAttemptModal }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearSpinFunction());
      dispatch(clearUserFunction());
      dispatch(clearTransactionFunction());
      dispatch(jcNumFunction(""));
      dispatch(prizeName(null));
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  useEffect(() => {
    console.log("Max Attempt Initialize");
  }, []);

  if (!showMaxAttemptModal) {
    return null;
  }

  return (
    <>
      <div
        className="maxAttempt_modal_overlay"
        // onClick={handleOverlayClick}
      >
        <div
          className="modal-content"

          //   onClick={(e) => e.stopPropagation()}
        >
          {/* <button className="close-button" onClick={closeBetterLuckModal}>×</button> */}
          <div className="modal-body">
            <div className="modal-icon" onClick={closeMaxAttemptModal}>
              <img src={Emoji} className="emoji" alt="Emoji" />
            </div>
            <div className="modal-message">
              <span className="heading">Max attempts reached</span>
              <span className="modal_para">Please try again later.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaxAttemptModal;
