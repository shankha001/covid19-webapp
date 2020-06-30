import React from 'react';

class India extends React.Component {
  constructor() {
    super();
    this.state = {
      indiaData: [],
      liveData: [],
    };
  }

  componentDidMount() {
    const myAsyncFunction = async () => {
      const dataResponse = await fetch(
        'https://api.covid19api.com/country/india'
      );
      const datas = await dataResponse.json();
      this.setState({ indiaData: datas });
    };
    myAsyncFunction();
    this.setState({ loading: false });
  }

  render() {
    let length = this.state.indiaData.length;
    var latestData = this.state.indiaData[length - 1];

    for (let i in latestData) {
      this.state.liveData.push(latestData[i]);
    }

    const confirmed = this.state.liveData[7];
    const deaths = this.state.liveData[8];
    const recovered = this.state.liveData[9];
    const active = this.state.liveData[10];

    return (
      <div>
        <h1>hi</h1>
      </div>
    );
  }
}
export default India;
