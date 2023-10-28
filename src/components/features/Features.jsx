import React from "react";
import "./features.css";
import {
  AccountBalanceRounded,
  AccountBalanceWalletRounded,
  AddBusiness,
  Groups2,
  LocalHospitalRounded,
  LocalMallRounded,
  PhoneAndroidRounded,
  WifiTetheringErrorRoundedSharp,
} from "@mui/icons-material";
const Features = () => {
  return (
    <div className="feature_component_container">
      <div className="feature_components_wrapper">
        <div className="features_app_headings">
          <p className="feature_component_heading_sub">Features</p>
          <h1 className="feature_component_heading">Smart City APP</h1>
        </div>
        <div className="phone_app_wrapper">
          {/* ************** left side icon ************ */}
          <div className="features_home_component_left_col">
            <div className="security_app_feature_icon_box">
              <p className="feature_app_name">SMART SECURITY</p>
              <Groups2 className="app_feature_icon" />
            </div>
            <div className="weather_app_feature_icon_box">
              <p className="feature_app_name">SMART LOCAL WEATHER UPDATES</p>
              <PhoneAndroidRounded className="app_feature_icon" />
            </div>
            <div className="emergency_app_feature_icon_box">
              <p className="feature_app_name">SMART EMERGENCY SERVICES</p>
              <LocalHospitalRounded className="app_feature_icon" />
            </div>
            <div className="internet_app_feature_icon_box">
              <p className="feature_app_name">WIFI SOCIETY</p>
              <WifiTetheringErrorRoundedSharp className="app_feature_icon" />
            </div>
          </div>
          <img
            src="https://www.shalimarsmartcity.com/images/shalimar-smartcity-project-app.png"
            alt=""
            className="phone_app_image"
          />
          {/* ************** right side icon ************ */}
          <div className="features_home_component_right_col">
            <div className="market_app_feature_icon_box">
              <LocalMallRounded className="app_feature_icon" />
              <p className="feature_app_name"> SMART BUY FROM MARKETS</p>
            </div>
            <div className="property_app_feature_icon_box">
              <AddBusiness className="app_feature_icon" />
              <p className="feature_app_name">PROPERTY OWNER'S PORTAL</p>
            </div>
            <div className="bank_app_feature_icon_box">
              <AccountBalanceWalletRounded className="app_feature_icon" />
              <p className="feature_app_name">SMART PAY</p>
            </div>
            <div className="booking_app_feature_icon_box">
              <AccountBalanceRounded className="app_feature_icon" />
              <p className="feature_app_name">EVENT HALL BOOKING</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
