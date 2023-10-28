import React from "react";
import "./event.css";
import Slider from "../../AllPagesCompoents/event/slider/Slider";
import EventCard from "../../AllPagesCompoents/event/eventCard/EventCard";
import { useDocumentTitle } from "../../useDocumentTitle";
const Event = () => {
  useDocumentTitle("Event");

  return (
    <>
    <Slider />
    <div className="event_page_main_container_wrapper">
      <div className="progress_updates">
        <h1 className="animinities_heading">OUR RECENT EVENTS</h1>
        <div className="home_heading_hr_box">
          <hr className="home_animities_heading_hr_top" />
          <hr className="home_animities_heading_hr" />
          <hr className="home_animities_heading_hr_bottom" />
        </div>
      </div>
      <EventCard />
    </div>
    </>
  );
};

export default Event;
