import React from 'react';
import Nav from './Nav.jsx';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="index" className="container column">
        <Nav/>
      </div>
    );
  }
};
