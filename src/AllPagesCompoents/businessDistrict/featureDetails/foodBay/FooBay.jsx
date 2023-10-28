import React from "react";
import "./fooBay.css";
const FooBay = () => {
  return (
    <div className="foodBay_container">
      <h1 className="foodBay_heading">
        Food <span>Court</span>
      </h1>
      <hr className="foodBay_heading_hr"/>
      <div className="foodBay_wrapper">
        <div className="foodBay_col_1">
          <img
            src="https://www.shalimarsmartcity.com/images/new_food_court.jpeg"
            alt=""
            className="foodBay_image"
          />
        </div>
        <div className="foodBay_col_2">
          <p>
            <b>No. of Units: </b>12
          </p>
          <p>
            <b>No. of Floors:</b>Ground, Mezzanine and 1 Floor
          </p>
          <p>
            <b>Covered Area:</b>2666 Sft
          </p>
          <b>Type of Businesses shall be established in Food Court:</b>
          <ul>
            <li className="foodBay_ListItem">Continental Foods</li>
            <li className="foodBay_ListItem">Turkish Foods</li>
            <li className="foodBay_ListItem">Cultural Foods</li>
            <li className="foodBay_ListItem">Fast Foods </li>
            <li className="foodBay_ListItem"> Bakery </li>
            <li className="foodBay_ListItem"> Ice Cream Parlour</li>
          </ul>
          <p className="foodBay_Bay_mainPara">
            The Smart Food Court offers a convenient, one-stop destination for
            all dining needs. Shalimar Smart City Sargodha is launching a food
            court consisting of three floors: the ground, mezzanine, and first
            floor. In a Smart Business District, food courts are areas where
            national and international food brands will be established and have
            a variety of food restaurants. The management of Shalimar Smart City
            has the plan to give possession of buildings within 1 year from the
            date of its development.
          </p>
          <p className="foodBay_Bay_mainPara">
            Moreover, a large area of this food court is available for outdoor
            dining. Families from all places can visit and spend quality time at
            Smart Food Courts, where all food eatery options will be available
            to choose from.
          </p>
          <p className="foodBay_Bay_mainPara">
            Smart Food Courts are designed to provide convenient and affordable
            dining options to people who work or visit Shalimar Smart City. Food
            courts can vary in size and style, but they typically feature a mix
            of fast food chains, Cultural foods, Continental, Turkish, Bakery,
            and Ice cream parlours with Dining restaurants, and food outlets in
            the form of Kiosks as well. Food courts in business districts can be
            a convenient option for people looking for a variety of dining
            options in one place, with a splendid atmosphere and affordable
            prices.
          </p>
        </div>
      </div>
    </div>
  );
};
export default FooBay;
