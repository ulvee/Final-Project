import React from "react";
import { BsBell, BsBook, BsBriefcase, BsWindowStack } from "react-icons/bs";
import { IoBulbOutline, IoLogoBuffer } from "react-icons/io5";
function OurService() {
  return (
    <div className="py-[100px] max-md:px-[50px]">
      <div className="max-w-[1200px] mx-auto">
        <div className=" flex flex-col gap-[70px] justify-center">
          <div className="flex flex-col items-center gap-[20px]">
            <h2 className="text-[48px] font-[600] max-md:text-center">Our Service Categories</h2>
            <p className="text-[17px] text-[gray] max-md:text-center">
              So many academic goals that we expect you to achieve.
            </p>
          </div>
          <div className="flex flex-col gap-[50px]">
            <div className="flex justify-between max-md:flex-col max-md:w-[100%] max-md:gap-[50px]">
              <div className="custom-card-o-service flex gap-[30px]">
                <div className="mt-[20px]">
                  <IoLogoBuffer className="text-[#3eddbf] text-[40px]" />
                </div>
                <div className="flex flex-col gap-[20px]">
                  <h3 className="font-[500] text-[19px]">SKILLS</h3>
                  <p className="text-[gray] ">
                    Improved skills for building <br /> site to sell online
                    courses <br />
                    successful, how to take that <br /> opportunity.
                  </p>
                </div>
              </div>
              <div className="custom-card-o-service flex gap-[30px]">
                <div className="mt-[20px]">
                  <IoBulbOutline className="text-[#3eddbf] text-[40px]" />
                </div>
                <div className="flex flex-col gap-[20px]">
                  <h3 className="font-[500] text-[19px]">SELF LEARNING</h3>
                  <p className="text-[gray] ">
                    Improved skills for building <br /> site to sell online
                    courses <br />
                    successful, how to take that <br /> opportunity.
                  </p>
                </div>
              </div>
              <div className="custom-card-o-service flex gap-[30px]">
                <div className="mt-[20px]">
                  <BsBook className="text-[#3eddbf] text-[40px]" />
                </div>
                <div className="flex flex-col gap-[20px]">
                  <h3 className="font-[500] text-[19px]">KNOWLEDGE</h3>
                  <p className="text-[gray] ">
                    Improved skills for building <br /> site to sell online
                    courses <br />
                    successful, how to take that <br /> opportunity.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between max-md:flex-col max-md:w-[100%] max-md:gap-[50px]">
              <div className="custom-card-o-service flex gap-[30px]">
                <div className="mt-[20px]">
                  <BsBell className="text-[#3eddbf] text-[40px]" />
                </div>
                <div className="flex flex-col gap-[20px]">
                  <h3 className="font-[500] text-[19px]">DISCUSSION</h3>
                  <p className="text-[gray] ">
                    Improved skills for building <br /> site to sell online
                    courses <br />
                    successful, how to take that <br /> opportunity.
                  </p>
                </div>
              </div>
              <div className="custom-card-o-service flex gap-[30px]">
                <div className="mt-[20px]">
                  <BsBriefcase className="text-[#3eddbf] text-[40px]" />
                </div>
                <div className="flex flex-col gap-[20px]">
                  <h3 className="font-[500] text-[19px]">PAYMENTS</h3>
                  <p className="text-[gray] ">
                    Improved skills for building <br /> site to sell online
                    courses <br />
                    successful, how to take that <br /> opportunity.
                  </p>
                </div>
              </div>
              <div className="custom-card-o-service flex gap-[30px]">
                <div className="mt-[20px]">
                  <BsWindowStack className="text-[#3eddbf] text-[40px]" />
                </div>
                <div className="flex flex-col gap-[20px]">
                  <h3 className="font-[500] text-[19px]">HOSTED CONTENT</h3>
                  <p className="text-[gray] ">
                    Improved skills for building <br /> site to sell online
                    courses <br />
                    successful, how to take that <br /> opportunity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurService;
