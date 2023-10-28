import React from "react";
import "./RealtorsBay.css";
const RealtorsBay = () => {
  return (
    <div className="realtorsBay_container">
      <h1 className="realtorsBay_heading">
        Realtors <span>Bay</span>
      </h1>
      <hr className="retailorBay_heading_hr" />
      <div className="realtorsBay_wrapper">
        <div className="realtorsBay_col_1">
          <img
            src="https://www.shalimarsmartcity.com/images/new_realtor_bay.jpeg"
            alt=""
            className="realtorsBay_image"
          />
        </div>
        <div className="realtorsBay_col_2">
          <p>
            <b>No. of Units: </b>14
          </p>
          <p>
            <b>No. of Floors:</b>Basement, Ground, Mezzanine and 2 Floor
          </p>
          <p>
            <b>Covered Area:</b>5200 Sft
          </p>
          <b>Type of Businesses shall be established in Realtors Bay:</b>
          <ul>
            <li className="realtorsBay_ListItem">Developers</li>
            <li className="realtorsBay_ListItem">Builders</li>
            <li className="realtorsBay_ListItem">Realtors</li>
            <li className="realtorsBay_ListItem">Architects</li>
            <li className="realtorsBay_ListItem">Investment Companies</li>
          </ul>
          <p className="realtors_Bay_mainPara">
            Smart Business District is offering "Realtors Bay," a five-floor
            space for brokerage firms to work with investors and homebuyers. The
            Bay includes a basement, ground floor, mezzanine, and two floors
            with modern elevators. Realtors Bay is a hub for real estate agents
            and brokers to conduct business with ease.
          </p>
          <p className="realtors_Bay_mainPara">
            It offers private offices, shared workspaces, conference rooms, and
            other amenities to provide a convenient and accessible environment
            for real estate professionals to meet with clients and conduct
            transactions.
          </p>
          <p className="realtors_Bay_mainPara">
            Realtors Bay is designed to make it easy for agents to work with
            clients and potential buyers or renters. It will also be used by
            developers, builders, and architects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealtorsBay;
