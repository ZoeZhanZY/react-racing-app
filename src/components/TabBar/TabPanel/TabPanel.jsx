import React from "react";
import Typography from "@mui/material/Typography";
import RaceList from "./RaceList";
import PropTypes from "prop-types";
import "./TabPanel.scss";

export default function TabPanel(props) {
  const { children, value, index, setIsStarted, ...other } = props;
  console.log({ children });

  return (
    <div
      className="list"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index &&
        children.map((el, index) => (
          <RaceList
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
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
