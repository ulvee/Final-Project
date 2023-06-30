import React from "react";
import TopCategorySlider from "../../Slider/TopCategorySlider";

function TopCategories() {
  return (
    <section id="top-category" className="h-[100%] py-[150px]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col gap-[50px] justify-center h-[100%]">
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-[42px] font-medium">Top Categories</h2>
            <p className="text-[16px] text-[gray]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <TopCategorySlider />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopCategories;
