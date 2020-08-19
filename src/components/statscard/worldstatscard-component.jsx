import React from "react";
import "./worldstatscard.styles.scss";
import CountUp from "react-countup";

function WorldStatsCard(props) {
  return (
    <div>
      <div className="global__stats">
        <div className="global__stats-div">
          <p className="global__stats-A1">
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
          <p className="global__stats-C1">
            +{" "}
            {props.newconfirmed ? (
              <CountUp
                start={0}
                end={parseInt(props.newconfirmed)}
                duration={2.5}
                delay={1}
                separator=","
              />
            ) : null}{" "}
            new Cases
          </p>
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
          <p className="global__stats-C2">
            +{" "}
            {props.newrecovered ? (
              <CountUp
                start={0}
                end={parseInt(props.newrecovered)}
                delay={1}
                duration={2.5}
                separator=","
              />
            ) : null}{" "}
            new Recovered
          </p>
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
          <p className="global__stats-C3">
            +{" "}
            {props.newdeaths ? (
              <CountUp
                start={0}
                end={parseInt(props.newdeaths)}
                duration={2.5}
                delay={1}
                separator=","
              />
            ) : null}{" "}
            new Deaths
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorldStatsCard;
