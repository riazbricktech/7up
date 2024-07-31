import React,{useEffect} from 'react';
import './PrivacyPolicy.css';



const PrivacyPolicy = ({ show, handleClose }) => {

  useEffect(()=>{
    console.log("Privacy Policy Initialize");
  },[])
  return (
    <div className={`pp_modal ${show ? 'pp_show' : ''}`} onClick={handleClose}>
      <div className="pp_modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="pp_modal-header">
          <h2>WE CARE ABOUT YOUR PRIVACY!</h2>
        </div>
        <div className="pp_modal-body">
          <p>
            Your privacy is important to us which is why we want to inform you
            on our updated Privacy Notice.
          </p>
          <p>
            To give you a more transparent and clear information on how we
            process your personal data, we have divided the Privacy Notice into
            different chapters. Depending on if you are a subscriber, H&M Club
            member or if you have an H&M Account, different parts of the notice
            will apply to you. In each chapter, we describe in more detail what
            personal data we have about you and how we use it. We have also
            increased the information on your rights, for example how to get
            access to your data and how you can request to terminate the usage
            of your data.
          </p>
          <p>You can find our Privacy Notice here.</p>
        </div>
        <div className="pp_modal-footer">
          <button className="pp_modal-button pp_privacy-notice">Privacy Notice</button>
          <button className="pp_modal-button" onClick={handleClose}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
