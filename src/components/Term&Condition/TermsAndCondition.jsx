import React from "react";
import "./TermsAndCondition.css";

const TermsAndCondition = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="tc_modal-overlay" onClick={onClose}>
        <div
          className="tc_modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="tc_modal-header">
            <h2 className="tc_modal-title">Terms and Conditions</h2>
          </div>
          <div className="tc_modal-content">
            <b>Terms & Conditions for 7UP Flavours of Pakistan Campaign</b>
            <p>
              By entering into the Promotion, the participant agrees to be bound
              by the following Terms & Conditions:
            </p>

            <b>About the Promotion</b>
            <p>
              1. The Promotion is operated by Pepsi-Cola International Pvt Ltd{" "}
              <span style={{ fontWeight: "800" }}>{`(we, us, our)`}</span>{" "}
            </p>
            <p>
              2. The Promotion runs from ……… to ………………on <span style={{backgroundColor:"yellow", fontStyle:"italic"}}> across stores in the
              Islamic Republic of Pakistan </span>. The promotion is valid on 7UP
              beverage bottles and cans (250ml Can, 345ml PET, 500ml PET, 1L
              PET, 1.5L PET, 1.25L PET, 2L PET, 2.25L PET).
            </p>
            <p>
              3. Entries received after the closing date will not be processed.
            </p>
            <b>How to enter</b>
            <p>
              4. PCI <span style={{ backgroundColor:"yellow" }}>participant</span> shall scan the QR code on the label of the
              purchased CAN or PET bottle
            </p>
            <ol style={{ listStyleType: "lower-alpha" }}>
              <li>
                Fill in the required data on the form and submit the form{" "}
              </li>
              <li>
                Consumer purchasing a PET bottle shall be required to fill in
                the Unique ID code present inside the cap of PET bottle.
              </li>
              <li>
                Consumer purchasing a CAN shall be required to scan the QR code
                that leads them to micro-site.
              </li>
              <li>All participants need to have a Jazzcash e-wallet.</li>
              <li>
                Participant will be instantly notified if they are a winner or
                not.
              </li>
              <li>
                In the event of winning, cashback reward will be instantly
                topped up on the shared Jazzcash Phone number.
              </li>
            </ol>
            <p>
              5. You may make multiple entries into the Promotion with the
              Purchase of a new PET Botlle or CAN everytime.
            </p>
            <p>
              6. The Promotion is open to individuals who are resident in
              Pakistan and aged 18 years or over. When entering a promotion or
              claiming a prize, you must use your real name. Phone number and
              city of residence will also be required.
            </p>
            <p>
              7. Our employees and those of our affiliates, agents or
              distributors
              {`(including any promotion partners or prize providers)`} and
              their respective immediate family and household members are not
              permitted to participate in the Promotion and will not be eligible
              to receive any prize.
            </p>
            <p>
              8. We reserve the right to exclude or disqualify any entry which
              we consider does not comply with these Terms & Conditions or any
              participant who has acted in an unfair, fraudulent or misleading
              manner or otherwise in breach of these Terms & Conditions.
            </p>
            <b>Prizes</b>
            <p>
              9. Prizes will be as follows: <br />
              Cashback rewards of the following denominations: Rs.50, Rs,100,
              Rs.1000, Rs.10,000.
            </p>
            <p>
              10. Winners will interactively………they’ll play and notified
              immediately on the 7UP website. Our decision is final and no
              correspondence or discussion will be entered into.{" "}
            </p>
            <p>
              11. In the event of unforeseen circumstances or circumstances
              outside our control, we reserve the right to offer an alternative
              prize of equal or greater value.
            </p>
            <p>
              12. If you have not submitted valid information to claim a prize
              within notification, the prize shall be forfeited and may be
              reallocated at our sole discretion.
            </p>
            <b>Limitation of liability</b>
            <p>
              14. By entering a Promotion or submitting any video, image, audio
              file or other materials {`(Content)`} in relation to a Promotion:
            </p>
            <ol style={{ listStyleType: "lower-alpha" }}>
              <li>
                you agree that we can re-post, publicise and otherwise use
                such Content via any social media network or platform, including
                our websites;
              </li>
              <li>you confirm that:</li>
              <ol style={{listStyleType:"lower-roman"}}>
                <li>
                  you own and control all of the rights in the Content and
                  you have the right to use and submit the same;
                </li>
                <li>
                  you have obtained appropriate consent from anyone featured
                  or mentioned in the Content and that the Content {`(and our use
                  of it pursuant to these Terms & Conditions)`} does not and will
                  not infringe the rights of any individual or business
                  {`(including any intellectual property rights, moral rights,
                  right to privacy or confidentiality)`};
                </li>
                <li>
                  your entry does not violate any applicable law and does
                  not contain anything which is obscene, indecent, untrue,
                  misleading, defamatory or derogatory in any way or which would
                  incite crime or public disorder.
                </li>
              </ol>
            </ol>
            <b>Publicity and data protection</b>
                    <p>15.	If you win a prize, you may be required to participate in reasonable publicity. We and the prize provider may publish and use any Content and your name/username, image, likeness, voice and video footage in any and all media for publicity purposes after the Promotion ends. You will sign an appropriate release form for this purpose if requested by us.</p>
                    <p>16.	All personal information that you provide to us or which we obtain during the Promotion shall be handled by us in accordance with these Terms & Conditions and the PepsiCo privacy policy available at <a href="https://platformassets.wspprod.com/pepsiredemptionpolicy-static/privacypolicy-eng.html" target="_blank" rel="noopener noreferrer">https://platformassets.wspprod.com/pepsiredemptionpolicy-static/privacypolicy-eng.html</a>. See also paragraph 14 above with regard to publicity of winners.</p>

                    <b>General</b>
                    <p>17.	The Promotion is subject to the laws of the Islamic Republic of Pakistan and any disputes arising in connection with them shall be subject to the exclusive jurisdiction of the courts of the Islamic Republic of Pakistan.</p>
                    <p>18.	We reserve the right to hold void, suspend or cancel this Promotion and/or change these Terms & Conditions from time to time if we consider it necessary or appropriate to do so. It is your responsibility to review these Terms & Conditions for any changes.</p>
                    <p>19.	For all enquiries in relation to a Promotion or these Terms & Conditions, please contact us at {`[@7uppakistan Direct Messages]`}.</p>
            {/* <p>
              IMPORTANT: Please read the following terms before using your iOS device. By using your iOS device, you are agreeing to be bound by the iOS Terms and Conditions.
            </p>
            <p>
              PLEASE READ THIS SOFTWARE LICENSE AGREEMENT ("LICENSE") CAREFULLY BEFORE USING YOUR IOS DEVICE OR DOWNLOADING THE SOFTWARE UPDATE ACCOMPANYING THIS LICENSE. BY USING YOUR IOS DEVICE OR DOWNLOADING A SOFTWARE UPDATE, AS APPLICABLE, YOU ARE AGREEING TO BE BOUND BY THE TERMS OF THIS LICENSE.
            </p>
            <p>
              IF YOU DO NOT AGREE TO THE TERMS OF THIS LICENSE, DO NOT USE THE IOS DEVICE OR DOWNLOAD THE SOFTWARE UPDATE. IF YOU HAVE RECENTLY PURCHASED AN IOS DEVICE AND YOU DO NOT AGREE TO THE TERMS OF THE LICENSE, YOU MAY RETURN THE IOS DEVICE WITHIN THE RETURN PERIOD TO THE APPLE STORE OR AUTHORIZED DISTRIBUTOR WHERE YOU OBTAINED IT FOR A REFUND, SUBJECT TO APPLE'S RETURN POLICY FOUND AT [http://www.apple.com/legal/sales_policies/](http://www.apple.com/legal/sales_policies/).
            </p> */}
          </div>
          <div className="tc_button-container">
            <button className="tc_button" onClick={()=> onClose(0)}>
              Disagree
            </button>
            <button className="tc_button" onClick={()=> onClose(1)}>
              Agree
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default TermsAndCondition;
