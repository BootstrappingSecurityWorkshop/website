import React from 'react';

const Attendees = () => {
  return (
    <div className="attendees container column padding">
      <div className="title">Attendees Get</div>

      <div className="container row">
        <div className="get-item list">
          <div className="get-icon"><i class="fa fa-fw fa-key"></i></div>
          <div className="attendees-title highlight">Startup Security Policy</div>
          <div className="attendees-text">Built specifically for startups and engineered to please your customers, appease your auditors and make your engineers grudgingly say, "Huh, that's actually reasonable".</div>
        </div>
        <div className="get-item list">
          <div className="get-icon"><i class="fa fa-fw fa-key"></i></div>
          <div className="attendees-title highlight">Presentations & Documentation Templates</div>
          <div className="attendees-text">All course materials ready to be re-used, re-mixed, and re-arranged. Templates for common security documentation including threat assessment, security profiles, backup / recovery, and disaster response.</div>
        </div>
      </div>

      <div className="container row">
        <div className="get-item list">
          <div className="get-icon"><i class="fa fa-fw fa-key"></i></div>
          <div className="attendees-title highlight">3 Hours of Consulting</div>
          <div className="attendees-text">Follow-on support for your team's security efforts including advising, training, responding to customer requests and advocating to leadership, engineering, sales, founders and funders.</div>
        </div>
        <div className="get-item list">
          <div className="get-icon"><i class="fa fa-fw fa-key"></i></div>
          <div className="attendees-title highlight">Security Implementation Plan</div>
          <div className="attendees-text">An 8-12 month go-forward plan for bootstrapping security inside your organization.  Tailored during the course to your company's specific needs and ready for implementation.</div>
        </div>
      </div>

      <div className="container row">
        <div className="get-item list">
          <div className="get-icon"><i class="fa fa-fw fa-key"></i></div>
          <div className="attendees-title highlight">Access to the Bootstrapper Community</div>
          <div className="attendees-text">Attendees are added to private slack channel and mailing list of all the teams who have taken the course.  Share ideas, ask questions, get answers from your peers.</div>
        </div>
        <div className="get-item list">
          <div className="get-icon"><i class="fa fa-fw fa-key"></i></div>
          <div className="attendees-title highlight">Bootstrapper's Guide to Security</div>
          <div className="attendees-text">All of the information in the course distilled into a quick reference guide.  Useful for refreshing your memory or explaining your security approach to the rest of the team.</div>
        </div>
      </div>
    </div>
  );
};

export default Attendees;
