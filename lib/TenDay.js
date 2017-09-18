import React from 'react';
import DayCard from './DayCard';

export default function TenDay(props) {
  return (
    <section className="ten-day">
      <h4>Next 10 Days:</h4>
      <div className="ten-day-scroll">
        {
          props.tenDay.map((day, index) => {
            return (
              <DayCard
                key={index}
                day={day.day}
                icon={day.icon}
                low={day.low}
                high={day.high} />
            )
          })
        }
      </div>
    </section>
  );
}
