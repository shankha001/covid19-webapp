import React, { Component } from 'react';
import UniversalData from './components/universal-data/universal-data.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      datarec: [],
    };
  }

  componentDidMount() {
    const myAsyncFunction = async () => {
      const dataResponse = await fetch('https://api.covid19api.com/summary');
      const datas = await dataResponse.json();
      this.setState({ datarec: datas });
    };
    myAsyncFunction();
  }

  render() {
    return (
      <div>
        <UniversalData datarec={this.state.datarec} />
      </div>
    );
  }
}

export default App;
