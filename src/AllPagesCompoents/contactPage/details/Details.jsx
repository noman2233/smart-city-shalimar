import React from "react";
import "./details.css";
import { LocationOn, Mail, Phone } from "@mui/icons-material";
const Details = () => {
  return (
    <div className="contact_details">
      <div className="contact_details_headings">

      <h3>NEED ANY HELP?</h3>
      <h1>Get In Touch With Us</h1>
      <p>We Are Always Happy to make valuable new contacts..</p>
      </div>
      <div className="details_info_container">
        <div className="details_icon_info">
          <Phone className="details_icon"/>
          <div className="detail_info">
            <h1>UAN</h1>
            <p>(048) 111-222-084</p>
          </div>
        </div>
        <div className="details_icon_info">
          <LocationOn  className="details_icon"/>
          <div className="detail_info">
            <h1>Current Location</h1>
            <p>2km Lahore Road, Sargodha</p>
          </div>
        </div>
        <div className="details_icon_info">
          <Mail  className="details_icon"/>
          <div className="detail_info">
            <h1>Send Email</h1>
            <p>info@shalimarsmartcity.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
