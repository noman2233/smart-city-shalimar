import React from "react";
import "./topBar.css";
import { Link } from "react-router-dom";
import { Timelapse } from "@mui/icons-material";

const TopBar = () => {

  return (
    <div className="bussiness_district_topBar">
      <ul>
        <Link>
          <li className="topBar_firstItem"  >
            <Timelapse className="topBarfirst_icon" />
            BUSINESS BAY
          </li>
        </Link>
        <Link>
          <li  >
            <Timelapse className="topBar_icon" />
            FOOD COURT
          </li>
        </Link>
        <Link>
          <li  >
            <Timelapse className="topBar_icon" />
            SHOPPING BAY
          </li>
        </Link>
        <Link>
          <li  >
            <Timelapse className="topBar_icon" />
            Realtors Bay
          </li>
        </Link>
        <Link>
          <li  >
            <Timelapse className="topBar_icon" />
            Payment Plan
          </li>
        </Link>
        <Link>
          <li  >
            <Timelapse className="topBar_icon" />
            Project Map
          </li>
        </Link>
        <Link>
          <li  >
            <Timelapse className="topBar_icon" />
            Features
          </li>
        </Link>
        <Link>
          <li className="topBar_firstItem"  >
            <Timelapse className="topBarfirst_icon" />
            Catalogue
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default TopBar;
