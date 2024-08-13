import React, { useEffect, useState } from "react";
import "./BetterLuckModal.css";
import Emoji from "../../assets/images/new_images/emoji.webp";
//  remove redux state value
import { clearSpinFunction } from "../../redux/slice/SpinSlice";
import { useDispatch } from "react-redux";
import { clearUserFunction } from "../../redux/slice/CreateUserSlice";
import { clearTransactionFunction } from "../../redux/slice/TransactionSlice";
import { prizeName } from "../../redux/slice/WinPrizeSlice";

const BetterLuckModal = ({ showBetterLuckModal, closeBetterLuckModal }) => {
  // const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleCapture = (event) => {
    // Camera open hota hai jab user input field ko trigger kare
    // Lekin hum image ko state mein save nahi karenge
  };

  useEffect(() => {
    if (showBetterLuckModal) {
      const timer = setTimeout(() => {
        dispatch(clearSpinFunction());
        dispatch(clearUserFunction());
        dispatch(clearTransactionFunction());
        dispatch(prizeName(null));
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [showBetterLuckModal]);

  useEffect(() => {
    console.log("BetterLuck Initialize");
  }, []);

  if (!showBetterLuckModal) {
    return null;
  }

  return (
    <>
      <div className="betterLuck_modal_overlay">
        <div className="modal-content">
          <div className="modal-body">
            <div className="modal-icon" onClick={closeBetterLuckModal}>
              <img src={Emoji} className="emoji img-fluid" alt="Emoji" />
            </div>
            <div className="modal-message">
              <p>BETTER LUCK</p>
              <p>NEXT TIME</p>
            </div>
          </div>
        </div>
        <label htmlFor="cameraInput" className="modal-button">
          SCAN NEW QR CODE
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleCapture}
            style={{ display: "none" }}
            id="cameraInput"
          />
        </label>
      </div>
    </>
  );
};

export default BetterLuckModal;
