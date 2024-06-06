import Sliderbutton2 from "../others/Sliderbutton2";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { A11y, FreeMode, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import Card from "../others/Card";

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
          <Sliderbutton2 prevCollection={"prev1"} nextCollection={"next1"} />
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
                <Card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Collection;
