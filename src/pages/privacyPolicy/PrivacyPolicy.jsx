import React from "react";
import "./privacyPolicy.css";
import { FiberManualRecordRounded } from "@mui/icons-material";
import { data } from "./dummy";
import { useDocumentTitle } from "../../useDocumentTitle";
const PrivacyPolicy = () => {
  useDocumentTitle("Privacy Policy")

  return (
    <div className="terms_condition_slider_containerWrapper">
      <div className="privacy_policy_slider">
        <img
          src="https://www.shalimarsmartcity.com/banner-images/faq-banner-lg-16811101031229377592.jpg"
          alt=""
          className="privacy_policy_slider_image"
        />
      </div>
      <div className="privacy_policy_container">
        <h1 className="privacy_policy_heading">PRIVACY POLICY</h1>
        <div className="home_heading_hr_box">
            <hr className="home_animities_heading_hr_top" />
            <hr className="home_animities_heading_hr" />
            <hr className="home_animities_heading_hr_bottom" />
          </div>
        <div className="privacy_policy_wrapper">
          <div className="policy_heading_desc">
            <h1 className="policy_heading_title">Privacy Policy</h1>
            <p className="policy_desc_details">
              Thank you for considering Shalimar Smart City Sargodha for your
              real estate needs. We take your privacy seriously, and we want to
              ensure that your personal information is protected. This Privacy
              Policy outlines the information we collect, how we use it, and how
              we protect it.
            </p>
          </div>
          <div className="policy_heading_desc">
            <h1 className="policy_heading_title">Information we collect</h1>
            <p className="policy_desc_details">
              When you visit our website, we may collect certain information
              about you, such as your name, email address, phone number, and
              home address. We may also collect information about your
              interests, preferences, and other demographic information.
            </p>
            <p className="policy_desc_details">How we use your information We may use your information to:</p>
            <ul className="privacy_List_Item_container">
              <li className="privacy_List_Item">
                <FiberManualRecordRounded className="privacy_answer_quaetion_icon" />
                <p>Contact you regarding your inquiry about our services</p>
              </li>
              <li className="privacy_List_Item">
                <FiberManualRecordRounded className="privacy_answer_quaetion_icon" />
                <p>
                  Send you newsletters, promotional offers, and other marketing
                  communications
                </p>
              </li>
              <li className="privacy_List_Item">
                <FiberManualRecordRounded className="privacy_answer_quaetion_icon" />
                <p>Improve our website and services</p>
              </li>
              <li className="privacy_List_Item">
                <FiberManualRecordRounded className="privacy_answer_quaetion_icon" />
                <p>Respond to your comments and inquiries</p>
              </li>
              <li className="privacy_List_Item">
                <FiberManualRecordRounded className="privacy_answer_quaetion_icon" />
                <p>Comply with legal requirements</p>
              </li>
            </ul>
          </div>
          {data.map((question) => (
            <div className="policy_heading_desc" key={question.id}>
              <h1 className="policy_heading_title">{question.question}</h1>
              <p className="policy_desc_details">{question.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
