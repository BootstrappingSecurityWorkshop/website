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
          <div className="attendees-title highlight">Free Yearly Security Training...Forever</div>
          <div className="attendees-text">Companies who attend our workshop will never pay for outside security training.  We provide your team yearly training that is fast-paced, interesting, informative, and driven by the latest trends and topics in computer security.</div>
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
