import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const [resInfo, setResInfo] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.19810&lng=72.82980&restaurantId=" +
        id
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, areaName, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards
      ?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
        (c) => c?.card?.card?.itemCards || []
      ) || [];

  return (
    <div className="res-details">
      <h3>{name}</h3>
      <h4>{costForTwoMessage}</h4>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>Menu Items:</h4>
      <ul>
        {itemCards.map((item, index) => (
          <li key={`${item.card.info.id}-${index}`}>
            {item.card.info.name} - ₹
            {(item.card.info.defaultPrice / 100) | (item.card.info.price / 100)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantDetails;
