import React from "react";
import "./features.css";
import Slider from "../../AllPagesCompoents/featuresPage/slider/Slider"
import Card from "../../AllPagesCompoents/featuresPage/features/Card";
import { useDocumentTitle } from "../../useDocumentTitle";
const Features = () => {
  useDocumentTitle("Features")

  return <div className="features_page_main">
    <Slider/>
    <Card/>
  </div>;
};

export default Features;
