import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./gallery.css";
import { images } from "./dummy.js";
const Gallery = () => {
  return (
    <Carousel
    stopOnHover={true}
    // transitionTime={2}
    // autoPlay={true}
    infiniteLoop={true}
    useKeyboardArrows={true}
    showArrows={true}
    showThumbs={true}
    swipeable={true}
    autoFocus={true}

    >
      {images.map((image) => (
        <div className="gallary_image_contaner">
          <img src={image.img} alt=""  />
        </div>
      ))}
    </Carousel>
  );
};

export default Gallery;
