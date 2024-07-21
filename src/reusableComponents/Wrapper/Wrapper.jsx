import React from 'react';
import "./Wrapper.css"
// import Background from "../../assets/images/new_images/background.webp"
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
