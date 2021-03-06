import React from 'react';
import ReactSVG from 'react-svg';

export default function HourlyCard(props) {
  return (
    <div className="hour">
      <p>{props.hour % 12 || '12'} {props.ampm}</p>
      <div className="wrapper">
        <ReactSVG path={`../assets/images/conditionIcons/${props.icon}.svg`} />
      </div>
      <p>{props.temp}&deg;</p>
    </div>
  );
}
