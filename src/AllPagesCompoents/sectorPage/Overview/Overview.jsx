import React from "react";
import "./overview.css";
import { CallRounded } from "@mui/icons-material";
const Overview = () => {
  return (
    <div className="overview_container">
      <div className="overview_row_1">
        <h1>Shalimar Smart City Sector 1 Overview</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, placeat?
        </p>
      </div>
      <div className="overview_row_2_main_conatiner">
        <img
          src="https://www.shalimarsmartcity.com/images/shape46.png"
          alt=""
          className="overview_main_container_img"
        />
        <img
          src="https://www.shalimarsmartcity.com/images/shape47.png"
          alt=""
          className="overview_main_second_img"
        />
        <div className="overview_row_2">
          <CallRounded className="overview_row_2_icon" />
          <div className="overview_call_heading">
            <h1>Expert Advisor</h1>
            <h3>+92-301-8610555</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
