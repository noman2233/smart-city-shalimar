import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PhoneIcon from "@mui/icons-material/Phone";
const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footer_absolute_number">
        <PhoneIcon className="footer_call_icon" />
        <h5> UAN : 048 111-222-084</h5>
      </div>
      <div className="absolute_image">
        <img
          src="https://www.shalimarsmartcity.com/images/shalimar-smartcity-logo.png"
          alt=""
          className="footer_absolute_image"
        />
      </div>
      <div className="footer_col_1">
        <p>
          Shalimar Smart City a model of excellence from Shalimar Group of
          Companies is going to welcome the new era of Sargodha. This project is
          known for its significant work and town-planning. It is going to
          happen for the first time in Sargodha that advanced technologies and
          smart tactics are being utilized to shape this mega project.
        </p>
      </div>
      <hr className="footer_col_hr non_active_hr_col-1" />
      <div className="footer_col_2">
      <div className="footer_col_2_wrapper">

        <h1>Office Locations</h1>
        <ul>
          <li className="fListItem_main">
            <h2>Head office</h2>
            <p>2km Lahore Road, Sargodha</p>
          </li>
          <li className="fListItem">
            <h2>Lahore Office</h2>
            <p>75B Fazaia Housing scheme, Raiwind Road, Lahore</p>
          </li>
          <li className="fListItem">
            <h2>Branch Office</h2>
            <p>731-A Gulberg City, Sargodha</p>
          </li>
        </ul>
      </div>
      </div>
      <hr className="footer_col_hr" />
      <div className="footer_col_3">
        <ul>
          <Link to="/about">
            <li className="footer_col_3_list">
              About Us
              <ChevronRightIcon className="footer_col_3_icon" />
            </li>
          </Link>
          <Link to="/frequent-asked-questions">
            <li className="footer_col_3_list">
              FAQs
              <ChevronRightIcon className="footer_col_3_icon" />
            </li>
          </Link>
          <Link to="/development">
            <li className="footer_col_3_list">
              Development
              <ChevronRightIcon className="footer_col_3_icon" />
            </li>
          </Link>
          <Link to="/business-district">
            <li className="footer_col_3_list">
              Smart Business District
              <ChevronRightIcon className="footer_col_3_icon" />
            </li>
          </Link>
          <Link to="/">
            <li className="footer_col_3_list">
              Media
              <ChevronRightIcon className="footer_col_3_icon" />
            </li>
          </Link>
          <Link to="/blog">
            <li className="footer_col_3_list">
              Blog
              <ChevronRightIcon />
            </li>
          </Link>
          <Link to="/contact">
            <li className="footer_col_3_list">
              Contact Us
              <ChevronRightIcon />
            </li>
          </Link>
        </ul>
      </div>
      <hr className="footer_col_hr" />
      <div className="footer_col_4">
        <img
          src="https://www.shalimarsmartcity.com/images/shalimar-smart-city-map.jpg"
          alt=""
          className="footer_col_4_imge"
        />
      </div>
     
    </div>
    <div className="footer_second">
        <div className="image_cpyright">
          <img
            src="https://www.shalimarsmartcity.com/images/Shalimar-Group-of-Companiesfooter.png"
            alt=""
            className="footer_image_company"
          />
          <p>Shalimar Group of Companies &copy; 2023</p>
        </div>
        <div className="terms_policy">
          <Link to="/terms-conditions">
          <p>Terms & Conditions</p>
          </Link>
          <hr className="footer_second_hr"/>
          <Link to="/privacy-policy">
          <p>Privacy Policy</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
