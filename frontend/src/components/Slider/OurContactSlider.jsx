import React from "react";
import { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function OurContactSlider() {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="flex flex-col items-center gap-[25px]">
            <div className="w-[150px] h-[150px] rounded-[50%] flex justify-center">
              <img
                src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/06/blog-9-130x130.jpg"
                alt=""
                className="w-[100%] rounded-[50%] border-[3px] border-white"
              />
            </div>
            <div className="flex flex-col gap-[40px] text-[white]">
              <h2 className="text-center text-[40px]">
                Cristian Web Developer
              </h2>
              <p className="text-center italic text-[18px]">
                Pellentesque venenatis, libero vel euismod lobortis, mi metus
                luctus augue, eget dapibus elit nisi eu <br /> massa. Phasellus
                sollicitudin nisl posuere nibh ultricies, et fringilla dui
                gravida. Donec iaculis <br /> adipiscing neque, non congue massa
                euismod quis. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-[25px]">
            <div className="w-[150px] h-[150px] rounded-[50%] flex justify-center">
              <img
                src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/07/1-e1503473231691-130x130.jpg"
                alt=""
                className="w-[100%] rounded-[50%] border-[3px] border-white"
              />
            </div>
            <div className="flex flex-col gap-[40px] text-[white]">
              <h2 className="text-center text-[40px]">
                Cristian Web Developer
              </h2>
              <p className="text-center italic text-[18px]">
                Pellentesque venenatis, libero vel euismod lobortis, mi metus
                luctus augue, eget dapibus elit nisi eu <br /> massa. Phasellus
                sollicitudin nisl posuere nibh ultricies, et fringilla dui
                gravida. Donec iaculis <br /> adipiscing neque, non congue massa
                euismod quis. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-[25px]">
            <div className="w-[150px] h-[150px] rounded-[50%] flex justify-center">
              <img
                src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/06/layer-9-min-130x130.jpg"
                alt=""
                className="w-[100%] rounded-[50%] border-[3px] border-white"
              />
            </div>
            <div className="flex flex-col gap-[40px] text-[white]">
              <h2 className="text-center text-[40px]">
                Cristian Web Developer
              </h2>
              <p className="text-center text-[18px] italic">
                Pellentesque venenatis, libero vel euismod lobortis, mi metus
                luctus augue, eget dapibus elit nisi eu <br /> massa. Phasellus
                sollicitudin nisl posuere nibh ultricies, et fringilla dui
                gravida. Donec iaculis <br /> adipiscing neque, non congue massa
                euismod quis. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default OurContactSlider;
