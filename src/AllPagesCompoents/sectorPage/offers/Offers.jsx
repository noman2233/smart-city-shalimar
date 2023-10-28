import React from "react";
import "./offers.css";
import {data} from "./dummy"
const Offers = () => {
  return (
    <div className="offers_conatiner_wrapper">
      <h1>What We Offer?</h1>
      <div className="offers_images_container_wrapper">
        {data.map((item,index) => (
          <div className="offer_image_container" key={index}>
            <img
              src={item.img}
              alt=""
              className="offer_conatiner_image"
            />
            <div className="offer_card_details">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
            </div>
            <div className="circulular_absolute_number_conatiner">
              <h2 className="circulular_absolute_number">0{item.id}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
