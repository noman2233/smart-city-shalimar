import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./progressVideos.css";
import { Data } from "./dummy";

const ProgressVideos = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll:2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow:2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:1,
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
    <div className="progress_videos_card_app">
      <Slider {...settings}>
        {Data.map((item) => (
          <div className="progress_video_card">
            <div className="progress_card_main">
              {/* <img src={item.img} alt={item.title} onError={handleErrorImage} /> */}
              <iframe
                width="100%"
                height="100%"
                src={item.src}
                title="Shalimar Smart City Sprinkles Food Court Tower"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className="iframe_progress_videos_component"
              ></iframe>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProgressVideos;
