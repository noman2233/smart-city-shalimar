import React from "react";
import "./gallary.css";
import Slider from "../../AllPagesCompoents/gallary/slider/Slider";
import GallerySection from "../../AllPagesCompoents/gallary/gallarySection/GallerySection";
import { useDocumentTitle } from "../../useDocumentTitle";

const Gallary = () => {
  useDocumentTitle("Gallery");

  return (
    <div>
      <Slider />
      <GallerySection />
    </div>
  );
};

export default Gallary;
