import React from 'react';

const Outcomes = () => {
  return (
    <div id="outcomes" className="attendees container column padding">
      <div className="title">Your Team Returns With</div>

      <div className="container row">
        <div className="list">
          <div className="list-icon"><i className="fa fa-fw fa-key"></i></div>
          <div className="attendees-title highlight">The Best Security Policy Ever Written</div>
          <div className="attendees-text">Built specifically for startups and tailored to your team buring the workshop.  
          The policy has been crafted to impress your customers, appease your auditors and make your engineers say, "Huh, that's all perfectly reasonable".</div>
        </div>
        <div className="list">
          <div className="list-icon"><i className="fa fa-fw fa-key"></i></div>
          <div className="attendees-title highlight">Security Implementation Plan</div>
          <div className="attendees-text">Your team's custom-built go-forward plan for bootstrapping security inside your organization.  
          Tasks are prioritized, distributed across the team, and can be implemented in standalone sprints or worked in over time.
         </div>
        </div>
      </div>
      <div className="container row">
        <div className="list">
          <div className="list-icon"><i className="fa fa-fw fa-key"></i></div>
          <div className="attendees-title highlight">Presentations & Documentation Templates</div>
          <div className="attendees-text">All course materials ready to be re-used, re-mixed, and re-arranged. Templates for common security documentation including threat assessment, security profiles, backup / recovery, and disaster response.</div>
        </div>
        <div className="list">
          <div className="list-icon"><i className="fa fa-fw fa-key"></i></div>
          <div className="attendees-title highlight">Access to the Bootstrapper Community</div>
          <div className="attendees-text">Attendees are added to our private slack community and mailing list for all the teams who have taken the workshop.  You're not alone.  Share ideas, ask questions, get answers from your peers.</div>
        </div>
      </div>

    </div>
  );
};

export default Outcomes;
