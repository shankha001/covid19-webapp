import React, { useState, useEffect } from 'react';
import './world.styles.scss';
import axios from 'axios';
import Countries from '../../components/Countries-data/countries-data.component';
import Global from '../../components/Global-data/global-data.component';
import Grid from '@material-ui/core/Grid';

function World() {
  const [globalData, setglobalData] = useState([]);
  const [countriesData, setcountriesData] = useState([]);

  //Fetch Data
  useEffect(() => {
    axios
      .get('https://api.covid19api.com/summary')
      .then((res) => {
        console.log(res);
        setglobalData(res.data.Global);
        setcountriesData(res.data.Countries);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchByCountry = (e) => {
    let input, filter, table, tr, td, i, txtValue;
    input = e.target.value;
    filter = input.toUpperCase();
    table = document.getElementById('myTable');
    tr = table.getElementsByTagName('tr');
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

  return (
    <div>
      <Grid container spacing={3} className="grid-name">
        <Grid item xs={12}>
          <Global {...globalData} />
        </Grid>

        <Grid item xs={12}>
          <h1 style={{ textAlign: 'center', color: 'grey' }}>
            Pandemic by Country
          </h1>
          <input
            type="text"
            id="myInput"
            onChange={searchByCountry}
            placeholder="Search for Country"
            className="searchbox"
          />
          <Countries {...countriesData} />
        </Grid>
        <span className="date">Time Updated : </span>
      </Grid>
    </div>
  );
}

export default World;
