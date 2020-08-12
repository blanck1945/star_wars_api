import * as React from "react";
import { PlanetResults, PeopleResult } from "../../types/Interfaces";
import { plus, minus } from "../../types/Interfaces";
import "./HomeBtn.scss";

interface HomeBtnProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  data: PlanetResults | PeopleResult;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: any;
}

const HomeBtn = ({ page, setPage, data, setSearch, search }: HomeBtnProps) => {
  const changePage = (page: number, operation: string) => {
    if (page !== 1 && operation === "minus") {
      setPage(page - 1);
    }

    if (data.next && operation === "plus") {
      setPage(page + 1);
    }

    if (search !== "") {
      setSearch("");
    }
  };

  return (
    <div className="btn_box">
      <button className="btn_page" onClick={() => changePage(page, minus)}>
        Previous
      </button>
      <div className="btn_page">{page}</div>
      <button className="btn_page" onClick={() => changePage(page, plus)}>
        Next
      </button>
    </div>
  );
};

export default HomeBtn;
