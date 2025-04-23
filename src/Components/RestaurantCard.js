import { IMG_PRE } from "../Utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={IMG_PRE + resData?.info?.cloudinaryImageId}
      ></img>

      <h3>{resData?.info?.name}</h3>
      <h4>{resData?.info?.cuisines.join(", ")}</h4>
      <h4>{resData?.info?.avgRating} Stars ⭐</h4>
      <h4>{resData?.info?.costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
