import React from 'react';
import Countries from '../Countries-data/countries-data.component';
import './universal-data.styles.css';
import Global from '../Global-data/global-data.component';

const UniversalData = ({ datarec, timeUpdated }) => {
  return (
    <div>
      <Global {...datarec.Global} />
      <h1 style={{ textAlign: 'center' }}>Pandemic by Country</h1>
      <Countries {...datarec.Countries} />
      <span>Time Updated : {timeUpdated}</span>
    </div>
  );
};

export default UniversalData;
