import * as React from "react";
import { Planet, People } from "../../types/types";
import "./Card.scss";

interface CardProps {
  data: Planet;
}

const Card_Planet = ({ data }: CardProps) => {
  return (
    <div className="card_box">
      <h3 className="card_title">{data.name}</h3>
      <div className="card_data_box">
        <strong className="card_strong">Population:</strong>
        <h3 className="card_data">{data.population}</h3>
      </div>
      <div className="card_data_box">
        <strong className="card_strong">Terrain: </strong>
        <h3 className="card_data">{data.terrain}</h3>
      </div>
    </div>
  );
};

export default Card_Planet;
