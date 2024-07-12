import React, { useState } from 'react';
import { validatePakistaniPhoneNumber } from '../services/NumberValidation';

const NumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length > 11) {
      return; // Prevent additional characters if length exceeds 11 digits
    }
    const formattedValue = value.replace(/(.{4})/g, '$1 ').trim(); // Insert space after every 4 digits
    setFormattedPhoneNumber(formattedValue);

    const errorMessage = validatePakistaniPhoneNumber(value); // Validate without spaces
    setError(errorMessage);
    setPhoneNumber(value); // Update the phoneNumber state without spaces
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMessage = validatePakistaniPhoneNumber(phoneNumber); // Validate without spaces

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
