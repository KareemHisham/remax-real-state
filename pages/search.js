import { useState } from "react";
import { useRouter } from "next/router";
import { FaFilter } from "react-icons/fa";
import SearchStyle from "../styles/Search.module.css";
import {
  NoProperty,
  Property,
  SearchFilter,
} from "../components/CompContainer";
import { BaseURL, FetchData, options } from "../Data/FetchAPI";

const Search = ({ properties }) => {
  const [searchFilter, setSearchFilter] = useState(false);
  const router = useRouter();
  return (
    <section className={SearchStyle.searchSection}>
      <div className="container">
        <div
          className={`${SearchStyle.searchFilter} text-capitalize text-center py-3`}
          onClick={() => setSearchFilter((prevFilter) => !prevFilter)}
        >
          search property by filter
          <span className="text-muted ms-2">
            <FaFilter />
          </span>
        </div>
        {searchFilter && <SearchFilter />}
        <div className="py-3">
          <div className="head">
            <h5 className="text-capitalize text-muted mb-3">
              properties {router.query.purpose}
            </h5>
          </div>
          <div className="row">
            {properties.map((property) => (
              <Property property={property} key={property.id} />
            ))}
          </div>
        </div>
        {properties.length === 0 && <NoProperty />}
      </div>
    </section>
  );
};

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await FetchData(
    `${BaseURL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`,options
  );

  return {
    props: {
      properties: data.data.hits,
    },
  };
}

export default Search;
