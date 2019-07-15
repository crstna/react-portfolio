import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';

import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />
            <switch>
              <Route path="/" component={Home} />
              <Route path="/about-me" component={About} />
            </switch>
          </div>
        </Router>
        <h1>cristina wood portfolio</h1>
        <div>{moment().format('L')}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
