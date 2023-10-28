import React from "react";
import "./featureDetails.css";
import BusinessBay from "../BusinessBay/BusinessBay";
import FooBay from "../foodBay/FooBay";
import ShoppingBay from "../ShoppingBay/ShoppingBay";
import RealtorsBay from "../RealtorsBay/RealtorsBay";
const FeatureDetails = () => {
  return (

        <div className="bussiness_district_features_container">
          <div className="bussiness_district_features_wrapper">
            <BusinessBay />
            <FooBay />
            <ShoppingBay />
            <RealtorsBay />
          </div>
        </div>

  );
};

export default FeatureDetails;
