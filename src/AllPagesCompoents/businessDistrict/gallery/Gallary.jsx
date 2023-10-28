import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.css";
import { Data } from "./dummy";
const Gallary = (ref) => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
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
  }

  return (
    <div className="bussiness_district_gallary" ref={ref}>
      <Slider {...settings}>
        {Data.map((item) => (
          <div className="bussiness_district_gallary_card">
            <div className="bussiness_district_gallary_card_main">
              <img src={item.img} alt={item.title} onError={handleErrorImage} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallary;
