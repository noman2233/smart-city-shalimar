import React from "react";
import "./termsCondition.css";
import { data } from "./dummy";
import { useDocumentTitle } from "../../useDocumentTitle";
const TermsCondition = () => {
  useDocumentTitle("Terms and Condition")

  return (
    <div className="terms_condition_slider_containerWrapper">
      <div className="terms_condition_slider">
        <img
          src="https://www.shalimarsmartcity.com/banner-images/faq-banner-lg-16811101031229377592.jpg"
          alt=""
          className="terms_condition_slider_image"
        />
      </div>
      <div className="terms_condition_container">
        <h1 className="terms_condition_heading">TERMS & CONDITIONS</h1>

        <div className="home_heading_hr_box">
          <hr className="home_animities_heading_hr_top" />
          <hr className="home_animities_heading_hr" />
          <hr className="home_animities_heading_hr_bottom" />
        </div>

        <div className="terms_condition_wrapper">
          <h1>Terms and Conditions</h1>
          <p className="terms_condition_wrapper_title">
            Welcome to the Shalimar Smart City website. By accessing and using
            this website, you agree to be bound by the following terms and
            conditions of use:
          </p>
          <div className="terms_heading_condition">
            {data.map((question, index) => (
              <ul className="terms_List_Item_container" key={index}>
                <li className="terms_List_Item">
                  <div className="terms_question_heading ">
                    <p className="terms_list_title">{question.question}</p>
                  </div>
                  <p className="terms_condition_detail_desc">
                    {question.answer}
                  </p>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
