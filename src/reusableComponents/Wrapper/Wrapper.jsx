import React from 'react';
import "./Wrapper.css"
const Wrapper = ({ children }) => {
  return (
    <div className="container-fluid Wrapper_container">
      <div className="row">
        <div className="col-12 wrapper_col">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
