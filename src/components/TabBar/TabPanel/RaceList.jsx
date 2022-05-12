import React from "react";

import Countdown from "react-countdown";

const RaceList = ({
  meeting_name,
  race_number,
  advertised_start,
  orderNumber,
  setIsStarted,
}) => {
  const handleComplete = () => {
    // useEffect(() => {}, []);
  };
  return (
    <div className="row">
      <div className="number">
        <div className="number-deco">{orderNumber}</div>
      </div>
      <div className="meeting">
        <div className="meeting-name">{meeting_name}</div>
        <div className="race-number">
          Race number: <div className="small-number">{race_number}</div>
        </div>
      </div>
      <div className="count-down">
        <Countdown
          date={advertised_start * 1000}
          daysInHours={true}
          onComplete={() => {
            handleComplete();
          }}
        >
          <div>Started</div>
        </Countdown>
      </div>
    </div>
  );
};

export default RaceList;
