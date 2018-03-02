import React from 'react';
import Nav from './Nav.jsx';
import Hero from './Hero.jsx';
import Security from './Security.jsx';
import Workshop from './Workshop.jsx';
import Outcomes from './Outcomes.jsx';
import Testimonials from './Testimonials.jsx';
import Faqs from './Faqs.jsx';
import George from './George.jsx';
import Register from './Register.jsx';
import Updates from './Updates.jsx';
import Footer from './Footer.jsx';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="index" className="container column">
        <Nav/>
        <Hero/>
        <Security/>
        <Workshop/>
        <Outcomes/>
        <Testimonials/>
        <Faqs/>
        <George/>
        <Register/>
        <Updates/>
        <Footer/>
      </div>
    );
  }
};
