import React from 'react';
import './worldstatscard.styles.scss';

function IndiaStatsCard(props) {
  return (
    <div>
      <div className="global__stats">
        <div className="global__stats-div">
          <p className="global__stats-A3" style={{ color: '#2091ba' }}>
            {props.active}
          </p>
          <p className="global__stats-B " data-aos="zoom-in">
            Active
          </p>
        </div>
        <div className="global__stats-div">
          <p className="global__stats-A1">{props.confirmed}</p>
          <p className="global__stats-B">Confirmed</p>
        </div>
        <div className="global__stats-div">
          <p className="global__stats-A2">{props.recovered}</p>
          <p className="global__stats-B">Recovered</p>
        </div>
        <div className="global__stats-div">
          <p className="global__stats-A3">{props.deaths}</p>
          <p className="global__stats-B">Deaths</p>
        </div>
      </div>
    </div>
  );
}

export default IndiaStatsCard;
