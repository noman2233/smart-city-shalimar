import React from "react";
import "./sectorFeatures.css";
import { Home } from "@mui/icons-material";
import { data } from "./dummy";
const SectorFeatures = () => {
  return (
    <div className="sector_features_container_wrapper">
      <h1 className="sector_features_heading">SMART CITY SECTOR 1 FEATURES</h1>

      <div className="sector_features_boxes_container">
        {data.map((item) => {
          let Icon=item.icon
          return (
            <div className="sector_feature_box_container">
              <Icon className="sector_feature_box_icon" />
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <h2 className="sector_feature_box_absolute">0{item.id}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectorFeatures;
