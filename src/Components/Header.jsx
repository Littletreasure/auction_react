import React from "react";
import sa2 from "../images/southportsa2.jpg";
import { date } from "../data/data";
import "../css/styles.css";

const Header = () => {
  return (
    <div className="header">
      <img src={sa2} className="logo" alt="logo" />
      <div className="headerTitle">
        <h1>Silent Auction</h1>
        <p>Updated: {date}</p>
      </div>
    </div>
  );
};

export default Header;
