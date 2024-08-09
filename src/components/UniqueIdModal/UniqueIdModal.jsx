import React, { useEffect ,useState} from "react";
import "./UniqueIdModal.css";
import Cross from "../../assets/images/new_images/cross.webp";
const UniqueIdModal = ({ showUniqueQrModal, closeQrModalModal }) => {
  const [image, setImage] = useState(null);

  const handleCapture = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
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
          <div className="modal-message">
            <p>YOUR UNIQUE ID</p>
            <p>HAS ALREADY </p>
            <p>BEEN USED</p>
          </div>
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
          {image && (
            <img
              src={image}
              alt="Captured"
              style={{ marginTop: "20px", maxWidth: "100%" }}
            />
          )}
        </label>
    </div>
  );
};

export default UniqueIdModal;
