import React, { useState } from "react";
import "./sectorGallery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "./dummy";

const SectorGallery = () => {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
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
    <div className="sector_gallary_main_container">
      <h1>SMART CITY SECTOR 1 GALLERY</h1>
      <Slider {...settings}>
        {images.map((item) => (
          <div className="sector_Property_card">
            <div className="sector_gallary_card_main">
              <img
                src={item.img}
                alt="proprty-pic"
                onError={handleErrorImage}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SectorGallery;
