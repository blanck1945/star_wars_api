import * as React from "react";
import "./Search_Bar.scss";

interface SearchProps {
  searchData: Function;
  show: boolean;
}

const Search_Bar = ({ searchData, show }: SearchProps) => {
  const [searchValue, setSearchValue] = React.useState<string>("");

  React.useEffect(() => {
    setSearchValue("");
  }, [show]);

  const handlerChange = (value: string) => {
    setSearchValue(value);
    searchData(value);
  };

  return (
    <div className="search_box">
      <input
        type="search"
        className="search_inp"
        value={searchValue}
        placeholder="Search.."
        onChange={(e) => handlerChange(e.target.value)}
      />
    </div>
  );
};

export default Search_Bar;
