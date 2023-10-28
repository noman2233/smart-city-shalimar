
import Card from "./Card";
import "./sectorFeaclities.css";
import React from "react";

const SectorGallery = () => {
  return (
    <div className="sector_gallery_container">
      <div className="sector_gallery_container_wrapper"></div>
      <div className="sector_gallery_wrapper">
        <p>From the features</p>
        <h1>Smart City Sector 1 Main Facilities</h1>
      </div>
      <Card />
    </div>
  );
};

export default SectorGallery;
