import React from "react";
import RaceList from "./RaceList";
import "./TabPanel.scss";

const TabPanel = ({ children, value, activeTab, setIsStarted }) => {
  return (
    <div
      className="list"
      role="tabpanel"
      hidden={value !== activeTab}
    >
      {value === activeTab &&
        children.map((el, index) => (
          <RaceList
            isValid={el.isValid}
            meeting_name={el.meeting_name}
            race_number={el.race_number}
            advertised_start={el.advertised_start}
            key={el.race_id}
            orderNumber={index + 1}
            setIsStarted={setIsStarted}
          />
        ))}
    </div>
  );
};

export default TabPanel;
