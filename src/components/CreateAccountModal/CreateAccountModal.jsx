import React, { useEffect, useState } from 'react';
import './CreateAccountModal.css';
import WaitingIcon from "../../assets/images/new_images/waiting.webp";
const CreateAccountModal = ({ showCreateAccountModal, closeCreateAccountModal }) => {
    const [seconds, setSeconds] = useState(4);

  if (!showCreateAccountModal) {
    return null;
  }

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       closeBetterLuckModal();
//     }
//   };


useEffect(() => {
  if (seconds > 0) {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer); 
  }
}, [seconds]);

useEffect(()=>{
if(seconds === 0){
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      window.location.href =
        "https://www.google.com/aclk?sa=L&ai=DChcSEwjfouHticKHAxXIkmgJHQgmDl4YABAAGgJ3Zg&ase=2&gclid=CjwKCAjw74e1BhBnEiwAbqOAjJywEfNlb_OkPGlZ-1ELTiyJp93dYS7Mi9GO6Z8jLRJbH-GwYlIlSBoC7aQQAvD_BwE&sig=AOD64_3i9IZynsqNsw21KtCWULPczOHYHA&q=&nis=6&ved=2ahUKEwiM-tnticKHAxWqcKQEHfmOAeEQ3ooFegQIERAB&adurl=";
    } 
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href =
        "https://apps.apple.com/pk/app/jazzcash/id1254853964";
    } else {
     Alert("Please create account on Jazzcash and return to this screen")
    }
}
},[seconds])

  return (
  <>
    <div className="createAccount_modal_overlay" 
    // onClick={handleOverlayClick}
    
    >
      <div className="modal-content" 
      
    //   onClick={(e) => e.stopPropagation()}
      >
        {/* <button className="close-button" onClick={closeBetterLuckModal}>×</button> */}
        <div className="modal-body">
          {/* <div className="modal-icon" onClick={closeCreateAccountModal}><img src={Emoji} className='emoji' alt="Emoji"/></div> */}
          <div className="modal-message">
           
         <p>please return to this</p>
            <p> screen after</p>
            <p> creating jazzcash</p>
            <p>   account </p>
          </div>
        </div>
      </div>
            <div className="redirect_wrapper">
<img src={WaitingIcon} alt="Waiting" />
<p className='redirect_para'>Redirecting in {seconds}...</p>
            </div>
    </div>
    </>
  );
};

export default CreateAccountModal;