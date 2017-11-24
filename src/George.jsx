import React from 'react';

const George = () => {
  return (
    <div className="george bkgd-map container column padding">
      <div className="bkgd-arrow-up bkgd-arrow"></div>

      <div className="title">George Chamales - Security Architect</div>

      <div className="bio container row">
        <img className="bio-photo" src="../dist/img/george.jpg"/>
        <div className="bio-text">I split my time between startups and critical infrastructure companies. Doing so gives me the perspective of security challenges for large, complex, international systems that must remain operational 24x7. I use those experiences to support the growth and development of security inside startups using the latest tools, technologies and platforms. This course is the result ten years of focused research and hands-on experience to find and refine a security methodology to defend complex, always-on infrastructures while enabling the system's builders to continue moving at startup speed.</div>
      </div>

      <div className="bkgd-arrow"></div>
    </div>
  );
};

export default George;
