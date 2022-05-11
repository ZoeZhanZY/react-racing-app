import React from "react";
import "./Header.scss";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

const Header = () => {
  return (
    <div className="header">
      Next to go
      <SportsScoreIcon sx={{ fontSize: 80 }} className="flag" />
    </div>
  );
};

export default Header;
