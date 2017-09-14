import React from 'react';
import ReactSVG from 'react-svg';

export default function CurrentWeather(props) {
  return (
    <main>
      <div className="current-conditions">
        <h6>{props.now}</h6>
        <h2>{props.temp}&deg;</h2>
        <h4>High: <strong>{props.high}&deg;</strong> Low: <strong>{props.low}&deg;</strong></h4>
        <h3>{props.loc}</h3>
      </div>
      <div className="current-icon">
        <h4>{props.desc}</h4>
        <ReactSVG path={`../assets/images/conditionIconsBig/${props.icon}.svg`} />
      </div>
    </main>
  );
}
