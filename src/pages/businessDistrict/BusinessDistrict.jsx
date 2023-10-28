import React from "react";
import "./businessDistrict.css";
import Slider from "../../AllPagesCompoents/businessDistrict/slider/Slider";
import PaymentPlan from "../../AllPagesCompoents/businessDistrict/PaymentPlan/PaymentPlan";
import PropjectMap from "../../AllPagesCompoents/businessDistrict/ProjectMap/PropjectMap";
import Recreation from "../../AllPagesCompoents/businessDistrict/recreation/Recreation";
import Features from "../../AllPagesCompoents/businessDistrict/Features/Features";
import TopBar from "../../AllPagesCompoents/businessDistrict/topBar/TopBar";
import VideoSection from "../../AllPagesCompoents/businessDistrict/videoSection/VideoSection";
import Gallary from "../../AllPagesCompoents/businessDistrict/gallery/Gallary";
import FeatureDetails from "../../AllPagesCompoents/businessDistrict/featureDetails/featureDetails/FeatureDetails";
import { useDocumentTitle } from "../../useDocumentTitle";
const BusinessDistrict = () => {
  useDocumentTitle("Business District")
  return (
    <div>
      <Slider />
      <TopBar />
      <div className="bussiness_district_page_dark_mode">

      <VideoSection />
      <FeatureDetails />
      <PropjectMap />
      <PaymentPlan />
      <Recreation />
      <Features />
      <div className="bussiness_district_main_page">
        <h1 className="bussiness_disctrict_gallary_heading">
          Gall<span>ery</span>
        </h1>
        <hr className="bussiness_disctrict_gallary_heading_hr" />
      </div>

      <Gallary />
      </div>
    </div>
  );
};

export default BusinessDistrict;
