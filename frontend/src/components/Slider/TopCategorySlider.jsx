import React from "react";
import { A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

function TopCategorySlider() {
  return (
    <div>
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="bg-[#eec387] pt-[30px] flex flex-col gap-[30px] rounded-[10px]">
            <div className="px-[25px]">
              <Link to={"/courses/category/photography"}>
                <h2 className="text-[white] uppercase text-[20px] font-medium">
                  Photography
                </h2>
              </Link>
              <p className="text-[white]">9 courses</p>
            </div>
            <div id="swiper-card-bck" className="flex justify-end ">
              <img
                className="px-[25px] pb-[10px] w-[140px] h-[90px]"
                src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/collection-2.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#79d9c7] pt-[30px] flex flex-col gap-[30px] rounded-[10px]">
            <div className="px-[25px]">
              <Link to={"/courses/category/marketing"}>
                <h2 className="text-[white] uppercase text-[20px] font-medium">
                  Marketing
                </h2>
              </Link>
              <p className="text-[white]">10 courses</p>
            </div>
            <div id="swiper-card-bck" className="flex justify-end ">
              <img
                className="px-[25px] pb-[10px] w-[140px] h-[90px]"
                src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/collection-1.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ffa0a0] pt-[30px] flex flex-col gap-[30px] rounded-[10px]">
            <div className="px-[25px]">
              <Link to={"/courses/category/webdevelopment"}>
                <h2 className="text-[white] uppercase text-[20px] font-medium">
                  Web-Development
                </h2>
              </Link>
              <p className="text-[white]">8 courses</p>
            </div>
            <div id="swiper-card-bck" className="flex justify-end ">
              <img
                className="px-[25px] pb-[10px] w-[140px] h-[90px]"
                src="	https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/collection-4.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#84cdf0] pt-[30px] flex flex-col gap-[30px] rounded-[10px]">
            <div className="px-[25px]">
              <Link to={"/courses/category/introductory"}>
                <h2 className="text-[white] uppercase text-[20px] font-medium">
                  Introductory
                </h2>
              </Link>
              <p className="text-[white]">2 courses</p>
            </div>
            <div id="swiper-card-bck" className="flex justify-end ">
              <img
                className="px-[25px] pb-[10px] w-[140px] h-[90px]"
                src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/collection-1.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#eec387] pt-[30px] flex flex-col gap-[30px] rounded-[10px]">
            <div className="px-[25px]">
              <Link to={"/courses/category/language"}>
                <h2 className="text-[white] uppercase text-[20px] font-medium">
                  Language
                </h2>
              </Link>
              <p className="text-[white]">2 courses</p>
            </div>
            <div id="swiper-card-bck" className="flex justify-end ">
              <img
                className="px-[25px] pb-[10px] w-[140px] h-[90px]"
                src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/collection-1.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#79d9c7] pt-[30px] flex flex-col gap-[30px] rounded-[10px]">
            <div className="px-[25px]">
              <Link to={"/courses/category/business"}>
                <h2 className="text-[white] uppercase text-[20px] font-medium">
                  Business
                </h2>
              </Link>
              <p className="text-[white]">14 courses</p>
            </div>
            <div id="swiper-card-bck" className="flex justify-end ">
              <img
                className="px-[25px] pb-[10px] w-[140px] h-[90px]"
                src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/collection-2.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ffa0a0] pt-[30px] flex flex-col gap-[30px] rounded-[10px]">
            <div className="px-[25px]">
              <Link to={"/courses/category/design"}>
                <h2 className="text-[white] uppercase text-[20px] font-medium">
                  Design
                </h2>
              </Link>
              <p className="text-[white]">8 courses</p>
            </div>
            <div id="swiper-card-bck" className="flex justify-end ">
              <img
                className="px-[25px] pb-[10px] w-[140px] h-[90px]"
                src="	https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/collection-3.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#84cdf0] pt-[30px] flex flex-col gap-[30px] rounded-[10px]">
            <div className="px-[25px]">
              <Link to={"/courses/category/music"}>
                <h2 className="text-[white] uppercase text-[20px] font-medium">
                  Music
                </h2>
              </Link>
              <p className="text-[white]">2 courses</p>
            </div>
            <div id="swiper-card-bck" className="flex justify-end ">
              <img
                className="px-[25px] pb-[10px] w-[140px] h-[90px]"
                src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/collection-4.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#eec387] pt-[30px] flex flex-col gap-[30px] rounded-[10px]">
            <div className="px-[25px]">
              <Link to={"/courses/category/technology"}>
                <h2 className="text-[white] uppercase text-[20px] font-medium">
                  Technology
                </h2>
              </Link>
              <p className="text-[white]">2 courses</p>
            </div>
            <div id="swiper-card-bck" className="flex justify-end ">
              <img
                className="px-[25px] pb-[10px] w-[140px] h-[90px]"
                src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/collection-1.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TopCategorySlider;
