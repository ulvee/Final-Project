import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa";
import Lastest1 from "../../../assets/images/lastest-1.png";
import Lastest2 from "../../../assets/images/lastest-2.png";
import Lastest3 from "../../../assets/images/lastest-3.png";
import { Link } from "react-router-dom";

function LastestNew() {
  return (
    <section className="lastest-new-c pb-[150px]">
      <div className="max-w-[1200px] mx-auto max-lg:px-[30px] max-xl:px-[30px]">
        <div className="flex justify-between items-center latest-card-div">
          <div className="flex flex-col items-start gap-[30px] latest-card-new">
            <div className="flex flex-col gap-[20px]">
              <h2 className="text-[36px]">Latest New</h2>
              <p className="text-[gray]">
                Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit,
                sed do eiusmod tempor <br /> incididunt ut
              </p>
            </div>
            <Link to={"/courses"}>
              <button className="uppercase font-[700] py-[12px] px-[35px]">
                View More
              </button>
            </Link>
          </div>
          <div className="flex gap-[30px] w-[70%] latest-card-div max-lg:gap-[10px]">
            {/* card */}
            <div
              className="shadow-lg rounded-[10px] latest-card-1"
              id="lastest-card"
            >
              <img
                className="h-[240] w-[100%] rounded-t-[10px]"
                src={Lastest1}
                alt=""
              />
              <div className="px-[20px] py-[30px] flex flex-col h-[150px] justify-between">
                <div>
                  <p className="font-[700]">
                    Digital technologies in the <br /> classroom
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="flex gap-[7px] items-center">
                    {" "}
                    <BsFillPersonFill className="text-[#84cdf0] text-[18px]" />
                    <span className="text-[gray]">ThimPress</span>
                  </p>
                  <h5 className=" flex items-center gap-[7px]">
                    <FaComment className="text-[#ffa0a0]" />{" "}
                    <span className="text-[gray]">0</span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="shadow-lg rounded-[10px]" id="lastest-card">
              <img
                className="h-[240] w-[100%] rounded-t-[10px]"
                src={Lastest2}
                alt=""
              />
              <div className="px-[20px] py-[30px] flex flex-col h-[150px] justify-between">
                <div>
                  <p className="font-[700]">
                    A solution built for teachers <br /> and students
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="flex gap-[7px] items-center">
                    {" "}
                    <BsFillPersonFill className="text-[#84cdf0] text-[18px]" />
                    <span className="text-[gray]">ThimPress</span>
                  </p>
                  <h5 className=" flex items-center gap-[7px]">
                    <FaComment className="text-[#ffa0a0]" />{" "}
                    <span className="text-[gray]">0</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="shadow-lg rounded-[10px]" id="lastest-card">
              <img
                className="h-[240] w-[100%] rounded-t-[10px]"
                src={Lastest3}
                alt=""
              />
              <div className="px-[20px] py-[30px] flex flex-col h-[150px] justify-between">
                <div>
                  <p className="font-[700]">
                    LearnPress Connect with <br /> other instructors
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="flex gap-[7px] items-center">
                    {" "}
                    <BsFillPersonFill className="text-[#84cdf0] text-[18px]" />
                    <span className="text-[gray]">ThimPress</span>
                  </p>
                  <h5 className=" flex items-center gap-[7px]">
                    <FaComment className="text-[#ffa0a0]" />{" "}
                    <span className="text-[gray]">4</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LastestNew;
