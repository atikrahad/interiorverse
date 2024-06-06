import Sliderbutton2 from "../others/Sliderbutton2";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { A11y, FreeMode, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Collection = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    fetch("videos.json")
      .then((res) => res.json())
      .then((data) => setCollection(data));
  }, []);

  return (
    <div className="max-w-[1358px]  mx-auto my-20 -mr-0">
      <div className="flex items-center gap-5 justify-between">
        <div className="w-[35%]">
          <Sliderbutton2 prevCollection={"prev1"} nextCollection={"next1"}/>
        </div>
        <div className="w-[65%] rounded-l-[2rem] overflow-hidden">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            navigation={{
              prevEl: ".prev1",
              nextEl: ".next1",
            }}
            freeMode={true}
            modules={[FreeMode, A11y, Navigation]}
            className="mySwiper"
          >
            {collection.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative flex flex-col min-h-[538.61px] rounded-[2rem] bg-[#B0A3B7] space-y-3">
                  <img
                    className="w-full border-black border-[16px] rounded-3xl"
                    src={item.thumbnail}
                    alt=""
                  />
                  <div className="bg-[#00000071] py-1 px-2 rounded-lg right-6 top-[187px] absolute ">
                    <p className="text-white">{item.duration}</p>
                  </div>
                  <div className="p-5 h-[250px] overflow-hidden flex flex-col space-y-5">
                    <h1 className="text-[#340253] h-[40%] font-bold text-3xl">
                      {item.video_title}
                    </h1>
                    <p className="text-[#340253] text-justify h-[60%]">
                      {item.short_description}{" "}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Collection;
