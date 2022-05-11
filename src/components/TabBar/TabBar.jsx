import React, { useState } from "react";
import "./TabBar.scss";
import TabPanel from "./TabPanel/TabPanel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
					aria-label="basic tabs example"
					centered
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Greyhound Racing" {...a11yProps(1)} />
          <Tab label="Harness Racing" {...a11yProps(2)} />
          <Tab label="Horse Racing" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item 1
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </Box>
  );
}

// const TabBar = () => {
// 	return (
//     <div className="Tabs">
//       <div className="Tab">All</div>
//       <div className="Tab">Greyhound Racing</div>
//       <div className="Tab">Harness Racing</div>
//       <div className="Tab">Harness Racing</div>
//     </div>
//   );
// };

export default TabBar;
