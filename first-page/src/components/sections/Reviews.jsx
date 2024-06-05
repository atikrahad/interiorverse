// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { A11y, FreeMode, Navigation } from "swiper/modules";
import Sliderbutton1 from "../others/Sliderbutton1";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="max-w-[1358px]  mx-auto my-20 -mr-0">
      <Sliderbutton1 prev={"prev"} next={"next"} />
      <div className="mt-10 overflow-hidden rounded-l-[3rem]">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          freeMode={true}
          modules={[FreeMode, A11y, Navigation]}
          className="mySwiper"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="p-10 min-h-[280px] hover:bg-[#7F1DFF] hover:text-white rounded-[3rem] bg-white space-y-3">
                <div className="flex gap-3">
                  <img
                    className="w-16 h-16 rounded-full"
                    src={item.picture}
                    alt=""
                  />
                  <div className="">
                    <h1 className="text-3xl">{item.name}</h1>
                    <h3 className="text-xl font-bold">{item.designation}</h3>
                  </div>
                </div>
                <p>{item.short_review} </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
