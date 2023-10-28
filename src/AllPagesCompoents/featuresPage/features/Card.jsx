import React from "react";
import "./features.css";

import {
  Luxurious_Life_Style,
  Health_Care,
  Smart_Infrastructure,
  Gymkhana_Club,
  Residential_Towers,
  Security,
  Markets,
  Transportation,
  Academic,
} from "./dummy";
const Card = () => {
  return (
    <div className="features_container">
      <div className="progress_updates">
        <h1 className="animinities_heading">Shalimar Smart City Features</h1>
        <div className="home_heading_hr_box">
          <hr className="home_animities_heading_hr_top" />
          <hr className="home_animities_heading_hr" />
          <hr className="home_animities_heading_hr_bottom" />
        </div>
      </div>
      {/* ***************Luxurious_Life_Style********* */}
      <div className="all_features_main_container">
        <div className="features_wrapper">
          <hr className="features_wrapper_hr" />
          <p className="card_warapper_heading">Luxurious Life Style</p>
          <div className="small_card_container">
            {Luxurious_Life_Style.map((item) => {
              const Icon = item.icon;
              return (
                <div className="small_card_box">
                  <Icon className="small_card_box_icon" />
                  <p className="small_card_box_title">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* ***************Health_Care********* */}

        <div className="features_wrapper">
          <hr className="features_wrapper_hr" />
          <p className="card_warapper_heading">Health & Care</p>
          <div className="small_card_container">
            {Health_Care.map((item) => {
              const Icon = item.icon;
              return (
                <div className="small_card_box">
                  <Icon className="small_card_box_icon" />
                  <p className="small_card_box_title">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ***************Smart Infrastructure
         ********* */}

        <div className="features_wrapper">
          <hr className="features_wrapper_hr" />
          <p className="card_warapper_heading">Smart Infrastructure</p>
          <div className="small_card_container">
            {Smart_Infrastructure.map((item) => {
              const Icon = item.icon;
              return (
                <div className="small_card_box">
                  <Icon className="small_card_box_icon" />
                  <p className="small_card_box_title">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ***************Gymkhana_Club********* */}

        <div className="features_wrapper">
          <hr className="features_wrapper_hr" />
          <p className="card_warapper_heading">Gymkhana Club</p>
          <div className="small_card_container">
            {Gymkhana_Club.map((item) => {
              const Icon = item.icon;
              return (
                <div className="small_card_box">
                  <Icon className="small_card_box_icon" />
                  <p className="small_card_box_title">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ***************Residential_Towers********* */}

        <div className="features_wrapper">
          <hr className="features_wrapper_hr" />
          <p className="card_warapper_heading">Smart Residential Towers</p>
          <div className="small_card_container">
            {Residential_Towers.map((item) => {
              const Icon = item.icon;
              return (
                <div className="small_card_box">
                  <Icon className="small_card_box_icon" />
                  <p className="small_card_box_title">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ***************Security & Surveillance
         ********* */}

        <div className="features_wrapper">
          <hr className="features_wrapper_hr" />
          <p className="card_warapper_heading">Security & Surveillance</p>
          <div className="small_card_container">
            {Security.map((item) => {
              const Icon = item.icon;
              return (
                <div className="small_card_box">
                  <Icon className="small_card_box_icon" />
                  <p className="small_card_box_title">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ***************Markets********* */}

        <div className="features_wrapper">
          <hr className="features_wrapper_hr" />
          <p className="card_warapper_heading">Smart Markets</p>
          <div className="small_card_container">
            {Markets.map((item) => {
              const Icon = item.icon;
              return (
                <div className="small_card_box">
                  <Icon className="small_card_box_icon" />
                  <p className="small_card_box_title">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ***************Markets********* */}

        <div className="features_wrapper">
          <hr className="features_wrapper_hr" />
          <p className="card_warapper_heading">Smart Transportation</p>
          <div className="small_card_container">
            {Markets.map((item) => {
              const Icon = item.icon;
              return (
                <div className="small_card_box">
                  <Icon className="small_card_box_icon" />
                  <p className="small_card_box_title">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ***************Smart Academic Institution
         ********* */}

        <div className="features_wrapper">
          <hr className="features_wrapper_hr" />
          <p className="card_warapper_heading">Smart Academic Institution</p>
          <div className="small_card_container">
            {Academic.map((item) => {
              const Icon = item.icon;
              return (
                <div className="small_card_box">
                  <Icon className="small_card_box_icon" />
                  <p className="small_card_box_title">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
