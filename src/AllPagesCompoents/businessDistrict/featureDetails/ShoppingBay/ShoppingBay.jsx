import React from "react";
import "./ShoppingBay.css";
const ShoppingBay = () => {
  return (
    <div className="shoppingBay_container">
      <h1 className="shoppingBay_heading">
        Shopping <span>Bay</span>
      </h1>
      <hr className="shoppingBay_heading_hr" />
      <div className="shoppingBay_wrapper">
        <div className="shoppingBay_col_2">
          <p>
            <b>No. of Units: </b>11
          </p>
          <p>
            <b>No. of Floors:</b>Basement, Ground, Mezzanine and 2 Floor
          </p>
          <p>
            <b>Covered Area:</b>5200 Sft
          </p>
          <b>Type of Businesses shall be established in Shopping Bay:</b>
          <ul>
            <li className="shoppingBay_ListItem">National Brands</li>
            <li className="shoppingBay_ListItem">Clothing Brands</li>
            <li className="shoppingBay_ListItem">Shoes Brands</li>
            <li className="shoppingBay_ListItem">Retail Stores</li>
            <li className="shoppingBay_ListItem">National Boutiques</li>
          </ul>
          <p className="shoppingBay_Bay_mainPara">
            Shopping Bay in the Smart Business Districts of Shalimar Smart City
            have 5 -Floor Towers with Basement, Ground, Mezzanine and 2 floors
            with lift These commercial centers typically feature a variety of
            retail stores of different national and international brands, which
            will be located in areas that are designated for business
            activities.
          </p>
          <p className="shoppingBay_Bay_mainPara">
            This Shopping Bay are designed to be convenient for people who work
            in the surrounding area, as well as visitors who are looking to shop
            and dine.
          </p>
          <p className="shoppingBay_Bay_mainPara">
            They often feature a mix of national chain stores national
            boutiques, as well as variety entertainment venues are available.
          </p>
        </div>
        <div className="shoppingBay_col_1">
          <img
            src="https://www.shalimarsmartcity.com/images/new_shopping_bay.jpeg"
            alt=""
            className="shoppingBay_image"
          />
        </div>
      </div>
    </div>
  );
};
export default ShoppingBay;
