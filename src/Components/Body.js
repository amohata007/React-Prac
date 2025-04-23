import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestuarant, setFilterRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.19810&lng=72.82980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <div className="search-filter">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //Filter Logic
              const filteredData = listOfRestaurant.filter((item) =>
                item?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterRestaurant(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="res-button"
          onClick={() => {
            const filteredItem = listOfRestaurant.filter(
              (item) => item?.info?.avgRating > 4.5
            );

            setFilterRestaurant(filteredItem);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterRestuarant.map((item, index) => {
          return <RestaurantCard key={index} resData={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
