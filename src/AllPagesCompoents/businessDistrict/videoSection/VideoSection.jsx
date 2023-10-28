import React from "react";
import "./videoSection.css";
const VideoSection = () => {
  return (
    <div className="video_section_main_container">
      <div className="animinities_heading">
        <h1 className="features_heading_main">SMART BUSINESS DISTRICT</h1>
        <div className="home_heading_hr_box">
          <hr className="home_animities_heading_hr_top" />
          <hr className="home_animities_heading_hr" />
          <hr className="home_animities_heading_hr_bottom" />
        </div>
      </div>
      <div className="video_section_col_wrapper">
        <div className="video_section_col_1">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/KyTZQXRv_f8"
            title="Revolutionizing Business Growth: The Benefits of a Smart Business District (SBD)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe> 
        </div>
        <div className="video_section_col_2">
          <div className="video_section_col_2_wrapper">
            <p>
              The Shalimar Smart City in Sargodha is offering the first Smart
              Housing Project, featuring a <b>Smart Business District</b> that
              offers residents a place to work, eat, and enjoy. The district
              will be developed using modern technology and state-of-the-art
              machinery.
            </p>
            <p>
              It is a new commercial hub that offers retail sales, goods,
              restaurants, entertainment, and other services in one place. Food
              courts, Shopping Bay, Realtors Bay, and Business Bay will all be
              located in the Smart Business District, meeting the needs of
              Sargodha residents and offering a fantastic opportunity for growth
              in a prosperous community. The Smart Business District is
              necessary to update outdated business patterns in Sargodha and is
              the perfect place to create, develop, and grow your business. It
              offers all the smart facilities necessary for business growth and
              is economically and environmentally sustainable.
            </p>
            <div className="col_2_smallBanner">
              <p>
                Shalimar Smart City introducing a Business District soon, to
                change the dynamics of outdated business patterns in Sargodha.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
