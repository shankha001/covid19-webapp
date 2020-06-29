import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.css';
import World from './pages/world-component';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/world" component={World} />
        </Switch>
      </div>
    );
  }
}

export default App;
