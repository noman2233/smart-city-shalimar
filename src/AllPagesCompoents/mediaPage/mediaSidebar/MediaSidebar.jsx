import React from "react";
import "./mediaSidebar.css";
import { Storefront, Work } from "@mui/icons-material";
import "./mediaSidebar.css";

const MediaSidebar = () => {
  return (
    <div className="media_sidebar">
      <div className="media_sidebarItem">
        <h3 className="media_sidebar_popular">
          Media <b>Videos</b>
        </h3>
        <hr className="media_sidebar___post_hr" />
        <div className="  media_sidebar_blog_container_wrapper">
          <div className="media_sidebar_blog_container">
            <div className="media_sidebar_video_container">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Kf6N6u4ZNXU"
                title="Shalimar Smart City Sprinkles Food Court Tower"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="media_sideBar_blog_box">
              <div className="media_sidebar_category_time">
                <p>
                  <Work className="media_sidebar_icons" />
                  Real State
                </p>
                <p>
                  <Storefront className="media_sidebar_icons" />2 March 2023
                </p>
              </div>

              <h2 className="media_blog_company_feature">
                High-Tech Security Measures at Shalimar Smart City
              </h2>
            </div>

            <hr className="media_blog_sidebar_hr" />
          </div>
          <div className="media_sidebar_blog_container">
            <div className="media_sidebar_video_container">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Kf6N6u4ZNXU"
                title="Shalimar Smart City Sprinkles Food Court Tower"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="media_sideBar_blog_box">
              <div className="media_sidebar_category_time">
                <p>
                  <Work className="media_sidebar_icons" />
                  Real State
                </p>
                <p>
                  <Storefront className="media_sidebar_icons" />2 March 2023
                </p>
              </div>

              <h2 className="media_blog_company_feature">
                High-Tech Security Measures at Shalimar Smart City
              </h2>
            </div>

            <hr className="media_blog_sidebar_hr" />
          </div>
          <div className="media_sidebar_blog_container">
            <div className="media_sidebar_video_container">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Kf6N6u4ZNXU"
                title="Shalimar Smart City Sprinkles Food Court Tower"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="media_sideBar_blog_box">
              <div className="media_sidebar_category_time">
                <p>
                  <Work className="media_sidebar_icons" />
                  Real State
                </p>
                <p>
                  <Storefront className="media_sidebar_icons" />2 March 2023
                </p>
              </div>

              <h2 className="media_blog_company_feature">
                High-Tech Security Measures at Shalimar Smart City
              </h2>
            </div>

            <hr className="media_blog_sidebar_hr" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSidebar;
