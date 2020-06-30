import React from 'react';
import Countries from '../Countries-data/countries-data.component';
import './universal-data.styles.css';
import Global from '../Global-data/global-data.component';
import Grid from '@material-ui/core/Grid';

const UniversalData = ({ datarec, timeUpdated }) => {
  return (
    <div>
      <Grid container spacing={3} className="grid-name">
        <Grid item xs={12}>
          <Global {...datarec.Global} />
        </Grid>
        <Grid item xs={12}>
          <h1 style={{ textAlign: 'center' }}>Pandemic by Country</h1>
        </Grid>
        <Grid item xs={12}>
          <Countries {...datarec.Countries} />
        </Grid>
        <span>Time Updated : {timeUpdated}</span>
      </Grid>
    </div>
  );
};

export default UniversalData;
