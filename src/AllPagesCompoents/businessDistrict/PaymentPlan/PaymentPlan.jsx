import React from "react";
import "./paymentPlan.css";
const PaymentPlan = () => {
  return (
    <div className="payment_plane_page_container">
      <h1 className="payment_plane_page_container_heading">
      Project
        <span> Map</span>
      </h1>
      <hr className="payment_plane_page_hr"/>
      <div className="payment_plane_page_wrapper">
        <img
          src="https://www.shalimarsmartcity.com/images/smartbusinessdistrict-sargodha-4-kmmainlahoreroad-96-414439235.jpeg"
          alt=""
          className="payment_plane_page_image"
        />
      </div>
    </div>
  );
};

export default PaymentPlan;
