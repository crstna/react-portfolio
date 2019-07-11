import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio-container'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>cristina wood portfolio</h1>
        <div>{moment().format('L')}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
