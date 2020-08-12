import * as React from "react";
import { People } from "../../types/types";
import "../Card/Card.scss";

interface CardProps {
  data: People;
}

const Card_People = ({ data }: CardProps) => {
  return (
    <div className="card_box">
      <h3 className="card_title">{data.name}</h3>
      <div className="card_data_box">
        <strong className="card_strong strong_popu">Birthday:</strong>
        <h3 className="card_data popu">{data.birth_year}</h3>
      </div>
      <div className="card_data_box">
        <strong className="card_strong strong_width">Eye Color: </strong>
        <div className="card_planet_data">
          <h3 className="card_data">{data.eye_color}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card_People;
