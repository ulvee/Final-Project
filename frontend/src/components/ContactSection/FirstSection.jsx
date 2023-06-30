import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

function FirstSection() {
  return (
    <div className="py-[100px] bg-[#2174ff]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between max-md:flex-col max-md:items-center max-md:gap-[50px]">
          <div className="flex flex-col items-center w-[32%] gap-[40px] contact-first-items">
            <div className="w-[200px] rounded-[50%] h-[200px] flex justify-center items-center border-[2px] border-[white] contact-border-effect-c">
              <MdLocationOn className="text-[70px] text-white" />
            </div>
            <div className="flex flex-col gap-[15px]">
              <h2 className="text-center text-white text-[23px] uppercase">
                Our Location
              </h2>
              <p className="text-center text-white text-[17px] ">
                PO Box 97845 Baker st. 567, Los <br /> Angeles, California.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center w-[32%] gap-[40px] contact-first-items">
            <div className="w-[200px] rounded-[50%] h-[200px] flex justify-center items-center border-[2px] border-[white] contact-border-effect-c">
              <BsTelephoneFill className="text-[70px] text-white" />
            </div>
            <div className="flex flex-col gap-[15px]">
              <h2 className="text-center text-white text-[23px] uppercase">
                Contact us
              </h2>
              <p className="text-center text-white text-[17px] ">
                Mobile: (+0123) 465 789 <br /> Fax: (+0122) 456 789
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center w-[32%] gap-[40px] contact-first-items">
            <div className="w-[200px] rounded-[50%] h-[200px] flex justify-center items-center border-[2px] border-[white] contact-border-effect-c">
              <FaTelegramPlane className="text-[70px] text-white" />
            </div>
            <div className="flex flex-col gap-[15px]">
              <h2 className="text-center text-white text-[23px] uppercase">
                Write some words
              </h2>
              <p className="text-center text-white text-[17px] ">
                Support247@thimpress.com <br /> Info@thimpress.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
