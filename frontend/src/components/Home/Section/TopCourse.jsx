import React from "react";
import { BsFillStarFill } from "react-icons/bs";

function TopCourse() {
  return (
    <section className="py-[150px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-[50px] justify-center items-center">
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-center text-[36px]">Our Top Course</h2>
            <p className="text-center text-[gray]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,do
              eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-wrap w-[100%] justify-between">
            {/* Card1 */}
            <div
              className="shadow-lg rounded-[10px] w-[28%] relative"
              id="topcourse-card"
            >
              <img
                className="h-[240] w-[100%] rounded-t-[10px]"
                src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/08/pexels-photo-40120-e1500018015404-1-342x252.jpg"
                alt=""
              />
              <span className="bg-[#84cdf0] py-[8px] px-[25px] text-[white] uppercase font-[700] rounded-[5px] absolute top-[10px] right-[-20px]">
                Business
              </span>
              <div
                className="px-[20px] py-[30px] flex flex-col h-[170px] justify-between"
                id="topcourse-c-cont"
              >
                <div>
                  <p className="font-[700]">
                    LearnPress Master Web Design in <br /> Photoshop
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="flex gap-[7px] items-center">
                    {" "}
                    <BsFillStarFill className="text-[yellow] text-[17px]" />{" "}
                    <span className="text-[gray]">0 Star (0 vote)</span>
                  </p>
                  <h5 className="text-[#84cdf0] bg-[#f5f5f5] rounded-[5px] py-[3px] px-[15px] font-[700]">
                    Free
                  </h5>
                </div>
              </div>
            </div>

            {/* Card2 */}
            <div
              className="shadow-lg rounded-[10px] w-[28%] relative"
              id="topcourse-card"
            >
              <img
                className="h-[240] w-[100%] rounded-t-[10px]"
                src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/08/pexels-photo-40120-e1500018015404-1-342x252.jpg"
                alt=""
              />
              <span className="bg-[#84cdf0] py-[8px] px-[25px] text-[white] uppercase font-[700] rounded-[5px] absolute top-[10px] right-[-20px]">
                Business
              </span>
              <div
                className="px-[20px] py-[30px] flex flex-col h-[170px] justify-between"
                id="topcourse-c-cont"
              >
                <div>
                  <p className="font-[700]">
                    LearnPress Master Web Design in <br /> Photoshop
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="flex gap-[7px] items-center">
                    {" "}
                    <BsFillStarFill className="text-[yellow] text-[17px]" />{" "}
                    <span className="text-[gray]">0 Star (0 vote)</span>
                  </p>
                  <h5 className="text-[#84cdf0] bg-[#f5f5f5] rounded-[5px] py-[3px] px-[15px] font-[700]">
                    Free
                  </h5>
                </div>
              </div>
            </div>

            {/* Card3 */}
            <div
              className="shadow-lg rounded-[10px] w-[28%] relative"
              id="topcourse-card"
            >
              <img
                className="h-[240] w-[100%] rounded-t-[10px]"
                src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/08/pexels-photo-40120-e1500018015404-1-342x252.jpg"
                alt=""
              />
              <span className="bg-[#84cdf0] py-[8px] px-[25px] text-[white] uppercase font-[700] rounded-[5px] absolute top-[10px] right-[-20px]">
                Business
              </span>
              <div
                className="px-[20px] py-[30px] flex flex-col h-[170px] justify-between"
                id="topcourse-c-cont"
              >
                <div>
                  <p className="font-[700]">
                    LearnPress Master Web Design in <br /> Photoshop
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="flex gap-[7px] items-center">
                    {" "}
                    <BsFillStarFill className="text-[yellow] text-[17px]" />{" "}
                    <span className="text-[gray]">0 Star (0 vote)</span>
                  </p>
                  <h5 className="text-[#84cdf0] bg-[#f5f5f5] rounded-[5px] py-[3px] px-[15px] font-[700]">
                    Free
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <button
            className="py-[10px] px-[30px] uppercase font-[700]"
            id="buy-course"
          >
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}

export default TopCourse;
