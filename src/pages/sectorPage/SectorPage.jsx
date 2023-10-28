import React from "react";
import "./sectorPage.css";
import Slider from "../../AllPagesCompoents/sectorPage/slider/Slider";
import Offers from "../../AllPagesCompoents/sectorPage/offers/Offers";
import SectorFeatures from "../../AllPagesCompoents/sectorPage/sectorFeatures/SectorFeatures";
import SectrorTabs from "../../AllPagesCompoents/sectorPage/sectrorTab/SectrorTabs";
import Overview from "../../AllPagesCompoents/sectorPage/Overview/Overview";
import SectorGallery from "../../AllPagesCompoents/sectorPage/sectorGallery/SectorGallery";
import SectorFeaclities from "../../AllPagesCompoents/sectorPage/SectorFeaclities/SectorFeaclities";
const SectorPage = () => {
  return (
    <div className="sector_page_container_wrapper_dark">
      <Slider />

      <Offers />
      <Overview />
      <SectorFeatures />
      <SectorFeaclities />
      <div className="sector_page_main_image_container">
        <div className="sector_page_main_image_wrapper"></div>
      </div>
      <SectorGallery />
      <SectrorTabs />
    </div>
  );
};

export default SectorPage;
