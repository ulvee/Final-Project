import React from "react";
import OurContactSlider from "../Slider/OurContactSlider";
import { FiMail, FiPhone, FiTwitter } from "react-icons/fi";

function OurContact() {
  return (
    <div className="our-contact-bck py-[100px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-[50px]">
          <OurContactSlider />
          <div className="flex gap-[50px] flex-col items-center">
            <div className="flex gap-[100px]">
              <div className="flex flex-col gap-[20px]">
                {" "}
                <div className="w-[100px] h-[100px] bg-[#808080bd] z-30 flex justify-center items-center rounded-[50%]">
                  <FiTwitter className="text-[white] text-[40px]" />{" "}
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                {" "}
                <div className="w-[100px] h-[100px] bg-[#808080bd] z-30 flex justify-center items-center rounded-[50%]">
                  <FiPhone className="text-[white] text-[40px]" />{" "}
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="w-[100px] h-[100px] bg-[#808080bd] z-30 flex justify-center items-center rounded-[50%]">
                  <FiMail className="text-[white] text-[40px]" />{" "}
                </div>
              </div>
            </div>
            <button className="uppercase bg-[#3eddbf] py-[10px] z-30 px-[35px] font-[600] rounded-[25px] text-white">Let's talk</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurContact;
