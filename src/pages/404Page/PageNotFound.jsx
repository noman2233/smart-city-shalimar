import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";
import { useDocumentTitle } from "../../useDocumentTitle";

const PageNotFound = () => {
  useDocumentTitle("Sorry! Page not found");
  return (
    <div className="not_found">
      <h1>
        <b>NOTHING</b> WAS FOUND!
      </h1>
      <p>
        THE PAGE YOU ARE LOOKING FOR MIGHT <br /> HAVE BEEN REMOVED, HAD ITS
        NAME CHANGED OR IS TEMPORARILY UNAVAILABLE!
      </p>
      <Link to="/">
        <button className="back_home_page">BACK TO HOME PAGE</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
