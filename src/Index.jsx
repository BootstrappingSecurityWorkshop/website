import React from 'react';
import Nav from './Nav.jsx';
import Hero from './Hero.jsx';
import Security from './Security.jsx';
import Bootstrap from './Bootstrap.jsx';
import Course from './Course.jsx';
import Attendees from './Attendees.jsx';
import Outcome from './Outcome.jsx';
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
        <Course/>
        <Attendees/>
        <Outcome/>
        <Faqs/>
        <George/>
        <Register/>
        <Updates/>
        <Footer/>
      </div>
    );
  }
};
