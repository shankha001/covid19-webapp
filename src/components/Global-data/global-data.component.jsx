import React from 'react';
import './global-data.styles.scss';

const Global = function Global(props) {
  return (
    <div>
      <div className="global__stats">
        <div className="global__stats-div">
          <p className="global__stats-A1">{props.TotalConfirmed}</p>
          <p className="global__stats-B">Confirmed</p>
          <p className="global__stats-C1">+{props.NewConfirmed} new Cases</p>
        </div>

        <div className="global__stats-div">
          <p className="global__stats-A2">{props.TotalRecovered}</p>
          <p className="global__stats-B">Recovered</p>
          <p className="global__stats-C2">
            +{props.NewRecovered} new Recovered
          </p>
        </div>
        <div className="global__stats-div">
          <p className="global__stats-A3">{props.TotalDeaths}</p>
          <p className="global__stats-B">Deaths</p>
          <p className="global__stats-C3">+{props.NewDeaths} new Deaths</p>
        </div>
      </div>
    </div>
  );
};
export default Global;
