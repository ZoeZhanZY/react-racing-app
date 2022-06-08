import React from "react";
import "./Header.scss";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

const Header = () => {
  return (
    <div className="header">
      <a href="#">Next to go</a>
      <SportsScoreIcon sx={{ fontSize: 80 }} className="flag" />
    </div>
  );
};

export default Header;
