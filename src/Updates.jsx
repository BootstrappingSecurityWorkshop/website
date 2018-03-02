import React from 'react';

const Updates = () => {
  return (
    <div id="updates" className="updates bkgd-map container column padding">
      <div className="bkgd-arrow bkgd-arrow-up"></div>
      <img src="/img/register-key.svg"/>
      <div className="title">Get Workshop Updates</div>
      <br/>
      <form className="signup container row" method="post" name="updates" action="" data-netlify="true">
        <input className="input-email" type="text" name="email" placeholder="Type your email here!"/>
        <input className="input-submit" type="submit" value="Submit"/>
      </form>
    </div>
  );
};

export default Updates;
