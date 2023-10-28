import React from "react";
import "./development.css";
import Slider from "../../AllPagesCompoents/development/slider/Slider";
import ProgressVideos from "../../AllPagesCompoents/development/progressVideos/ProgressVideos";
import { useDocumentTitle } from "../../useDocumentTitle";
import Progress from "../../components/progress/Progress";
const Development = () => {
  useDocumentTitle("Development");
  return (
    <div>
      <Slider />
      <div className="development_page_wrapper_container">
        <h1 className="development_heading">DEVELOPMENT</h1>
        <div className="home_heading_hr_box">
          <hr className="home_animities_heading_hr_top" />
          <hr className="home_animities_heading_hr" />
          <hr className="home_animities_heading_hr_bottom" />
        </div>
        <Progress/>
      </div>
      <div className="progress_home_container">
        <h1 className="videos_container_heading">PROGRESS VIDEOS</h1>
        <div className="home_heading_hr_box">
          <hr className="home_animities_heading_hr_top" />
          <hr className="home_animities_heading_hr" />
          <hr className="home_animities_heading_hr_bottom" />
        </div>
        <ProgressVideos />
      </div>
    </div>
  );
};

export default Development;
