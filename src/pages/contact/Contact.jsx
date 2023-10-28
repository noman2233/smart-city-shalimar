import React from "react";
import "./contact.css";
import Form from "../../AllPagesCompoents/contactPage/form/Form";
import Slider from "../../AllPagesCompoents/contactPage/slider/Slider";
import Details from "../../AllPagesCompoents/contactPage/details/Details";
import { useDocumentTitle } from "../../useDocumentTitle";
const Contact = () => {
  useDocumentTitle("Contact us");
  return (
    <div>
      <Slider />
      <div className="conatct_Page_main_allComponentWrapper">

      <h1 className="contact_heading">CONTACT US</h1>
      <div className="home_heading_hr_box">
        <hr className="home_animities_heading_hr_top" />
        <hr className="home_animities_heading_hr" />
        <hr className="home_animities_heading_hr_bottom" />
      </div>
      <div className="contact_form_detail">
        <Form />
        <Details />
      </div>
      </div>
    </div>
  );
};

export default Contact;
