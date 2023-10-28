import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from "../../../components/events/dummy";
import "./eventCard.css";

const EventCard = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1164,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
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
      linkDefault: "Image",
    }));
  };

  return (
    <div className="event_page_card_container">
      <Slider {...settings}>
        {Data.map((item) => (
          <div className="event_page_card_wrapper">
            <div className="event_page_card_image_container">
              <img src={item.img} alt="event" onError={handleErrorImage} />
            </div>

            <button className="event_page_card_date">16-7-2022</button>
            <div className="event_page_card_details">
              <div className="event_page_card_title">
                <h1> {item.title}</h1>
              </div>
              <hr className="event_page_card_hr"/>
              <div className="event_page_city">
                <h1> {item.city}</h1>
                <button className="event_page_card_button">View Detail</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventCard;
