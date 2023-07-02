import React from "react";

function Popular() {
  return (
    <div>
      <div className="py-[100px] bg-[#0693e3] max-md:px-[30px] max-lg:px-[30px] max-xl:px-[30px]">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-[60px]">
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-center text-[white] text-[44px]">
              Popular Courses
            </h2>
            <p className="text-center text-[white]">
              Learn to develop Android and iOS applications and Web Development
              within six weeks from a teacher <br />
              with real-world experience. Get a 75% discount if you buy it here!
            </p>
          </div>
          <div className="flex justify-between max-md:flex-col max-md:items-center max-md:gap-[30px]">
            <div className="w-[23%] flex flex-col rounded-[10px] bg-[white] pb-[20px] gap-[20px] max-md:w-[100%] max-lg:w-[30%]">
              <div className="relative popular-course-img max-md:h-[370px]">
                <img
                  src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/08/pexels-photo-40120-e1500018015404-1-365x405.jpg"
                  alt=""
                  className="w-[100%]"
                />
                <span className="bg-[#006195bd] text-[white] font-bold w-[100px] text-center py-[10px] uppercase absolute bottom-0 left-0">
                  $ 25.00
                </span>
              </div>
              <div className="flex flex-col gap-[20px] pl-[25px]">
                <p className="text-[17px]">Lorem, ipsum dolor.</p>
                <p className="text-[gray]"> August 16, 2022 / 2 Comments </p>
              </div>
            </div>

            <div className="w-[23%] flex flex-col rounded-[10px] bg-[white] pb-[20px] gap-[20px] max-md:w-[100%] max-lg:w-[30%]">
              <div className="relative popular-course-img max-md:h-[370px]">
                <img
                  src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/08/home-1-bg-e1503477367706-365x405.jpg"
                  alt=""
                  className="w-[100%]"
                />
                <span className="bg-[#006195bd] text-[white] font-bold w-[100px] text-center py-[10px] uppercase absolute bottom-0 left-0">
                  free
                </span>
              </div>
              <div className="flex flex-col gap-[20px] pl-[25px]">
                <p className="text-[17px]">Lorem, ipsum dolor.</p>
                <p className="text-[gray]">August 16, 2022 / 2 Comments</p>
              </div>
            </div>

            <div className="w-[23%] flex flex-col rounded-[10px] bg-[white] pb-[20px] gap-[20px] max-md:w-[100%] max-lg:w-[30%]">
              <div className="relative popular-course-img max-md:h-[370px]">
                <img
                  src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/06/layer-9-min-365x405.jpg"
                  alt=""
                  className="w-[100%]"
                />
                <span className="bg-[#006195bd] text-[white] font-bold w-[100px] text-center py-[10px] uppercase absolute bottom-0 left-0">
                  $ 74.00
                </span>
              </div>
              <div className="flex flex-col gap-[20px] pl-[25px]">
                <p className="text-[17px]">Lorem, ipsum dolor.</p>
                <p className="text-[gray]">August 16, 2022 / 2 Comments</p>
              </div>
            </div>

            <div className="w-[23%] flex flex-col rounded-[10px] bg-[white] pb-[20px] gap-[20px] max-md:w-[100%] max-lg:w-[30%] popular-4-card">
              <div className="relative popular-course-img max-md:h-[370px]">
                <img
                  src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/06/shutterstock_184641842-5-e1503472000521-365x405.jpg"
                  alt=""
                  className="w-[100%]"
                />
                <span className="bg-[#006195bd] text-[white] font-bold w-[100px] text-center py-[10px] uppercase absolute bottom-0 left-0">
                  Free
                </span>
              </div>
              <div className="flex flex-col gap-[20px] pl-[25px]">
                <p className="text-[17px]">Lorem, ipsum dolor.</p>
                <p className="text-[gray]">August 16, 2022 / 2 Comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
