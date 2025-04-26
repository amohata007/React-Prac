import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-200 mx-auto my-2 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList item={data?.itemCards} />}
      </div>
    </div>
  );
};

export default ResCategory;
