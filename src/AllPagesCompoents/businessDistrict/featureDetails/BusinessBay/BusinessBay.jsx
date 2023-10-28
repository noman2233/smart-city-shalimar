import React from "react";
import "./BusinessBay.css";
const BusinessBay = () => {
  return (
    <div className="bussinessBay_container">
      <h1 className="bussinessBay_heading">
        Business <span>Bay</span>
      </h1>
      <hr className="bussinessBay_heading_hr"/>
      <div className="bussinessBay_wrapper">
        <div className="bussinessBay_col_2">
          <p>
            <b>No. of Units: </b>8
          </p>
          <p>
            <b>No. of Floors:</b>Basement,Ground, Mezzanine and 3 Floor
          </p>
          <p>
            <b>Covered Area:</b>8000 Sft
          </p>
          <b>Type of Businesses shall be established in Business Bay:</b>
          <ul>
            <li className="bussinessBay_ListItem">Banks</li>
            <li className="bussinessBay_ListItem">Showrooms</li>
            <li className="bussinessBay_ListItem">Trading Companies</li>
            <li className="bussinessBay_ListItem">Trading Companies</li>
            <li className="bussinessBay_ListItem">Consultancy Services</li>
          </ul>
          <p className="bussiness_Bay_mainPara">
            Smart Business District is offering "Business Bay" with six floors
            including a basement, ground floor, mezzanine, and three floors in
            the commercial zone of Shalimar Smart City. Business Bay is a large
            mixed-use development that includes office buildings, banks, hotels,
            retail spaces, national brands, and other amenities. It is designed
            to provide a convenient and integrated environment for businesses to
            operate and serve people in a safe manner. The Business Bay features
            state-of-the-art infrastructure and services such as high-speed
            internet, parks, recreational areas, and shopping centers in its
            vicinity. It is typically located in prime locations such as central
            business districts, waterfronts, or other strategic areas to attract
            businesses and provide easy access to transportation, services, and
            entertainment. Banks, showrooms, trading companies, and consultancy
            services are expected to open offices in the Business Bay,
            attracting investors, business individuals, corporate companies, and
            firms in the near future.
          </p>
        </div>
        <div className="bussinessBay_col_1">
          <img
            src="https://www.shalimarsmartcity.com/images/new_buisness_bay.jpeg"
            alt=""
            className="bussinessBay_image"
          />
        </div>
      </div>
    </div>
  );
};
export default BusinessBay;
