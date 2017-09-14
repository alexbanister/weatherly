import React from 'react';
import ReactSVG from 'react-svg';

export default function DayCard(props) {
  return (
    <div className="day">
      <p className="day-name">{props.day}</p>
      <div className="wrapper">
        <ReactSVG path={`../assets/images/conditionIconsSmall/${props.icon}.svg`} />
      </div>
      <p>{props.low}&deg;</p>
      <p>{props.high}&deg;</p>
    </div>
  );
}
