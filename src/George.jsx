import React from 'react';

const George = () => {
  return (
    <div id="george" className="george bkgd-map container column padding">
      <div className="bkgd-arrow-up bkgd-arrow"></div>

      <div className="title">George Chamales</div>

      <div className="bio container row">
        <img className="bio-photo" src="/img/george.jpg"/>
        <div className="bio-text">
        This workshop is the result of ten years of hands-on experience building security into companies ranging from five people to 50,000.  To get here I've worked as 
        a security engineer, security architect, programmer, dev/ops engineer, penetration tester, auditor and performed countless vulnerability assessments including
        security reviews of some of the largest, most complex critical infrastructure systems in the world.<br/><br/>

        All of those lessons, trials, errors, breakthroughs, experiments
        and refinements have led me to the conclusion that the most effective way to build maintainable security in fast-moving teams is to bring together the people 
        responsible for those technologies, put them in charge of their own security, and give them a clear path to follow.  This workshop is the path. 
        </div>
      </div>

      <div className="bkgd-arrow"></div>
    </div>
  );
};

export default George;
