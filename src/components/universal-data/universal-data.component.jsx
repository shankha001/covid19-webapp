import React from 'react';
import Countries from '../Countries/countries-component';

const UniversalData = ({ datarec }) => {
  return <Countries {...datarec.Countries} />;
};

export default UniversalData;
