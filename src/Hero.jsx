import React from 'react';

const Hero = () => {
  return (
    <div id="hero" className="hero bkgd-map container column padding">
      <div className="hero-title">Bootstrapping Security</div>
      <div className="hero-text">If you're qualified to build it, you're qualified to secure it.</div>

      <a className="register container column" href="#register">
        <span>Register</span>
        <img src="/img/register-btn-tp.png"/>
      </a>

      <div className="bkgd-arrow"></div>
    </div>
  );
};

export default Hero;
