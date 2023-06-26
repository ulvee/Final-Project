import React from "react";

function GetStarted() {
  return (
    <div className="getstarted-bck pt-[100px]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="w-[35%]">
          <img
            src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/07/group-2.png"
            alt=""
            className="w-[100%] relative"
          />
        </div>
        <div className="text-white relative flex flex-col items-start gap-[40px]">
          <div className="flex flex-col items-start gap-[30px]">
            <p>TRUSTED BY OVER 6000+ STUDENTS</p>
            <p className="text-[33px] font-[500]">
              Join our community of students around the <br /> world helping you
              succeed.
            </p>
          </div>
          <button className="bg-[#60d3c6] py-[10px] px-[25px] font-[700] uppercase">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
