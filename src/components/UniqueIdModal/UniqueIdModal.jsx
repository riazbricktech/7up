import React, { useEffect ,useState} from "react";
import "./UniqueIdModal.css";
import Cross from "../../assets/images/new_images/cross.webp";
import { useSelector } from "react-redux";

const UniqueIdModal = ({ showUniqueQrModal, closeQrModalModal }) => {
  const userInfo = useSelector((state) => state?.user?.createUserData);



  const handleCapture = (event) => {
  };
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeQrModalModal();
    }
  };

  useEffect(() => {
    console.log("Unique Id Initialize");
  }, []);

  if (!showUniqueQrModal) {
    return null;
  }
  return (
    <div className="unique_modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-icon" onClick={closeQrModalModal}>
        <img src={Cross} alt="Cut" />
      </div>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body">
          {userInfo?.response?.return_message === 
          "Maximum Attempts Utilized. Try again in 24 hours!"
          ?
          <div className="modal-message">
          <p>Maximum Attempts</p>
          <p>Utilized.</p>
          <p>Try again in</p>
          <p>24 hours!</p>
        </div>
         
          :
          <div className="modal-message">
          <p>YOUR UNIQUE ID</p>
          <p>HAS ALREADY </p>
          <p>BEEN USED</p>
        </div>

          }
        </div>
      </div>
      {/* <button className="modal-button" onClick={closeQrModalModal}>
        SCAN NEW QR CODE
      </button> */}

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
  );
};

export default UniqueIdModal;
