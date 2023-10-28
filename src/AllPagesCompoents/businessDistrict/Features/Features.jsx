import React from "react";
import "./Features.css";
import {
  Luxurious_Life_Style,
  Security,
  Recreation,
  Health,
  Club,
  Markets,
} from "./dummy";
const Features = () => {
  return (
    <>
      <div className="animinities_heading">
        <h1 className="features_heading_main">Business District Features</h1>
        <div className="home_heading_hr_box">
          <hr className="home_animities_heading_hr_top" />
          <hr className="home_animities_heading_hr" />
          <hr className="home_animities_heading_hr_bottom" />
        </div>
      </div>
      <div className="bussiness_districtFeature_components">
        <div className="bussiness_districtFeature_wrapper">
          <div className="bussiness_page_features_wrapper_col_1">
            <div className="bussiness_page_features_wrapper">
              <div className="bussiness_page_features_wrapper">
                <p className="bussiness_page_card_warapper_heading">
                  Luxurious Life Style
                </p>
                <hr className="bussiness_page_features_wrapper_hr" />
                <div className="bussiness_page_small_card_container">
                  {Luxurious_Life_Style.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div className="bussiness_page_small_card_box">
                        <Icon className="bussiness_page_small_card_box_icon" />
                        <p className="bussiness_page_small_card_box_title">
                          {item.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="bussiness_page_features_wrapper">
              <div className="bussiness_page_features_wrapper">
                <p className="bussiness_page_card_warapper_heading">
                  Smart Recreational Hub
                </p>
                <hr className="bussiness_page_features_wrapper_hr" />
                <div className="bussiness_page_small_card_container">
                  {Recreation.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div className="bussiness_page_small_card_box">
                        <Icon className="bussiness_page_small_card_box_icon" />
                        <p className="bussiness_page_small_card_box_title">
                          {item.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="bussiness_page_features_wrapper">
              <div className="bussiness_page_features_wrapper">
                <hr className="bussiness_page_features_wrapper_hr" />
                <p className="bussiness_page_card_warapper_heading">
                  Health & Care
                </p>
                <div className="bussiness_page_small_card_container">
                  {Health.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div className="bussiness_page_small_card_box">
                        <Icon className="bussiness_page_small_card_box_icon" />
                        <p className="bussiness_page_small_card_box_title">
                          {item.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <hr className="bussiness_district_hr" />
          <div className="bussiness_page_features_wrapper_col_2">
            <div className="bussiness_page_features_wrapper">
              <p className="bussiness_page_card_warapper_heading">
                Security & Surveillance
              </p>
              <hr className="bussiness_page_features_wrapper_hr" />
              <div className="bussiness_page_small_card_container">
                {Security.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="bussiness_page_small_card_box">
                      <Icon className="bussiness_page_small_card_box_icon" />
                      <p className="bussiness_page_small_card_box_title">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bussiness_page_features_wrapper">
              <p className="bussiness_page_card_warapper_heading">
                Gymkhana Club
              </p>
              <hr className="bussiness_page_features_wrapper_hr" />
              <div className="bussiness_page_small_card_container">
                {Club.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="bussiness_page_small_card_box">
                      <Icon className="bussiness_page_small_card_box_icon" />
                      <p className="bussiness_page_small_card_box_title">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bussiness_page_features_wrapper">
              <p className="bussiness_page_card_warapper_heading">
                Smart Markets
              </p>
              <hr className="bussiness_page_features_wrapper_hr" />
              <div className="bussiness_page_small_card_container">
                {Markets.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="bussiness_page_small_card_box">
                      <Icon className="bussiness_page_small_card_box_icon" />
                      <p className="bussiness_page_small_card_box_title">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
