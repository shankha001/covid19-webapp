import React, { Component } from 'react';
import './world.styles.scss';
import Countries from '../../components/Countries-data/countries-data.component';
import Global from '../../components/Global-data/global-data.component';
import Grid from '@material-ui/core/Grid';
import PieChart from '../../components/pieChart/pieChart-component';

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

  searchByCountry = (e) => {
    let input, filter, table, tr, td, i, txtValue;
    input = e.target.value;
    filter = input.toUpperCase();
    table = document.getElementById('myTable');
    tr = table.getElementsByTagName('tr');

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[0];

      if (td) {
        txtValue = td.textContent || td.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  };

  render() {
    console.log();

    return (
      <div>
        <Grid container spacing={3} className="grid-name">
          <Grid item xs={12}>
            <Global {...this.state.datarec.Global} />
          </Grid>

          <Grid item xs={6}>
            <div className="pie-global-style">
              <div className="pie-global-style-individual">
                <PieChart {...this.state.datarec.Global} />
              </div>
            </div>
          </Grid>

          <Grid item xs={12}>
            <h1 style={{ textAlign: 'center' }}>Pandemic by Country</h1>
            <input
              type="text"
              id="myInput"
              onChange={this.searchByCountry}
              placeholder="Search for Country"
              className="searchbox"
            />
            <Countries {...this.state.datarec.Countries} />
          </Grid>

          <span className="date">Time Updated : {this.state.datarec.Date}</span>
        </Grid>
      </div>
    );
  }
}

export default World;
