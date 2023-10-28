import React from "react";
import "./mediaPage.css";
import Slider from "../../AllPagesCompoents/mediaPage/slider/Slider";
import MediaPosts from "../../AllPagesCompoents/mediaPage/mediaPosts/MediaPosts";
import MediaSidebar from "../../AllPagesCompoents/mediaPage/mediaSidebar/MediaSidebar";
import { useDocumentTitle } from "../../useDocumentTitle";

const MediaPage = () => {
  useDocumentTitle("Blog Page");
  return (
    <div className="media_page_container_wrapper_dark">
      <Slider />
      <div className="progress_updates">
        <h1 className="animinities_heading"> Media BLOG's</h1>
        <div className="home_heading_hr_box">
          <hr className="home_animities_heading_hr_top" />
          <hr className="home_animities_heading_hr" />
          <hr className="home_animities_heading_hr_bottom" />
        </div>
        <div className="heading__home_blogs">
          <div className="media_blog_post_main_page">
            <MediaPosts />
            <MediaSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPage;
