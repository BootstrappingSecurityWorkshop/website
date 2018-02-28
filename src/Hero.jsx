import React from 'react';

const Hero = () => {
  return (
    <div id="hero" className="hero bkgd-map container column padding">
      <div className="hero-title">Bootstrapping Security</div>
      <div className="hero-text">Good security is a competitive advantage.</div>
      <img src="/img/register-key.svg"/>

      <a className="register container column" href="###">
        <span>Register</span>
        <img src="/img/register-btn.svg"/>
      </a>

      <div className="bkgd-arrow"></div>
    </div>
  );
};

export default Hero;
