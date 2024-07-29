import React from 'react';
import './CapModal.css';
import Header from "../../assets/images/new_images/header_light_2.webp";
import UidCap from "../../assets/images/new_images/uidCap.webp";

import Cross from "../../assets/images/new_images/cross.webp";
import IndicateArrow from "../../assets/images/new_images/indicateArrow.webp";

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
      <div className="modal-icon" onClick={closeModal}><img src={Cross} alt="Cut" /></div>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={Header} alt="Header" className="modal-header-image"/>
        <div className="modal-body">
          <div className="modal-message">
            <p>FIND YOUR</p>
            <p>UNIQUE</p>
            <p>CODE HERE</p>
          </div>
          <div className="arrowWrapper">
            <img src={IndicateArrow} alt="Arrow"  className='img-fluid'/>
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
