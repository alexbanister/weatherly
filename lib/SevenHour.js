import React from 'react';
import HourlyCard from './HourlyCard';

export default function DayCard(props) {
  return (
    <section className="seven-hour">
      Next 7 hours:
      <div className="hourly">
        {
          props.hourly.map((hour, index) => {
            return (
              <HourlyCard
                key={index}
                hour={hour.hour}
                icon={hour.icon}
                temp={hour.temp} />
            )
          })
        }
      </div>
    </section>
  );
}
