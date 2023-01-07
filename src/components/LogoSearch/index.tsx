import React from "react";
import "./LogoSearch.css";
import * as Unicons from "@iconscout/react-unicons";

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={"/images/logo.png"} alt="" />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <Unicons.UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
