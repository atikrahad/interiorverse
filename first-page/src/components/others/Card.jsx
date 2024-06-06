/* eslint-disable react/prop-types */
const Card = ({item}) => {
  return (
    <div className="relative flex flex-col min-h-[538.61px] rounded-[2rem] bg-[#B0A3B7] space-y-3">
      <img
        className="w-full border-black border-[16px] rounded-3xl"
        src={item?.thumbnail}
        alt=""
      />
      <div className="bg-[#00000071] py-1 px-2 rounded-lg right-6 top-[187px] absolute ">
        <p className="text-white">{item?.duration}</p>
      </div>
      <div className="p-5 h-[250px] overflow-hidden flex flex-col space-y-5">
        <h1 className="text-[#340253] h-[40%] font-bold text-3xl">
          {item?.video_title}
        </h1>
        <p className="text-[#340253] text-justify h-[60%]">
          {item?.short_description}{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;
