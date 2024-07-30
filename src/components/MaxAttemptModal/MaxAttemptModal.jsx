import React,{useEffect} from 'react';
import './MaxAttemptModal.css';
import Emoji from "../../assets/images/new_images/emoji.webp";
import { useNavigate } from 'react-router-dom';

const MaxAttemptModal = ({ showMaxAttemptModal, closeMaxAttemptModal }) => {
const navigate =useNavigate();
  if (!showMaxAttemptModal) {
    return null;
  }

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       closeBetterLuckModal();
//     }
//   };

useEffect(() => {
  
  if(showMaxAttemptModal){
    console.log(showMaxAttemptModal,"showMaxAttemptModal");
    localStorage.clear();
    const timer = setTimeout(() => {
      navigate('/'); 
    }, 2000);
  
    return () => clearTimeout(timer);
  }

 
}, [showMaxAttemptModal])


  return (
  <>
    <div className="maxAttempt_modal_overlay" 
    // onClick={handleOverlayClick}
    
    >
      <div className="modal-content" 
      
    //   onClick={(e) => e.stopPropagation()}
      >
        {/* <button className="close-button" onClick={closeBetterLuckModal}>×</button> */}
        <div className="modal-body">
          <div className="modal-icon" onClick={closeMaxAttemptModal}><img src={Emoji} className='emoji' alt="Emoji"/></div>
          <div className="modal-message">

         <span className='heading'>Max attempts reached</span>
            <span  className='modal_para'>Please try again later.</span>
          </div>
        </div>
      </div>
        
    </div>
    </>
  );
};

export default MaxAttemptModal;