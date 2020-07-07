import React from 'react';
import './worldstatscard.styles.scss';

function WorldStatsCard(props) {
  return (
    <div>
      <div className="global__stats">
        <div className="global__stats-div">
          <p className="global__stats-A1">{props.confirmed}</p>
          <p className="global__stats-B">Confirmed</p>
          <p className="global__stats-C1">+{props.newconfirmed} new Cases</p>
        </div>
        <div className="global__stats-div">
          <p className="global__stats-A2">{props.recovered}</p>
          <p className="global__stats-B">Recovered</p>
          <p className="global__stats-C2">
            +{props.newrecovered} new Recovered
          </p>
        </div>
        <div className="global__stats-div">
          <p className="global__stats-A3">{props.deaths}</p>
          <p className="global__stats-B">Deaths</p>
          <p className="global__stats-C3">+{props.newdeaths} new Deaths</p>
        </div>
      </div>
    </div>
  );
}

export default WorldStatsCard;
