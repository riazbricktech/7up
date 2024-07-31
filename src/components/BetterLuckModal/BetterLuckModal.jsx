


import React, { useEffect, useState } from 'react';
import './BetterLuckModal.css';
import Emoji from "../../assets/images/new_images/emoji.webp";
import { useNavigate } from 'react-router-dom';

const BetterLuckModal = ({ showBetterLuckModal, closeBetterLuckModal }) => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleCapture = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  useEffect(() => {
    if (showBetterLuckModal) {
      // Clear localStorage and navigate to "/" when modal is shown
      localStorage.clear();
      const timer = setTimeout(() => {
        navigate('/'); // Navigate to "/"
      }, 3000); // 3 seconds delay
  
      return () => clearTimeout(timer)
    }
  }, [showBetterLuckModal, navigate]);

  if (!showBetterLuckModal) {
    return null;
  }

  useEffect(()=>{
    console.log("BetterLuck Initialize");
  },[])

  return (
    <>
      <div className="betterLuck_modal_overlay">
        <div className="modal-content">
          <div className="modal-body">
            <div className="modal-icon" onClick={closeBetterLuckModal}>
              <img src={Emoji} className='emoji img-fluid' alt="Emoji" />
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
