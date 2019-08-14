import React, { Component } from 'react';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './modules/home/containers/Home'
import Rater from './modules/ChessRater/containers/Rater'

class App extends Component {
  render() {
    return (
    <Switch>
      <Route path="/rater" component={Rater} />
      <Route path="/" component={Home} />
    </Switch>
    );
  };
}

export default withRouter(App);