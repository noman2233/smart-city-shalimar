import React from "react";
import "./progress.css";
import {data} from "./dummy"
const Card = () => {
  return (
    <div className="progress_card_component">
    {data.map((card)=>{
return(

    <div className="progress_container" key={card.id}>
      <img
        src={card.pic}
        alt=""
        className="progress_image"
      />
      <h1 className="date_progress">{card.date}</h1>
      <img
        src="https://www.jaageer.com/images/free-folder.png"
        alt=""
        className="progress_absolute"
        />
    </div>
        )
    })}
        </div>
  );
};

export default Card;
