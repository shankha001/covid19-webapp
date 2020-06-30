import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header-component';
import './App.css';
import World from './pages/worldpage/world-component';
import India from './pages/indiapage/india-component';
import AdminPage from './pages/adminpage/adminpage-component';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/world" component={World} />
          <Route exact path="/India" component={India} />
          <Route exact path="/admin" component={AdminPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
