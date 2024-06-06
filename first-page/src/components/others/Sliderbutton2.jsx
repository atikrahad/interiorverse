/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { useSwiper } from "swiper/react";

const Sliderbutton2 = ({prevCollection, nextCollection}) => {
  const swiper = useSwiper();
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-end">
        <div className="pr-10 pl-3 prev1 text-[#7F1DFF] flex items-center justify-start rounded-full py-2 bg-white">
          <button onClick={() => swiper.slidePrev()}>
            <MdArrowBack className="text-2xl  " />
          </button>
        </div>
        <div className="px-4 -ml-8 next1 text-white flex items-center rounded-full py-2 bg-[#7F1DFF]">
          <button onClick={() => swiper.slidePrev()}>
            <MdArrowForward className="text-2xl  " />
          </button>
        </div>
      </div>
      <h1 className="text-7xl text-white leading-[100px] font-semibold">Explore Collection</h1>
      <p className="text-[#E6E6E6] leading-8">
        Discover the <span className="font-extrabold">future</span> of interior
        design and architectural visualization with interiorVerse. Explore our
        showcase models,{" "}
        <span className="font-extrabold">
          experience the cutting-edge technology,
        </span>{" "}
        and see for yourself how VR can{" "}
        <span className="font-extrabold">transform your design</span> process.
      </p>
    </div>
  );
};

export default Sliderbutton2;
