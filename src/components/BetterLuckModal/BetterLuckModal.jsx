import React, { useState } from 'react';
import './BetterLuckModal.css';
import Emoji from "../../assets/images/new_images/emoji.webp";
const BetterLuckModal = ({ showBetterLuckModal, closeBetterLuckModal }) => {

  const [image, setImage] = useState(null);

  const handleCapture = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };
  if (!showBetterLuckModal) {
    return null;
  }

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       closeBetterLuckModal();
//     }
//   };

  return (
  <>
    <div className="betterLuck_modal_overlay" 
    // onClick={handleOverlayClick}
    
    >
      <div className="modal-content" 
      
    //   onClick={(e) => e.stopPropagation()}
      >
        {/* <button className="close-button" onClick={closeBetterLuckModal}>×</button> */}
        <div className="modal-body">
          <div className="modal-icon" onClick={closeBetterLuckModal}><img src={Emoji} className='emoji' alt="Emoji"/></div>
          <div className="modal-message">
            <p>BETTER LUCK</p>
            <p>NEXT TIME</p>
          </div>
        </div>
      </div>
      <label htmlFor="cameraInput"  className="modal-button">SCAN NEW QR CODE
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleCapture}
        style={{ display: 'none' }}
        id="cameraInput"
      />
      {image && <img src={image} alt="Captured" style={{ marginTop: '20px', maxWidth: '100%' }} />}
        </label>
    </div>
    </>
  );
};

export default BetterLuckModal;