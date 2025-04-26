import { IMG_PRE } from "../Utils/Constants";

const ItemList = ({ item }) => {
  // const {name} = item?.card?.info
  return (
    <div>
      {item.map((it) => (
        <div
          key={it?.card?.id}
          className="p-2 m-2  border-gray-300 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div className="font-bold ">
              <span>{it?.card?.info?.name} - </span>
              <span>Rs.{it?.card?.info?.price / 100}</span>
            </div>
            <p className="text-xs">{it?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-2 flex justify-center items-center">
            <img
              className="w-full h-auto rounded-lg object-cover max-h-24"
              src={IMG_PRE + it?.card?.info?.imageId}
              alt={it?.card?.info?.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
