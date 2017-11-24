import React from 'react';
import Nav from './Nav.jsx';
import Hero from './Hero.jsx';
import Security from './Security.jsx';
import Bootstrap from './Bootstrap.jsx';
import CourseContent from './CourseContent.jsx';

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
        <Bootstrap/>
        <CourseContent/>
      </div>
    );
  }
};
