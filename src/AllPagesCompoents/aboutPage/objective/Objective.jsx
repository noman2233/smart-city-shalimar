import React from "react";
import "./objective.css";
function Objective() {
  return (
    <div className="objective_main_container">
      <div className="objecvtive_image_component_slider_founder">
        <img
          src="https://i.ibb.co/f4gqNT3/about-img.jpg"
          alt=""
          className="objective_main_image"
        />
      </div>
      <div className="objective_details">
        <h1>Objective</h1>
        <hr className="object_deatil_heading_hr"/>
        <p>
          The project is designed to meet the needs and preferences of a wide
          range of people, including young professionals, families, and
          retirees. By providing a well-planned and well-equipped living and
          working environment, the Shalimar Smart City aims to attract and
          retain the best talent and businesses in the region, while also
          contributing to the economic growth and development of the surrounding
          area.
        </p>
      </div>
    </div>
  );
}

export default Objective;
