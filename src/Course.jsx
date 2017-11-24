import React from 'react';

const Course = () => {
  return (
    <div id="course" className="course bkgd-map container column padding">
      <div className="bkgd-arrow-up bkgd-arrow"></div>

      <div className="title">Course Content</div>

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
          Subsidiarity & Security Responsibilities
        </div>
        <div className="list-text">
          <span className="highlight">• </span>
          Incident Prevention, Detection & Response
        </div>
        <div className="list-text">
          <span className="highlight">• </span>
          Build, Maintain & Enhance Defenses Over Time
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
          Disaster Response, Backup & Recovery
        </div>
        <div className="list-text">
          <span className="highlight">• </span>
          Physical Security & Zero Trust Networking
        </div>
        <div className="list-text">
          <span className="highlight">• </span>
          Implementing Your 8-12 Month Security Plan
        </div>
      </div>

      <div className="bkgd-arrow"></div>
    </div>
  );
};

export default Course;
