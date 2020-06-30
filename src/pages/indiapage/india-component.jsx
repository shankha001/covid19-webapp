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
        <div className="global__stats">
          <div className="global__stats-div">
            <p className="global__stats-A3">{active}</p>
            <p className="global__stats-B">Active</p>
          </div>
          <div className="global__stats-div">
            <p className="global__stats-A1">{confirmed}</p>
            <p className="global__stats-B">Confirmed</p>
          </div>

          <div className="global__stats-div">
            <p className="global__stats-A2">{recovered}</p>
            <p className="global__stats-B">Recovered</p>
          </div>
          <div className="global__stats-div">
            <p className="global__stats-A3">{deaths}</p>
            <p className="global__stats-B">Deaths</p>
          </div>
        </div>
      </div>
    );
  }
}
export default India;
