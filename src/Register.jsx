import React from 'react';

const Register = () => {
  return (
    <div id="register" className="register container column padding">
      <div className="title">Workshop Registration</div>
      <div className="container row">
        <div className="list">
          <div className="list-icon icon-price">
            <span>$8k</span>
          </div>

          <div className="register-info">
            <div className="register-title highlight">April 25, 2018</div>
            <div className="register-text">San Francisco, CA</div>
            <div className="register-text"><a className="register-a" href="https://www.eventbrite.com/e/bootstrapping-security-workshop-sf-425-tickets-43766911009">Register</a></div>
          </div>
        </div>

        <div className="list">
          <div className="list-icon icon-price">
            <span>$8k</span>
          </div>

          <div className="register-info">
            <div className="register-title highlight">June 13, 2018</div>
            <div className="register-text">San Francisco, CA</div>
            <div className="register-text"><a className="register-a" href="">Register</a></div>
          </div>
        </div>

        <div className="list">
          <div className="list-icon icon-price">
            <span>$8k</span>
          </div>

          <div className="register-info">
            <div className="register-title highlight">August 15, 2018</div>
            <div className="register-text">San Francisco, CA</div>
            <div className="register-text"><a className="register-a" href="">Register</a></div>
          </div>
        </div>
        </div>
        Want to get started sooner or not in the area?  We organize private workshops. <a className="register-a" href="mailto:private@bootstrappingsecurity.com">Contact us</a>.
    </div>
  );
};

export default Register;
