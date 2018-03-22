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
            <div className="register-title highlight">June 13, 2018</div>
            <div className="register-text">San Francisco, CA</div>
            <div className="register-text"><a className="register-a" href="https://www.eventbrite.com/e/bootstrapping-security-workshop-sf-613-tickets-44047063954">Register</a></div>
          </div>
        </div>

        <div className="list">
          <div className="list-icon icon-price">
            <span>$8k</span>
          </div>

          <div className="register-info">
            <div className="register-title highlight">August 15, 2018</div>
            <div className="register-text">San Francisco, CA</div>
            <div className="register-text"><a className="register-a" href="https://www.eventbrite.com/e/bootstrapping-security-workshop-sf-815-tickets-44047103071">Register</a></div>
          </div>
        </div>
        </div>

        <div className="list">
          <div className="list-icon icon-price">
            <span>$8k</span>
          </div>

          <div className="register-info">
            <div className="register-title highlight">October 17, 2018</div>
            <div className="register-text">San Francisco, CA</div>
            <div className="register-text"><a className="register-a" href="https://www.eventbrite.com/e/bootstrapping-security-workshop-sf-1017-tickets-44434798679">Register</a></div>
          </div>
        </div>
      <div className="container row list-center">
        <div className="list list-center">
        We select venues that enable multiple teams from multiple organizations to work independendently and simultaneously.  The rates above are for single teams of five. <br/><br/>
Want to get started sooner or not in the area?  <br/> We organize private workshops. <br/><a className="register-a" href="mailto:business@bootstrappingsecurity.com">Contact us</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
