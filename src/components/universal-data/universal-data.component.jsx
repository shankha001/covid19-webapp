import React from 'react';
import Countries from '../Countries/countries-component';
import './universal-data.styles.css';

const UniversalData = ({ datarec }) => {
  return <Countries {...datarec.Countries} />;
};

export default UniversalData;
