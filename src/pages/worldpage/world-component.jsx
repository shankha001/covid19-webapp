import React, { Component } from 'react';
import './world.styles.scss';
import Countries from '../../components/Countries-data/countries-data.component';
import Global from '../../components/Global-data/global-data.component';
import Grid from '@material-ui/core/Grid';

class World extends Component {
  constructor() {
    super();
    this.state = {
      datarec: [],
      loading: true,
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
    console.log();

    return (
      <div>
        <Grid container spacing={3} className="grid-name">
          <Grid item xs={12}>
            <Global {...this.state.datarec.Global} />
          </Grid>

          <Grid item xs={12}>
            <h1 style={{ textAlign: 'center' }}>Pandemic by Country</h1>
            <Countries {...this.state.datarec.Countries} />
          </Grid>

          <span className="date">Time Updated : {this.state.datarec.Date}</span>
        </Grid>
      </div>
    );
  }
}

export default World;
