import React from "react";

function SectionTwo() {
  return (
    <section className="py-[150px]" id="home-sec-2">
      <div className="max-w-[1300px] mx-auto px-4 flex justify-between max-lg:flex-col max-lg:w-[100%] max-lg:gap-[50px] max-lg:items-center">
        <div className="custom-card w-[100%] max-lg:w-[70%] flex gap-[30px] mb-6 max-lg:mb-0">
          <div className="flex items-center justify-center bg-[#84cdf0] w-[150px] h-[90px] py-[10px] px-[25px] rounded-[50%] mt-[5px]">
            <img
              className="w-[130px] h-[40px]"
              src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/icon.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <h3 className="text-[20px]">Learn From The Experts</h3>
            <p className="text-[gray]">
              Lorem ipsum dolor amet elit, sed do eiusmod tempor incididunt
              doincididunt lorem adipisicing eiusmod ipsum.
            </p>
          </div>
        </div>

        <div className="custom-card w-[100%] max-lg:w-[70%] flex gap-[30px] mb-6 max-lg:mb-0">
          <div className="flex items-center justify-center bg-[#ffa0a0] w-[150px] h-[90px] py-[10px] px-[25px] rounded-[50%] mt-[5px]">
            <img
              className="w-[130px] h-[30px]"
              src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/icon-2.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <h3 className="text-[20px]">Learn From The Experts</h3>
            <p className="text-[gray]">
              Lorem ipsum dolor amet elit, sed do eiusmod tempor incididunt
              doincididunt lorem adipisicing eiusmod ipsum.
            </p>
          </div>
        </div>

        <div className="custom-card w-[100%] max-lg:w-[70%] flex gap-[30px]">
          <div className="flex items-center justify-center bg-[#79d9c7] w-[150px] h-[90px] py-[10px] px-[25px] rounded-[50%] mt-[5px]">
            <img
              className="w-[130px] h-[40px]"
              src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/icon-3.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <h3 className="text-[20px]">Learn From The Experts</h3>
            <p className="text-[gray]">
              Lorem ipsum dolor amet elit, sed do eiusmod tempor incididunt
              doincididunt lorem adipisicing eiusmod ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
