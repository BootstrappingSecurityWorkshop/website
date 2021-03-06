import React from 'react';

const Outcomes = () => {
  return (
    <div id="outcomes" className="attendees container column padding">
      <div className="title">Your Team Returns With</div>

      <div className="container row">
        <div className="list">
          <div className="list-icon"><i className="fa fa-fw fa-key"></i></div>
          <div className="attendees-title highlight">The Best Security Policy Ever Written</div>
          <div className="attendees-text">Built and refined over seven years and tailored to your team.  
          The policy has been crafted to impress your customers, appease your auditors and make your engineers say, "Huh, that's all perfectly reasonable".</div>
        </div>
        <div className="list">
          <div className="list-icon"><i className="fa fa-fw fa-key"></i></div>
          <div className="attendees-title highlight">Security Implementation Plan</div>
          <div className="attendees-text">Your team's custom-built go-forward plan for bootstrapping security inside your organization.  
          Tasks are prioritized, distributed across the team, and can be implemented in dedicated sprints or worked in over time.
         </div>
        </div>
      </div>
      <div className="container row">
        <div className="list">
          <div className="list-icon"><i className="fa fa-fw fa-key"></i></div>
          <div className="attendees-title highlight">The Bootstrapper's Guide to Security</div>
          <div className="attendees-text">A collection of how-tos you and the rest of your company can reference as you build out your security.  Includes templates for threat assessment, security profiles, business continuity & disaster response.</div>
        </div>
        <div className="list">
          <div className="list-icon"><i className="fa fa-fw fa-key"></i></div>
          <div className="attendees-title highlight">The Bootstrapping Security Community</div>
          <div className="attendees-text">Attendees are added to our private slack community and mailing list for all the teams who have taken the workshop.  You're not alone.  Share ideas, ask questions, get answers from your peers.</div>
        </div>
      </div>

    </div>
  );
};

export default Outcomes;
