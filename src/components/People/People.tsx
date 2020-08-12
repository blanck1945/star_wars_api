import * as React from "react";
import { People } from "../../types/types";
import Card_People from "../../layouts/Card_People/Card_People";
import { PeopleResult } from "../../types/Interfaces";
import Loader from "react-loader-spinner";
import "./People.scss";

interface PeopleProps {
  data: PeopleResult;
  search: any;
  error: string;
}

const People = ({ data, search, error }: PeopleProps) => {
  console.log(search);
  return (
    <div className="data_box">
      {!data && <Loader type="Rings" color="#FFE300" height={80} width={80} />}
      {error && <h4 className="error">ERROR - Fetching data</h4>}
      {search !== "" &&
        search.map((el: any) => <Card_People key={el.name} data={el} />)}
      {data?.results && search === ""
        ? data.results.map((el: People) => (
            <Card_People key={el.name} data={el} />
          ))
        : null}
    </div>
  );
};

export default People;
