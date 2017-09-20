import React from 'react';

export default function CurrentWeather(props) {
  const background = {
    backgroundImage: 'url(../assets/images/bg_images/' + props.icon + '.png)',
  }

  return (
    <main
      style={background}
      className={props.css}>
      <div className="blur">
        <div className="current-conditions">
          <h6>{props.now}</h6>
          <h2>{props.temp}&deg;</h2>
          <h4>High: <strong>{props.high}&deg;</strong> Low: <strong>{props.low}&deg;</strong></h4>
          <h3>{props.loc}</h3>
        </div>
      </div>
      <div className="blur">
        <div className="current-icon">
          <h4>{props.desc}</h4>
        </div>
      </div>
    </main>
  );
}
