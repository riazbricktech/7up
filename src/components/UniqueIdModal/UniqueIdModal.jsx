import React, { useEffect } from "react";
import "./UniqueIdModal.css";
import Cross from "../../assets/images/new_images/cross.webp";
const UniqueIdModal = ({ showUniqueQrModal, closeQrModalModal }) => {
  if (!showUniqueQrModal) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeQrModalModal();
    }
  };

  useEffect(() => {
    console.log("Unique Id Initialize");
  }, []);
  return (
    <div className="unique_modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-icon" onClick={closeQrModalModal}>
        <img src={Cross} alt="Cut" />
      </div>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body">
          <div className="modal-message">
            <p>YOUR UNIQUE ID</p>
            <p>HAS ALREADY </p>
            <p>BEEN USED</p>
          </div>
        </div>
      </div>
      <button className="modal-button" onClick={closeQrModalModal}>
        SCAN NEW QR CODE
      </button>
    </div>
  );
};

export default UniqueIdModal;
