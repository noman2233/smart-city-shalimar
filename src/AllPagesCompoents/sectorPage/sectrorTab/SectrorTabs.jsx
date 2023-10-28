import React, { useState } from "react";
import "./sectrorTab.css";
const SectrorTabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTabs = (index) => {
    setToggleState(index);
  };
  return (
    <div className="sector_tabs_cotainer">
      <div className="sector_top_bar">
        <p
          className={
            toggleState === 1
              ? "sector_top_barButtons"
              : "sector_top_barButtons_non_active"
          }
          onClick={() => toggleTabs(1)}
        >
          PENTHOUSE
        </p>
        <p
          className={
            toggleState ===2
              ? "sector_top_barButtons"
              : "sector_top_barButtons_non_active"
          }
          onClick={() => toggleTabs(2)}
        >
          SIMPLEX
        </p>
        <p
          className={
            toggleState === 3
              ? "sector_top_barButtons"
              : "sector_top_barButtons_non_active"
          }
          onClick={() => toggleTabs(3)}
        >
          DOUBLE HEIGHT
        </p>
        <p
          className={
            toggleState === 4
              ? "sector_top_barButtons"
              : "sector_top_barButtons_non_active"
          }
          onClick={() => toggleTabs(4)}
        >
          DOUBLE HEIGHT DUPLEX
        </p>
      </div>
      <div
        className={
          toggleState === 1
            ? "sector_top_bar_content_wrapper"
            : "sector_top_bar_content_wrapper_non_active"
        }
      >
        <div className="sector_top_bar_content_wrapper_col_1">
          <h1> Luxurious Life Style</h1>
          <hr className="sector_top_bar_hr" />
          <p>
            The gracious entry foyer leads to an open kitchen with custom
            stained walnut cabinetry, granite countertops, and a built-in dining
            banquette (in select one bedroom homes).
          </p>
        </div>
        <div className="sector_top_bar_content_wrapper_col_2">
          <div className="sector_col2_floor">
            <p>Floor No</p>
            <p>22</p>
          </div>
          <div className="sector_col2_floor">
            <p>Floor No</p>
            <p>22</p>
          </div>
          <div className="sector_col2_floor">
            <p>Rooms</p>
            <p>22</p>
          </div>
          <div className="sector_col2_floor">
            <p>Rooms </p>
            <p>22</p>
          </div>
          <div className="sector_col2_floor">
            <p>Rooms </p>
            <p>22</p>
          </div>
        </div>
        <div className="sector_top_bar_content_wrapper_col_3">
          <img
            src="https://www.shalimarsmartcity.com/images/sector_3.jpg"
            alt=""
            className="sector_tabs_col_3_Image"
          />
        </div>
      </div>
      <div
        className={
          toggleState === 2
            ? "sector_top_bar_content_wrapper"
            : "sector_top_bar_content_wrapper_non_active"
        }
     
        >
        <div className="sector_top_bar_content_wrapper_col_1">
          <h1> Luxurious Life Style</h1>
          <hr className="sector_top_bar_hr" />
          <p>
            The gracious entry foyer leads to an open kitchen with custom
            stained walnut cabinetry, granite countertops, and a built-in dining
            banquette (in select one bedroom homes).
          </p>
        </div>
        <div className="sector_top_bar_content_wrapper_col_2">
          <div className="sector_col2_floor">
            <p>Floor No</p>
            <p>22</p>
          </div>
          <div className="sector_col2_floor">
            <p>Floor No</p>
            <p>22</p>
          </div>
          <div className="sector_col2_floor">
            <p>Rooms</p>
            <p>22</p>
          </div>
          <div className="sector_col2_floor">
            <p>Rooms </p>
            <p>22</p>
          </div>
          <div className="sector_col2_floor">
            <p>Rooms </p>
            <p>22</p>
          </div>
        </div>
        <div className="sector_top_bar_content_wrapper_col_3">
          <img
            src="https://www.shalimarsmartcity.com/images/sector_4.jpg"
            alt=""
            className="sector_tabs_col_3_Image"
          />
        </div>
      </div>
      <div
        className={
          toggleState === 3
            ? "sector_top_bar_content_wrapper"
            : "sector_top_bar_content_wrapper_non_active"
        }
     
        >
        <div className="sector_top_bar_content_wrapper_col_1">
          <h1> Luxurious Life Style</h1>
          <hr className="sector_top_bar_hr" />
          <p>
            The gracious entry foyer leads to an open kitchen with custom
            stained walnut cabinetry, granite countertops, and a built-in dining
            banquette (in select one bedroom homes).
          </p>
        </div>
        <div className="sector_top_bar_content_wrapper_col_2">
          <div className="sector_col2_floor">
            <p>Floor No</p>
            <p>22</p>
          </div>
          <div className="sector_col2_floor">
            <p>Floor No</p>
            <p>22</p>
          </div>
          <div className="sector_col2_floor">
            <p>Rooms</p>
            <p>22</p>
          </div>
          <div className="sector_col2_floor">
            <p>Rooms </p>
            <p>22</p>
          </div>
          <div className="sector_col2_floor">
            <p>Rooms </p>
            <p>22</p>
          </div>
        </div>
        <div className="sector_top_bar_content_wrapper_col_3">
          <img
            src="https://www.shalimarsmartcity.com/images/sector_5.jpg"
            alt=""
            className="sector_tabs_col_3_Image"
          />
        </div>
      </div>
     
      <div
        className={
          toggleState === 4
            ? "sector_top_bar_content_wrapper"
            : "sector_top_bar_content_wrapper_non_active"
        }
     
        >
        <div className="sector_top_bar_content_wrapper_col_1">
          <h1> Luxurious Life Style</h1>
          <hr className="sector_top_bar_hr" />
          <p>
            The gracious entry foyer leads to an open kitchen with custom
            stained walnut cabinetry, granite countertops, and a built-in dining
            banquette (in select one bedroom homes).
          </p>
        </div>
        <div className="sector_top_bar_content_wrapper_col_2">
          <div className="sector_col2_floor">
            <p>Floor No</p>
            <p>22</p>
          </div>
          <div className="sector_col2_floor">
            <p>Floor No</p>
            <p>22</p>
          </div>
          <div className="sector_col2_floor">
            <p>Rooms</p>
            <p>22</p>
          </div>
          <div className="sector_col2_floor">
            <p>Rooms </p>
            <p>22</p>
          </div>
          <div className="sector_col2_floor">
            <p>Rooms </p>
            <p>22</p>
          </div>
        </div>
        <div className="sector_top_bar_content_wrapper_col_3">
          <img
            src="https://www.shalimarsmartcity.com/images/sector_6.jpg"
            alt=""
            className="sector_tabs_col_3_Image"
          />
        </div>
      </div>
     
    </div>
  );
};

export default SectrorTabs;
