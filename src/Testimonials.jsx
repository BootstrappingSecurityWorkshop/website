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
              <div className="image-cropper"><img className="image-testimonial" src="/img/george-testing.jpg"/></div>
            </div>
            <div className="container row testimonial-name">
              David Starr
            </div>
            <div className="container row highlight">
              Strategic Partnerships Manager - TruSTAR
            </div>
            <div className="container row testimonial-txt">
              Insert a testimonial here once there's a testimonial to add here.  It should be about this long.  Give or take.
            </div>
          </div>
        </div>

        <div className="list">
          <div className="list-text">
            <div className="container row">
              <div className="image-cropper"><img className="image-testimonial" src="/img/george-testing.jpg"/></div>
            </div>
            <div className="container row testimonial-name">
              David Guaraglia
            </div>
            <div className="container row highlight">
              CTO - Virgo Surgical Solutions
            </div>
            <div className="container row testimonial-txt">
              Insert a testimonial here once there's a testimonial to add here.  It should be about this long.  Give or take.
            </div>
          </div>
        </div>

        <div className="list">
          <div className="list-text">
            <div className="container row">
              <div className="image-cropper"><img className="image-testimonial" src="/img/george-testing.jpg"/></div>
            </div>
            <div className="container row testimonial-name">
              George Chamales
            </div>
            <div className="container row highlight">
              Job Title - Company
            </div>
            <div className="container row testimonial-txt">
              Insert a testimonial here once there's a testimonial to add here.  It should be about this long.  Give or take.
            </div>
          </div>
        </div>
      </div>

        <div className="bkgd-arrow"></div>
    </div>
  );
};

export default Testimonials;
