import { IMG_PRE } from "../Utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const cuisines = resData?.info?.cuisines?.slice(0, 3);
  return (
    <div className="p-2 w-72  bg-gray-100 m-2 hover:bg-gray-300 rounded-xl shadow-xl">
      <img
        className="w-72 h-60 rounded-xl"
        src={IMG_PRE + resData?.info?.cloudinaryImageId}
      ></img>

      <h3 className="text-xl font-semibold">{resData?.info?.name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{resData?.info?.avgRating} Stars ⭐</h4>
      <h4>{resData?.info?.costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
