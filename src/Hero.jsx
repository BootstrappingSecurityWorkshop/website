import React from 'react';

const Hero = () => {
  return (
    <div className="hero bkgd-map bkgd-arrow container column padding">
      <div className="hero-title">Bootstrapping Security</div>
      <div className="text">Defend your company at startup speed.</div>
      <img src="../dist/img/register-key.svg"/>

      <a className="register container column" href="###">
        <span>Register</span>
        <img src="../dist/img/register-btn.svg"/>
      </a>
    </div>
  );
};

export default Hero;
