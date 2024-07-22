import React from 'react';
import './CapModal.css';
import Header from "../../assets/images/new_images/header_lights.webp";
import UidCap from "../../assets/images/new_images/uidCap.webp";

const CapModal = ({ showModal, closeModal }) => {
  if (!showModal) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="cap_modal_overlay" onClick={handleOverlayClick}>
      <div className="modal-icon" onClick={closeModal}>×</div>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={Header} alt="Header" className="modal-header-image"/>
        <div className="modal-body">
          <div className="modal-message">
            <p>FIND YOUR</p>
            <p>UNIQUE</p>
            <p>CODE HERE</p>
          </div>
          <div className="modal_img">
            <img src={UidCap} className='cap_img' alt="Cap" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapModal;
