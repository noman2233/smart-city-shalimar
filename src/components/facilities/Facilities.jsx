
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./facilities.css";
import { data } from "./dummy";

const Facilities = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 200,
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="facilities_card_container">
      <Slider {...settings}>
        {data.map((item) => {
          const Icon = item.icon;
          return (
            <div className="facilities_cards" key={item.id}>
              <div class="facilities_card">
                <Icon className="facilities_icon" />
                <h4 className="facilities_heading">{item.title}</h4>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Facilities;
