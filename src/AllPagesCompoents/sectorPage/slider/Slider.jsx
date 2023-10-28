import React from "react";
import "./slider.css";
import { HouseOutlined } from "@mui/icons-material";
const Slider = () => {
  return (
    <div className="sector_slider_container_wrapper">
      <div className="sector_slider">
        <img
          src="https://www.shalimarsmartcity.com/banner-images/home-banner-lg-16810376101173818169.jpg"
          alt=""
          className="sector_slider_image"
        />
      </div>
      <div
        className="slider_features_box_conatiner
      "
      >
        <div className="slider_features_box">
          <img
            src="https://www.shalimarsmartcity.com/images/green%20(1).png"
            alt=""
            className="slider_features_box_icon"
          />

          <h1>Library</h1>
          <p>when an unknown printer took galley and scrambled itmakepe</p>
        </div>
        <div className="slider_features_box">
          <img
            src="https://www.shalimarsmartcity.com/images/green%20(1).png"
            alt=""
            className="slider_features_box_icon"
          />

          <h1>Sports Club</h1>
          <p>when an unknown printer took galley and scrambled itmakepe</p>
        </div>
        <div className="slider_features_box">
          <img
            src="https://www.shalimarsmartcity.com/images/green%20(1).png"
            alt=""
            className="slider_features_box_icon"
          />

          <h1>Smart Homes</h1>
          <p>when an unknown printer took galley and scrambled itmakepe</p>
        </div>
        <div className="slider_features_box">
          <img
            src="https://www.shalimarsmartcity.com/images/green%20(1).png"
            alt=""
            className="slider_features_box_icon"
          />

          <h1>Pharmacy</h1>
          <p>when an unknown printer took galley and scrambled itmakepe</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
