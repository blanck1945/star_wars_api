import * as React from "react";
import "./HomeNavbar.scss";
import Planet from "../Planet/Planet";
import HomeBtn from "../home_btn/HomeBtn";
import People from "../People/People";
import Search_Bar from "../search_bar/Search_Bar";
import Axios from "axios";
import { apiCalls } from "../../api/api";
import useSWR from "swr";

interface HomeProps {
  show: boolean;
}

const getData = async (key: string, show: boolean, page: number) => {
  if (show) {
    const { data } = await Axios.get(apiCalls.planetUrl + "/?page=" + page);
    return data;
  } else {
    const { data } = await Axios.get(apiCalls.peopleUrl + "/?page=" + page);
    return data;
  }
};

const HomeNavbar = ({ show }: HomeProps) => {
  const [page, setPage] = React.useState<number>(1);
  const [search, setSearch] = React.useState<string>("");

  const { data, error } = useSWR(["data", show, page], getData);

  const searchData = (value: string) => {
    const query = data;
    const res = query.results.filter((el: any) => el.name.includes(value));
    setSearch(res);
  };

  React.useEffect(() => {
    setPage(1);
    setSearch("");
  }, [show]);

  return (
    <div className="home_nav">
      <h2 className="abs_title">Star Wars App</h2>
      <div className="abs-Box">
        <HomeBtn
          page={page}
          setPage={setPage}
          data={data}
          search={search}
          setSearch={setSearch}
        />
        <Search_Bar searchData={searchData} show={show} />
        {show ? (
          <Planet data={data} search={search} error={error} />
        ) : (
          <People data={data} search={search} error={error} />
        )}
      </div>
    </div>
  );
};

export default HomeNavbar;
