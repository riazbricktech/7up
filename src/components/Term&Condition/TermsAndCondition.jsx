import React from 'react';
import './TermsAndCondition.css';

const TermsAndCondition = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="tc_modal-overlay" onClick={onClose}>
        <div className="tc_modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="tc_modal-header">
            <h2 className="tc_modal-title">Terms and Conditions</h2>
          
          </div>
          <div className="tc_modal-content">
            <p>
              IMPORTANT: Please read the following terms before using your iOS device. By using your iOS device, you are agreeing to be bound by the iOS Terms and Conditions.
            </p>
            <p>
              PLEASE READ THIS SOFTWARE LICENSE AGREEMENT ("LICENSE") CAREFULLY BEFORE USING YOUR IOS DEVICE OR DOWNLOADING THE SOFTWARE UPDATE ACCOMPANYING THIS LICENSE. BY USING YOUR IOS DEVICE OR DOWNLOADING A SOFTWARE UPDATE, AS APPLICABLE, YOU ARE AGREEING TO BE BOUND BY THE TERMS OF THIS LICENSE.
            </p>
            <p>
              IF YOU DO NOT AGREE TO THE TERMS OF THIS LICENSE, DO NOT USE THE IOS DEVICE OR DOWNLOAD THE SOFTWARE UPDATE. IF YOU HAVE RECENTLY PURCHASED AN IOS DEVICE AND YOU DO NOT AGREE TO THE TERMS OF THE LICENSE, YOU MAY RETURN THE IOS DEVICE WITHIN THE RETURN PERIOD TO THE APPLE STORE OR AUTHORIZED DISTRIBUTOR WHERE YOU OBTAINED IT FOR A REFUND, SUBJECT TO APPLE'S RETURN POLICY FOUND AT [http://www.apple.com/legal/sales_policies/](http://www.apple.com/legal/sales_policies/).
            </p>
          </div>
          <div className="tc_button-container">
            <button className="tc_button" onClick={onClose}>Disagree</button>
            <button className="tc_button" onClick={onClose}>Agree</button>
          </div>
        </div>
      </div>
    )
  );
};

export default TermsAndCondition;
