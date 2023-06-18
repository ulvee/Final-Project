import React from "react";
import { A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function SliderEffect() {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="flex items-center justify-center py-[40px]">
            <div className="flex flex-col gap-[30px] text-[black]">
              <p className="italic text-[25px]">
                I'm a Copywriter in a Digital Agency, I <br /> was searching for
                courses that'll help me <br /> broaden my skill set. Before
                signing up for <br /> Rob's course I tried many web development{" "}
                <br /> courses, but no course comes <br /> close to this course.
              </p>
              <div className="flex gap-[10px] uppercase text-[17px] font-[500]">
                <h2 className="text-[#60d3c6]">Jenny Kate,</h2>{" "}
                <p>Associate Marketing</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center py-[40px]">
            <div className="flex flex-col gap-[30px] text-[black]">
              <p className="italic text-[25px]">
                I'm a Copywriter in a Digital Agency, I <br /> was searching for
                courses that'll help me <br /> broaden my skill set. Before
                signing up for <br /> Rob's course I tried many web development{" "}
                <br /> courses, but no course comes <br /> close to this course.
              </p>
              <div className="flex gap-[10px] uppercase text-[17px] font-[500]">
                <h2 className="text-[#60d3c6]">Jenny Kate,</h2>{" "}
                <p>Associate Marketing</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center py-[40px]">
            <div className="flex flex-col gap-[30px] text-[black]">
              <p className="italic text-[25px]">
                I'm a Copywriter in a Digital Agency, I <br /> was searching for
                courses that'll help me <br /> broaden my skill set. Before
                signing up for <br /> Rob's course I tried many web development{" "}
                <br /> courses, but no course comes <br /> close to this course.
              </p>
              <div className="flex gap-[10px] uppercase text-[17px] font-[500]">
                <h2 className="text-[#60d3c6]">Jenny Kate,</h2>{" "}
                <p>Associate Marketing</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderEffect;
