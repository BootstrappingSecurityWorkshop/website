import React from 'react';
import Nav from './Nav.jsx';
import Hero from './Hero.jsx';
import Section01 from './Section01.jsx';
import Section02 from './Section02.jsx';

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
        <Section01/>
        <Section02/>
      </div>
    );
  }
};
