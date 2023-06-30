import React from "react";
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <div className="getstarted-bck pt-[100px] max-md:pt-[50px] max-md:pb-[50px] max-lg:pt-[50px] max-lg:px-[30px]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between max-lg:items-end max-lg:justify-center max-lg:gap-[30px]">
        <div className="w-[35%] get-start-image max-lg:w-[50%]">
          <img
            src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/07/group-2.png"
            alt=""
            className="w-[100%] relative"
          />
        </div>
        <div className="text-white relative flex flex-col items-start gap-[40px] max-md:items-center max-lg:pb-[50px]">
          <div className="flex flex-col items-start gap-[30px] max-md:items-center">
            <p>TRUSTED BY OVER 6000+ STUDENTS</p>
            <p className="text-[33px] font-[500] max-md:text-center">
              Join our community of students around the <br /> world helping you
              succeed.
            </p>
          </div>
          <Link to={"/register"}>
            <button className="bg-[#60d3c6] py-[10px] px-[25px] font-[700] uppercase">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
