import React from "react";
import { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SlidePhoto1 from "../../assets/images/testimonial-01.png";
import SlidePhoto2 from "../../assets/images/testimonial-02.png";
import SlidePhoto3 from "../../assets/images/testimonial-03.png";
import { BsFillStarFill } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function ClientFeedbackSlider() {
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
          <div className="flex flex-col items-center gap-[25px] max-md:px-[100px] max-lg:px-[60px]">
            <div className="w-[100px] h-[100px] rounded-[50%] flex justify-center">
              <img
                src={SlidePhoto1}
                alt=""
                className="w-[100%] rounded-[50%]"
              />
            </div>
            <div className="flex flex-col gap-[40px]">
              <p className="text-center text-[gray] text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis <br /> nostrud exercitation ullamco laboris nisi ut
                aliquip ut labore et dolore.{" "}
              </p>
              <div className="flex flex-col items-center gap-[20px]">
                <div className="flex items-center justify-center gap-[5px]">
                  <p className="text-[17px] font-[700]">Lydisata</p>-
                  <span className="italic text-[gray]"> Web Developer</span>
                </div>
                <div className="flex gap-[5px]">
                  <BsFillStarFill className="text-[yellow] text-[17px]" />
                  <BsFillStarFill className="text-[yellow] text-[17px]" />
                  <BsFillStarFill className="text-[yellow] text-[17px]" />
                  <BsFillStarFill className="text-[yellow] text-[17px]" />
                  <BsFillStarFill className="text-[yellow] text-[17px]" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-[25px] max-md:px-[100px] max-lg:px-[60px]">
            <div className="w-[100px] h-[100px] rounded-[50%] flex justify-center">
              <img
                src={SlidePhoto2}
                alt=""
                className="w-[100%] rounded-[50%]"
              />
            </div>
            <div className="flex flex-col gap-[40px]">
              <p className="text-center text-[gray] text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis <br /> nostrud exercitation ullamco laboris nisi ut
                aliquip ut labore et dolore.{" "}
              </p>
              <div className="flex flex-col items-center gap-[20px]">
                <div className="flex items-center justify-center gap-[5px]">
                  <p className="text-[17px] font-[700]">Albert</p>-
                  <span className="italic text-[gray]"> Web Developer</span>
                </div>
                <div className="flex gap-[5px]">
                  <BsFillStarFill className="text-[yellow] text-[17px]" />
                  <BsFillStarFill className="text-[yellow] text-[17px]" />
                  <BsFillStarFill className="text-[yellow] text-[17px]" />
                  <BsFillStarFill className="text-[yellow] text-[17px]" />
                  <BsFillStarFill className="text-[yellow] text-[17px]" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-[25px] max-md:px-[100px] max-lg:px-[60px]">
            <div className="w-[100px] h-[100px] rounded-[50%] flex justify-center">
              <img
                src={SlidePhoto3}
                alt=""
                className="w-[100%] rounded-[50%]"
              />
            </div>
            <div className="flex flex-col gap-[40px]">
              <p className="text-center text-[gray] text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis <br /> nostrud exercitation ullamco laboris nisi ut
                aliquip ut labore et dolore.{" "}
              </p>
              <div className="flex flex-col items-center gap-[20px]">
                <div className="flex items-center justify-center gap-[5px]">
                  <p className="text-[17px] font-[700]">Ken</p>-
                  <span className="italic text-[gray]"> Web Developer</span>
                </div>
                <div className="flex gap-[5px]">
                  <BsFillStarFill className="text-[yellow] text-[17px]" />
                  <BsFillStarFill className="text-[yellow] text-[17px]" />
                  <BsFillStarFill className="text-[yellow] text-[17px]" />
                  <BsFillStarFill className="text-[yellow] text-[17px]" />
                  <BsFillStarFill className="text-[yellow] text-[17px]" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ClientFeedbackSlider;
