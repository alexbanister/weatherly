import React from 'react';
import HourlyCard from './HourlyCard';

export default function DayCard(props) {
  return (
    <section className="seven-hour">
      <h4>Next 7 hours:</h4>
      <div className="hourly">
        {
          props.hourly.map((hour, index) => {
            return (
              <HourlyCard
                key={index}
                hour={hour.hour}
                ampm={hour.ampm}
                icon={hour.icon}
                temp={hour.temp_c} />
            )
          })
        }
      </div>
    </section>
  );
}
