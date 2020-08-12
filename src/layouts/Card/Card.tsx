import * as React from "react";
import { Planet, People } from "../../types/types";
import "./Card.scss";

interface CardProps {
  data: Planet;
}

const Card_Planet = ({ data }: CardProps) => {
  const terrainIt = data.terrain.split(" ");

  return (
    <div className="card_box">
      <h3 className="card_title">{data.name}</h3>
      <div className="card_data_box">
        <strong className="card_strong strong_popu">Population:</strong>
        <h3 className="card_data popu">{data.population}</h3>
      </div>
      <div className="card_data_box">
        <strong className="card_strong">Terrain: </strong>
        <div className="card_planet_data">
          {terrainIt.map((el: string) => (
            <h3 className="card_data">{el}</h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card_Planet;
