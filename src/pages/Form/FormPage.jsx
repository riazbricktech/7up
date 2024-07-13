import React from "react";
import "./FormPage.css";
import BottleImage from "../../assets/images/sevenUp_bottle.webp";
import HeaderImage from "../../assets/images/header_image.webp";
function FormPage() {
  return (
    <div className="container-fluid form_container">
      <div className="row">
        <div className="col-12 form_col">
          {/* /////////   Header Wrapper //////// */}
          <div className="header_image_wrapper">
            <img src={HeaderImage} className="img-fluid" alt="Pakistan" />
          </div>

          {/* /////////   Form Wrapper //////// */}
          <form action="">
            <div class="input-wrapper">
              <input
                type="text"
                class="form-control custom-input"
                placeholder="Name"
              />
            </div>
            <div class="input-wrapper">
              <input
                type="text"
                class="form-control custom-input"
                placeholder="0312 1234567"
              />
            </div>
            <div class="input-wrapper">
              <input
                type="text"
                class="form-control custom-input"
                placeholder="Unique Id"
              />
            </div>
            <div class="select-container">
              <select
                class="form-select custom-select"
                aria-label="Default select example"
              >
                <option selected>Select City</option>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
              </select>
            </div>

            <div class="checkbox-wrapper">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
   Terms and Conditions
  </label>
            </div>

            <div class="button-wrapper">
            <button type="button" class="btn btn-primary">Next</button>
            </div>
          </form>


                 {/* /////////  Bottle Wrapper  /////////// */}
                 <div className="Bottle_wrapper">
            <img src={BottleImage} className="img-fluid" alt="7up Bottle" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default FormPage;
