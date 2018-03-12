import React from 'react';

const Testimonials = () => {
  return (
    <div id="testimonials" className="outcome bkgd-map container column padding">
      <div className="bkgd-arrow-up bkgd-arrow"></div>
      
      <div className="title">Testimonials</div>

      <div className="container row">

        <div className="list-test">
          <div className="list-text">
            <div className="container row">
              <div className="image-cropper"><img className="image-testimonial" src="/img/dstar.jpg"/></div>
            </div>
            <div className="container row testimonial-name">
              David Starr
            </div>
            <div className="container row highlight testimonial-txt">
              Strategic Partnerships Manager - TruSTAR 
            </div>
            <div className="container row testimonial-txt">
              George’s knowledge has been instrumental to secure business and let our partners know they can trust us and our technology.<br/><br/>
            </div>
          </div>
        </div>

        <div className="list-test">
          <div className="list-text">
            <div className="container row">
              <div className="image-cropper"><img className="image-testimonial" src="/img/davidg.jpg"/></div>
            </div>
            <div className="container row testimonial-name">
              David Guaraglia
            </div>
            <div className="container row highlight testimonial-txt">
              Virgo Surgical Video Solutions - CTO
            </div>
            <div className="container row testimonial-txt">
              I used to think that security was something that could only be done by security people.  This workshop changed that.  Now we understand what our team needs to do and we're doing it.
            </div>
          </div>
        </div>

        <div className="list-test">
          <div className="list-text">
            <div className="container row">
              <div className="image-cropper"><img className="image-testimonial" src="/img/richard.jpg"/></div>
            </div>
            <div className="container row testimonial-name">
              Richard Arnold
            </div>
            <div className="container row highlight testimonial-txt">
              Board Member & Advisor to Early Stage Technology Companies
            </div>
            <div className="container row testimonial-txt">
              George knows more about information system security than anyone I have met in all my travels around the industry.<br/><br/>
            </div>
          </div>
        </div>
      </div>

        <div className="bkgd-arrow"></div>
    </div>
  );
};

export default Testimonials;
