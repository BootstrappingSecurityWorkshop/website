import React from 'react';

const Workshop = () => {
  return (
    <div id="workshop" className="course bkgd-map container column padding">
      <div className="bkgd-arrow-up bkgd-arrow"></div>

      <div className="title">Workshop Content</div>
      <div className="container row">
      <div className="list">
        <div className="highlight">Strategic</div>
        <div className="list-text">
          <span className="highlight">• </span>
          Principles of Security Architecture
        </div>
        <div className="list-text">
          <span className="highlight">• </span>
          Threat Modeling & Risk Assessment
        </div>
        <div className="list-text">
          <span className="highlight">• </span>
          Incident Prevention, Detection & Response
        </div>
        <div className="list-text">
          <span className="highlight">• </span>
          Speedrunning Compliance Regimes
        </div>
        <div className="list-text">
          <span className="highlight">• </span>
          Maintaining Your Defenses Over Time
        </div>
      </div>

      <div className="list">
        <div className="highlight">Tactical</div>
        <div className="list-text">
          <span className="highlight">• </span>
          Responding to Customer Security Requests
        </div>
        <div className="list-text">
          <span className="highlight">• </span>
          Managing Penetration Tests & Audits
        </div>
        <div className="list-text">
          <span className="highlight">• </span>
          Backup, Recovery, Secrets Management
        </div>
        <div className="list-text">
          <span className="highlight">• </span>
          Securing Change Management Pipelines
        </div>
        <div className="list-text">
          <span className="highlight">• </span>
          Implementing Your Security Plan
        </div>
      </div>
      </div>

      <div className="bkgd-arrow"></div>
    </div>
  );
};

export default Workshop;
