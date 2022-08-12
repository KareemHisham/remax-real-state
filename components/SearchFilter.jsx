import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { filterData, getFilterValues } from "../Data/filterData";
import SearchStyle from "../styles/Search.module.css";
const SearchFilter = () => {
  const [filter, setFilter] = useState(filterData),
    router = useRouter(),
    { query } = router;

  const searchProperties = (filteredValue) => {
    const values = getFilterValues(filteredValue),
      { pathname } = router;
    values.forEach((item) => {
      query[item.name] = item.value;
    });
    router.push({ pathname, query });
  };
  return (
    <div className={`${SearchStyle.searchFilterSec} py-3`}>
      {filter.map((filterItem) => {
        console.log(filterItem);
        return (
          <select
            className="form-select"
            placeholder={filterItem.placeholder}
            key={filterItem.queryName}
            style={{
              flexBasis: "20%",
              marginRight: "5px",
              marginBottom: "10px",
            }}
            onChange={(e) =>
              searchProperties({ [filterItem.queryName]: e.target.value })
            }
          >
            {filterItem.items.map((item) => {
              return (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              );
            })}
          </select>
        );
      })}
    </div>
  );
};

export default SearchFilter;
