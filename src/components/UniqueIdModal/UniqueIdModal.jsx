import React, { useState } from 'react';
import './UniqueIdModal.css';

const UniqueIdModal = ({ showUniqueQrModal, closeQrModalModal }) => {
  if (!showUniqueQrModal) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeQrModalModal();
    }
  };

  return (
    <div className="unique_modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* <button className="close-button" onClick={closeQrModalModal}>×</button> */}
        <div className="modal-body">
          <div className="modal-icon" onClick={closeQrModalModal}>×</div>
          <div className="modal-message">
            <p>YOUR UNIQUE ID</p>
            <p>HAS ALREADY </p>
            <p>BEEN USED</p>
          </div>
        </div>
      </div>
        <button className="modal-button" onClick={closeQrModalModal}>SCAN NEW QR CODE</button>
    </div>
  );
};

export default UniqueIdModal;