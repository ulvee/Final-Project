import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Collections() {
  return (
    <div className="about-page-main">
       <Helmet>
        <title>Collections</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <div className="pages-main-bck flex justify-center items-center py-[130px] max-md:flex-col max-md:gap-[50px]">
        <h2 className="uppercase text-[white] font-[600] text-[60px] tracking-[5px] pr-[50px] max-md:pr-0">
          Collections
        </h2>
        <div className="pl-[50px] text-white max-md:pl-0 max-md:text-center">
          {" "}
          <p>THE BEST DEMO EDUCATION</p>
          <span>It is a long established fact that a reade.</span>
        </div>
      </div>
      <div className="py-[100px] flex flex-wrap gap-[50px] max-w-[1000px] w-[100%] mx-auto max-lg:px-[50px] max-lg:justify-center max-md:w-[100%]">
        <div className="bg-[#eec387] pt-[30px] w-[30%] h-[220px] flex flex-col gap-[30px] rounded-[10px] shadow-xl cursor-pointer collections-items max-md:w-[100%]">
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
              className="px-[25px] pb-[10px] w-[140px] h-[100px]"
              src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/collection-2.png"
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#79d9c7] pt-[30px] flex flex-col w-[30%] h-[220px] gap-[30px] rounded-[10px] shadow-xl cursor-pointer collections-items max-md:w-[100%]">
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
              className="px-[25px] pb-[10px] w-[140px] h-[100px]"
              src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/collection-1.png"
              alt=""
            />
          </div>
        </div>

        <div className="bg-[#ffa0a0] pt-[30px] flex flex-col w-[30%] h-[220px] gap-[30px] rounded-[10px] shadow-xl cursor-pointer collections-items max-md:w-[100%]">
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
              className="px-[25px] pb-[10px] w-[140px] h-[100px]"
              src="	https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/collection-4.png"
              alt=""
            />
          </div>
        </div>

        <div className="bg-[#84cdf0] pt-[30px] flex flex-col w-[30%] h-[220px] gap-[30px] rounded-[10px] shadow-xl cursor-pointer collections-items max-md:w-[100%]">
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
              className="px-[25px] pb-[10px] w-[140px] h-[100px]"
              src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/collection-1.png"
              alt=""
            />
          </div>
        </div>

        <div className="bg-[#eec387] pt-[30px] flex flex-col w-[30%] h-[220px] gap-[30px] rounded-[10px] shadow-xl cursor-pointer collections-items max-md:w-[100%]">
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
              className="px-[25px] pb-[10px] w-[140px] h-[100px]"
              src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/collection-1.png"
              alt=""
            />
          </div>
        </div>

        <div className="bg-[#79d9c7] pt-[30px] flex flex-col w-[30%] h-[220px] gap-[30px] rounded-[10px] shadow-xl cursor-pointer collections-items max-md:w-[100%]">
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
              className="px-[25px] pb-[10px] w-[140px] h-[100px]"
              src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/collection-2.png"
              alt=""
            />
          </div>
        </div>

        <div className="bg-[#ffa0a0] pt-[30px] flex flex-col w-[30%] h-[220px] gap-[30px] rounded-[10px] shadow-xl cursor-pointer collections-items max-md:w-[100%]">
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
              className="px-[25px] pb-[10px] w-[140px] h-[100px]"
              src="	https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/collection-3.png"
              alt=""
            />
          </div>
        </div>

        <div className="bg-[#84cdf0] pt-[30px] flex flex-col w-[30%] h-[220px] gap-[30px] rounded-[10px] shadow-xl cursor-pointer collections-items max-md:w-[100%]">
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
              className="px-[25px] pb-[10px] w-[140px] h-[100px]"
              src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/collection-4.png"
              alt=""
            />
          </div>
        </div>

        <div className="bg-[#eec387] pt-[30px] flex flex-col w-[30%] h-[220px] gap-[30px] rounded-[10px] shadow-xl cursor-pointer collections-items max-md:w-[100%]">
          <div className="px-[25px]">
            <Link to={"/courses/category/technology"}>
              <h2 className="text-[white] uppercase text-[20px] font-medium">
                Technology
              </h2>
            </Link>
            <p className="text-[white]">8 courses</p>
          </div>
          <div id="swiper-card-bck" className="flex justify-end ">
            <img
              className="px-[25px] pb-[10px] w-[140px] h-[100px]"
              src="	https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/collection-4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
