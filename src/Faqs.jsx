import React from 'react';

const Faqs = () => {
  return (
    <div id="faqs" className="faqs section container column padding">
      <div className="title">FAQs</div>

      <div className="question">
        <div className="highlight">How large should our company be to make this worthwhile?</div>
        <div className="answer">Customer security requirements and compliance regimes don't make exceptions for company size.  If you're actively building a new product, then it will be worth your while.  We've worked with companies as small as five people - starting early means that security becomes "just how we do things around here."</div>
      </div>

      <div className="question">
        <div className="highlight">We have to meet compliance for SOC2 / HIPAA / GDPR, will this help?</div>
        <div className="answer">Absolutely.  The workshop's been built from the ground up to meet these requirements.  As part of the workshop the team learns how to organize compliance requirements, deal with auditors, and maintain security requirements over time so re-audits are a breeze.</div>
      </div>

      <div className="question">
        <div className="highlight">Why send a team of five to the workshop?</div>
        <div className="answer">Security is a team sport. The people you send to the workshop will work together to identify, distribute and plan out security across the organization.  Getting them all on the same page at the same time is the most effective way to make that happen. Our one exception to this rule is if you have less than five people in your company.  If you're that proactive about security - we definitely want you in our workshop.</div>
      </div>

      <div className="question">
        <div className="highlight">We can really do this without hiring security engineers?</div>
        <div className="answer">There are aspects of computer security that are a specialized art - malware reverse engineering and exploit development for example - but that's not what your team needs.
            What your team needs is system lockdown, logging and alerting, account management, a secret service, the timely application of security updates, and backups that are verified and secure.  Those actions all have way more in common with normal operations, infrastructure, and engineering tasks and your people are the ones with the institutional and technology expertise to make it happen.</div>
      </div>

      <div className="question">
        <div className="highlight">I'm a board member, why should my companies spend their time on this?</div>
        <div className="answer">Two of the most important questions to ask your teams:  "How long is it taking to clear customer security reviews?" and "Are you lying to them?".  For most companies, the answer is "weeks" and "yes".  After the workshop the answers will be "minutes" and "no".</div>
      </div>
    </div>
  );
};

export default Faqs;
