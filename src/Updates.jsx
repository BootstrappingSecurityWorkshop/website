import React from 'react';

const Updates = () => {
  return (
    <div id="updates" className="updates bkgd-map container column padding">
      <div className="bkgd-arrow bkgd-arrow-up"></div>
      <img src="/img/register-key.svg"/>
      <div className="title">Get Workshop Updates</div>
      <br/>
      <form className="signup container row" method="post" name="updates" action="https://roguegenius.us17.list-manage.com/subscribe/post?u=41ebf4feab5cfe579928cf331&amp;id=87d50e2a09" target="_blank" noVlidate>
        <input className="input-email" type="email" name="EMAIL" placeholder="Type your email here!"/>
        <input className="input-submit" type="submit" value="Submit"/>
        <div className="register-hidden" aria-hidden="true"><input type="text" name="b_41ebf4feab5cfe579928cf331_87d50e2a09" tabIndex="-1" value=""/></div>
      </form>
    </div>
  );
};

export default Updates;
