import React from 'react';

const Testimonials = () => {
  return (
    <div id="testimonials" className="outcome bkgd-map container column padding">
      <div className="bkgd-arrow-up bkgd-arrow"></div>
      
      <div className="title">Testimonials</div>

      <div className="container row">

        <div className="list">
          <div className="list-text">
            <div className="container row">
              <img src="/img/george-testing.jpg"/>
            </div>
            <div className="container row">
              George Chamales - Some guy.
            </div>
            <div className="container row">
              I have never cleared customer security requirements this fast.  Ever.  George's help is a huge part of that.
            </div>
          </div>
        </div>

        <div className="list">
          <div className="list-text">
            <span className="highlight">• </span>
            George needs to fill this in
          </div>
        </div>

        <div className="list">
          <div className="list-text">
            <span className="highlight">• </span>
            George needs to fill this in
          </div>
        </div>
      </div>

        <div className="bkgd-arrow"></div>
    </div>
  );
};

export default Testimonials;
