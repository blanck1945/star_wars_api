import * as React from "react";
import Card_Planet from "../../layouts/Card/Card";
import { Planet, People } from "../../types/types";
import Loader from "react-loader-spinner";
import "./Planet.scss";
import { PlanetResults } from "../../types/Interfaces";

interface PlanetProps {
  data: PlanetResults;
  search: any;
  error: string;
}

const Planet = ({ data, search, error }: PlanetProps) => {
  return (
    <div className="data_box">
      {!data && <Loader type="Rings" color="#FFE300" height={80} width={80} />}
      {error && <h4 className="error">ERROR - Fetching Data</h4>}
      {search !== "" &&
        search.map((el: any) => <Card_Planet key={el.name} data={el} />)}
      {data?.results && search === ""
        ? data.results.map((el: any) => <Card_Planet key={el.name} data={el} />)
        : null}
    </div>
  );
};

export default Planet;
