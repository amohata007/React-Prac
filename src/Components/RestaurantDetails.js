import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResCategory from "./ResCategory";

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

  const list =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(list, "list");

  return (
    <div className="text-center">
      <h3 className="font-bold m-2 p-2 text-lg">
        {name} - {costForTwoMessage}
      </h3>
      <h3 className="font-semibold m-1 p-1">
        Famous for - {cuisines.join(" ,")}
      </h3>
      <h3 className="font-semibold">Location - {areaName}</h3>
      {list.map((cat) => (
        <ResCategory data={cat.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantDetails;
