import React from "react";
import "./mission.css";
function Mission() {
  return (
    <div className="mission">
      <div className="mission_col_1">
        <div className="mission_col_1_heading_desc">
          <h1 className="mission_heading">Mission</h1>
          <hr className="mission_deatil_heading_hr"/>
          <pc className="mission_desc">
            Shalimar Smart City is incorporating advanced technology to improve
            the quality of life and enhance sustainability. The developers aim
            to transform Sargodha's skyline by implementing state-of-the-art
            smart infrastructure, healthcare, traffic management, energy usage,
            waste management, and public safety features while following
            international standards. Shalimar Smart City seeks to be a unique
            living destination, providing a world-class experience to its
            residents.
          </pc>
        </div>
      </div>
      <div className="mission_col_2">
        <div className="mission_main_image_container">
          <img
            src="https://www.shalimarsmartcity.com/images/smart_city.jpg"
            alt=""
            className="mission_main_image"
          />
          <p className="our_mission_absolute">OUR MISSION</p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
