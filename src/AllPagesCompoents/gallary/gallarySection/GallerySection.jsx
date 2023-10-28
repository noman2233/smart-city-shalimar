import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Timelapse } from "@mui/icons-material";
import "./gallerySection.css";
import { Buisness_District, Event_Gallery, SBD_Parks } from "./dummy";
const GallerySection = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTabs = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="gallary_topBar">
        <ul>
          <Link>
            <li
              className={
                toggleState === 1
                  ? "gallary_topBar_firstItem"
                  : "gallary_topBar_non_active"
              }
              onClick={() => toggleTabs(1)}
            >
              <Timelapse className="gallary_topBar_icon" />
              SBD Parks
            </li>
          </Link>
          <Link>
            <li
              onClick={() => toggleTabs(2)}
              className={
                toggleState === 2
                  ? "gallary_topBar_firstItem"
                  : "gallary_topBar_non_active"
              }
            >
              <Timelapse className="gallary_topBar_icon" />
              Event Gallery
            </li>
          </Link>
          <Link>
            <li
              onClick={() => toggleTabs(3)}
              className={
                toggleState === 3
                  ? "gallary_topBar_firstItem"
                  : "gallary_topBar_non_active"
              }
            >
              <Timelapse className="gallary_topBar_icon" />
              Buisness District
            </li>
          </Link>
          <Link>
            <li
              onClick={() => toggleTabs(4)}
              className={
                toggleState === 4
                  ? "gallary_topBar_firstItem"
                  : "gallary_topBar_non_active"
              }
            >
              <Timelapse className="gallary_topBar_icon" />
              Shalimar Smart City
            </li>
          </Link>
        </ul>
      </div>
      <div className="gallary_page_component_container">
        <div className="animinities_heading">
          <h1 className="features_heading_main">GALLERY</h1>
          <div className="home_heading_hr_box">
            <hr className="home_animities_heading_hr_top" />
            <hr className="home_animities_heading_hr" />
            <hr className="home_animities_heading_hr_bottom" />
          </div>
        </div>
        <div className="gallary_page_component_wrapper ">
          <div
            className={
              toggleState === 1
                ? "gallary_page_component_image_wrapper"
                : "inActive_image_wrapper"
            }
          >
            {SBD_Parks.map((image) => (
              <img
                key={image.id}
                src={image.img}
                alt=""
                className="gallary_page_component_image"
              />
            ))}
          </div>
          <div
            className={
              toggleState === 2
                ? "gallary_page_component_image_wrapper"
                : "inActive_image_wrapper"
            }
          >
            {Event_Gallery.map((image) => (
              <img
                key={image.id}
                src={image.img}
                alt=""
                className="gallary_page_component_image"
              />
            ))}
          </div>
          <div
            className={
              toggleState === 3
                ? "gallary_page_component_image_wrapper"
                : "inActive_image_wrapper"
            }
          >
            {Buisness_District.map((image) => (
              <img
                key={image.id}
                src={image.img}
                alt=""
                className="gallary_page_component_image"
              />
            ))}
          </div>
          <div
            className={
              toggleState === 4
                ? "gallary_page_component_image_wrapper"
                : "inActive_image_wrapper"
            }
          >
            {SBD_Parks.map((image) => (
              <img
                key={image.id}
                src={image.img}
                alt=""
                className="gallary_page_component_image"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GallerySection;
