import React from "react";
import "./worldstatscard.styles.scss";
import CountUp from "react-countup";

function IndiaStatsCard(props) {
  return (
    <div>
      <div className="global__stats">
        <div className="global__stats-div">
          <p className="global__stats-A3" style={{ color: "#2091ba" }}>
            {props.active ? (
              <CountUp
                start={0}
                end={parseInt(props.active)}
                duration={2.5}
                separator=","
              />
            ) : null}
          </p>
          <p className="global__stats-B " data-aos="zoom-in">
            Active
          </p>
        </div>
        <div className="global__stats-div">
          <p className="global__stats-A1">
            {" "}
            {props.confirmed ? (
              <CountUp
                start={0}
                end={parseInt(props.confirmed)}
                duration={2.5}
                separator=","
              />
            ) : null}
          </p>
          <p className="global__stats-B">Confirmed</p>
        </div>
        <div className="global__stats-div">
          <p className="global__stats-A2">
            {" "}
            {props.recovered ? (
              <CountUp
                start={0}
                end={parseInt(props.recovered)}
                duration={2.5}
                separator=","
              />
            ) : null}
          </p>
          <p className="global__stats-B">Recovered</p>
        </div>
        <div className="global__stats-div">
          <p className="global__stats-A3">
            {" "}
            {props.deaths ? (
              <CountUp
                start={0}
                end={parseInt(props.deaths)}
                duration={2.5}
                separator=","
              />
            ) : null}
          </p>
          <p className="global__stats-B">Deaths</p>
        </div>
      </div>
    </div>
  );
}

export default IndiaStatsCard;
