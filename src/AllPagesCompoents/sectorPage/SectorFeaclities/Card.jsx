

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../components/propertySlider/propertySlider.css";
import { data } from "./dummy";
import { ArrowForward, LocationOn } from "@mui/icons-material";

const Card = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault:
        "https://www.wavecitycenter.in/wp-content/uploads/2019/07/wcc-hssc.jpg",
    }));
  };

  return (
    <div className="sector_facilities_card_conatiner">
      <Slider {...settings}>
        {data.map((item) => (
          <div className="sector_facility_card">
            <div className="sector_facilityCard_main">
              <img src={item.img} alt="" />
            <div className="sector_card_content">
                <div className="title_icon">
                  <LocationOn className="sector_card_con" />
                  <h1>Main Facilities</h1>
                </div>
                <hr className="sector_facility_card_hr"/>
                <div className="sector_bottom_menu_card">
                  <p>6 Tours</p>
                  <p>
                    Explore <ArrowForward className="sector_bottom_icon" />
                  </p>
                </div>
              </div>  
              <p className="tour_card">6 Tours</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Card;
