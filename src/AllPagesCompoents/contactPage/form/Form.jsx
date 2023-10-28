import React from "react";
import "./form.css";
import { EmailOutlined } from "@mui/icons-material";
const Form = () => {
  return (
    <div className="rowContactPage">
      <div className="contact_heading_sub">

      <h3>SEND US QUERY</h3>
      <h1>Feel Free To Contact</h1>
      </div>
      <div className="contact_Page_row_2_">
        <form className="contact_page">
          <div className="contact_page_input_teax5tare">
            <div className="contact_page_control_input">
              <input
                type="text"
                name=""
                id=""
                placeholder="Name"
                className="contact_main_page_input"
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                className="contact_main_page_input"
              />
            </div>

            <input
              type="number"
              name=""
              id=""
              placeholder="Number"
              className="contact_page_input_phone"
            />
            <textarea
              name=""
              placeholder="Type Your Message"
              id=""
              cols="30"
              rows="7"
              className="contact_page_textarea"
            >
              Write your Message
            </textarea>
          </div>
          <button type="submit" className="contact_web_page_button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
