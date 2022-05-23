import React from "react";
import "./TabBar.scss";
import TabPanel from "./TabPanel/TabPanel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";

const TabBar = ({ activeTab, setActiveTab, renderedList, setIsStarted }) => {
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={activeTab} onChange={handleChange} centered>
          <Tab label="All" value="All" />
          <Tab label="Greyhound Racing" value="RHRacing" />
          <Tab label="Harness Racing" value="HNRacing" />
          <Tab label="Horse Racing" value="HRacing" />
        </Tabs>
      </Box>
      <TabPanel value="All" setIsStarted={setIsStarted} activeTab={activeTab}>
        {renderedList}
      </TabPanel>
      <TabPanel
        value="GHRacing"
        setIsStarted={setIsStarted}
        activeTab={activeTab}
      >
        {renderedList}
      </TabPanel>
      <TabPanel
        value="HNRacing"
        activeTab={activeTab}
        setIsStarted={setIsStarted}
      >
        {renderedList}
      </TabPanel>
      <TabPanel
        value="HRacing"
        activeTab={activeTab}
        setIsStarted={setIsStarted}
      >
        {renderedList}
      </TabPanel>
    </Box>
  );
};

export default TabBar;
