/* eslint-disable react/prop-types */
import { HiDotsVertical } from "react-icons/hi";

const Cardsgrid = ({ item }) => {
  return (
    <div className="bg-black rounded-[.5rem]">
      <img
        className="w-full border-black border-[10px] rounded-[.5rem]"
        src={item?.thumbnail}
        alt=""
      />
      
      <div className="px-3 pt-2 items-baseline justify-between flex">
        <h1 className="text-[white] h-[40%] font-bold text-xl">
          {item?.video_title}
        </h1>
        <p>
          <HiDotsVertical className="text-white" />
        </p>
      </div>
      <div className="flex px-3 pb-3 items-center gap-3 text-white">
        <p>No views</p>
        <p>7 days ago</p>
      </div>
    </div>
  );
};

export default Cardsgrid;
