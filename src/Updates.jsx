import React from 'react';

const Updates = () => {
  return (
    <div id="updates" className="updates bkgd-map container column padding">
      <div className="bkgd-arrow bkgd-arrow-up"></div>
      <img src="/img/register-key.svg"/>
      <div className="title">Get Workshop Updates</div>
      <br/>
      <form className="signup container row" method="post" name="updates" action="https://bootstrappingsecurity.us12.list-manage.com/subscribe/post?u=17df42d060d1a41a2566a6273&amp;id=0c11a94c0d" target="_blank" noValidate>
        <input className="input-email" type="email" name="EMAIL" placeholder="Type your email here!"/>
        <input className="input-submit" type="submit" value="Submit"/>
        <div className="register-hidden" aria-hidden="true"><input type="text" name="b_17df42d060d1a41a2566a6273_0c11a94c0d" tabIndex="-1" value=""/></div>
      </form>
    </div>
  );
};

export default Updates;
