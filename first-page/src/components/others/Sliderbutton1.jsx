/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSwiper } from "swiper/react";
import { MdArrowBack,MdArrowForward  } from "react-icons/md";

const Sliderbutton1 = ({ prev, next }) => {
  const swiper = useSwiper();
  return (
    <div className="max-w-[1270px] ">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#EAEAEA] text-4xl font-bold">
            What Our Client Said about us
          </h1>
          <p className="text-[#EAEAEA]">
            Find Out how the response So far has been:
          </p>
        </div>
        <div className="flex gap-2 swiper-nav-btns">
          <div className="py-2 flex items-center prev px-3 bg-white hover:bg-[#7F1DFF] hover:text-white text-[#7F1DFF] rounded-xl">
            <button onClick={() => swiper.slidePrev()}><MdArrowBack className="text-2xl  "/></button>
          </div>
          <div className="py-2 flex items-center next px-3 bg-white hover:bg-[#7F1DFF] hover:text-white text-[#7F1DFF] rounded-xl">
            <button onClick={() => swiper.slidePrev()}><MdArrowForward  className="text-2xl  "/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sliderbutton1;
