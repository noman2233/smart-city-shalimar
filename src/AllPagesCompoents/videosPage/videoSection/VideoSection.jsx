import React, { useState } from "react";
import "./videoSection.css";
import { BUSINESS_DISTRICT, PROGRESS_UPDATE, SMART_CITY, event } from "./dummy";
const VideoSection = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTabs = (index) => {
    setToggleState(index);
  };
  return (
    <div className="video_page_Section_container">
      <div className="animinities_heading">
        <h1 className="features_heading_main">VIDEOS</h1>
        <div className="home_heading_hr_box">
          <hr className="home_animities_heading_hr_top" />
          <hr className="home_animities_heading_hr" />
          <hr className="home_animities_heading_hr_bottom" />
        </div>
      </div>

      <div className="video_page_Section_wrapper">
        <div className="video_page_Section_wrapper_videos">
          <div className="video_page_section_top_bar">
            <button
              className={
                toggleState === 1
                  ? "video_page_section_top_barButton"
                  : "video_page_section_top_barButton_inactive"
              }
              onClick={() => toggleTabs(1)}
            >
              SMART CITY
            </button>
            <button
              className={
                toggleState === 2
                  ? "video_page_section_top_barButton"
                  : "video_page_section_top_barButton_inactive"
              }
              onClick={() => toggleTabs(2)}
            >
              BUSINESS DISTRICT
            </button>
            <button
              className={
                toggleState === 3
                  ? "video_page_section_top_barButton"
                  : "video_page_section_top_barButton_inactive"
              }
              onClick={() => toggleTabs(3)}
            >
              PROGRESS UPDATE
            </button>
            <button
              className={
                toggleState === 4
                  ? "video_page_section_top_barButton"
                  : "video_page_section_top_barButton_inactive"
              }
              onClick={() => toggleTabs(4)}
            >
              Event
            </button>
          </div>
          <div
            className={
              toggleState === 1
                ? "video_box_container"
                : "video_page_section_conatiner_inActive"
            }
          >
            {SMART_CITY.map((video) => (
              <div className="video_page_section_box">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.src}
                  title="Shalimar Smart City Sprinkles Food Court Tower"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>

          <div
            className={
              toggleState === 2
                ? "video_box_container"
                : "video_page_section_conatiner_inActive"
            }
          >
            {BUSINESS_DISTRICT.map((video) => (
              <div className="video_page_section_box">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.src}
                  title="Shalimar Smart City Sprinkles Food Court Tower"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>

          <div
            className={
              toggleState === 3
                ? "video_box_container"
                : "video_page_section_conatiner_inActive"
            }
          >
            {PROGRESS_UPDATE.map((video) => (
              <div className="video_page_section_box">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.src}
                  title="Shalimar Smart City Sprinkles Food Court Tower"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
          <div
            className={
              toggleState === 4
                ? "video_box_container"
                : "video_page_section_conatiner_inActive"
            }
          >
            {event.map((video) => (
              <div className="video_page_section_box">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.src}
                  title="Shalimar Smart City Sprinkles Food Court Tower"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
