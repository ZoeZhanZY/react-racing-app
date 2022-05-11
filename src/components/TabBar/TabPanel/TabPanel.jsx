import React from "react";
import Typography from "@mui/material/Typography";

import PropTypes from "prop-types";
import './TabPanel.scss'

export default function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="list"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          <div className="row">
            <div className="number">
              <div className="number-deco"> 1</div>
            </div>
            <div className="meeting">
              <div className="meeting-name">Launceston</div>
              <div className="race-number">
                Race number: <div className="small-number">12</div>
              </div>
            </div>
            <div className="count-down">01:12</div>
          </div>
          <div className="row">
            <div className="number">
              <div className="number-deco"> 5</div>
            </div>
            <div className="meeting">
              <div className="meeting-name">Launceston</div>
              <div className="race-number">
                Race number: <div className="small-number">12</div>
              </div>
            </div>
						<div className="count-down">01:12
							{/* <div className="to-go">TO GO</div> */}
						</div>
          </div>
          <div className="row">
            <div className="number">
              <div className="number-deco"> 5</div>
            </div>
            <div className="meeting">
              <div className="meeting-name">Launceston</div>
              <div className="race-number">
                Race number: <div className="small-number">12</div>
              </div>
            </div>
            <div className="count-down">01:12</div>
          </div>
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};