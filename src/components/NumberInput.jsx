import React, { useState } from 'react';
import { validatePakistaniPhoneNumber } from '../services/NumberValidation';

const NumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState(0);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 11) {
      return;
    }
    const formattedValue = value.replace(/(.{4})/g, '$1 ').trim(); 
    setFormattedPhoneNumber(formattedValue);

    const errorMessage = validatePakistaniPhoneNumber(value); 
    setError(errorMessage);
    setPhoneNumber(value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMessage = validatePakistaniPhoneNumber(phoneNumber); 

    if (errorMessage) {
      setError(errorMessage);
    } else {
      alert("Phone number is valid!");
    }
  };

  const isValid = !error && phoneNumber.length === 11 && phoneNumber.startsWith("03");

  return (
    <>
      <div className="row">
        <div className="col-4">
          <div className="container mt-5">
            <form onSubmit={handleSubmit} className="needs-validation" noValidate>
              <div className="mb-3">
                <label htmlFor="validationServerPhone" className="form-label">Phone Number</label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend3"><i className="bi bi-telephone-fill"></i></span>
                  <input
                    type="text"
                    className={`form-control ${error ? 'is-invalid' : ''}`}
                    id="validationServerPhone"
                    aria-describedby="inputGroupPrepend3 validationServerPhoneFeedback"
                    value={formattedPhoneNumber}
                    onChange={handleChange}
                    required
                  />
                  <div id="validationServerPhoneFeedback" className="invalid-feedback">
                    {error}
                  </div>
                </div>
              </div>
              <button className="btn btn-primary" type="submit" disabled={!isValid}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NumberInput;
