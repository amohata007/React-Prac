import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
      <div className="flex">
        <div className="p-2 m-2">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="mx-2 bg-green-200 px-4"
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
          className="m-4 bg-blue-200 px-4 rounded-lg"
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
      <div className="flex flex-wrap">
        {filterRestuarant.map((item) => (
          <Link key={item?.info?.id} to={"/restaurant/" + item?.info?.id}>
            <RestaurantCard resData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
