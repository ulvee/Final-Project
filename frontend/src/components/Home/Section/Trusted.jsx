import React from "react";
import skill from "../../../assets/images/skill.png";
import counter from "../../../assets/images/counter-center.png";
import Num1 from "../NumberPlus/Num1";
import Num2 from "../NumberPlus/Num2";
import Num3 from "../NumberPlus/Num3";
import Num4 from "../NumberPlus/Num4";

function Trusted() {
  return (
    <section className="trusted-sec py-[150px]" id="target">
      <div className="max-w-[1200px] mx-auto h-[100%]">
        <div className="h-[100%] flex max-lg:gap-[120px] gap-[130px] justify-center items-center max-lg:flex-col">
          <div className="flex flex-col gap-[50px] max-xl:w-[40%]">
            <div className="flex flex-col gap-[30px]">
              <div>
                <p className="text-[25px]">Trusted by thousands</p>
                <h2 className="text-[36px]">of Educators in the World</h2>
              </div>
              <p className="text-[gray]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor <br /> incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud <br />{" "}
                exercitation ullamco laboris nisi ut aliquip. Adipisicing elit,
                sed do eiusmod
              </p>
            </div>
            <div>
              <img src={skill} alt="" className=""/>
            </div>
          </div>
          <div className="trusted-counter w-[400px] h-[400px] border border-[#80808055] rounded-[50%]  flex relative justify-center items-center max-xl:w-[300px] max-xl:h-[300px]">
            <div className="bg-[white] shadow-lg w-[150px] h-[150px] rounded-[50%] absolute top-[-60px] left-[125px] flex justify-center items-center flex-col max-xl:w-[110px] max-xl:h-[110px] max-xl:top-[-50px] max-xl:left-[88px]">
              <div className="flex font-[700] text-[30px] text-[#f77474] items-center">
                <Num1 /> <span className="text-[35px]">+</span>
              </div>
              <p>Courses</p>
            </div>
            <div className="bg-[white] shadow-lg w-[150px] h-[150px] rounded-[50%] absolute top-[125px] right-[-60px] flex justify-center items-center flex-col max-xl:w-[110px] max-xl:h-[110px] max-xl:top-[88px] max-xl:right-[-50px]">
              <div className="flex font-[700] text-[30px] text-[#3eddbf] items-center">
                <Num2 /> <span className="text-[35px]">+</span>
              </div>
              <p>Courses</p>
            </div>
            <div className="bg-[white] shadow-lg w-[100px] h-[100px] rounded-[50%] flex justify-center items-center">
              <img src={counter} alt="" />
            </div>
            <div className="bg-[white] shadow-lg w-[150px] h-[150px] rounded-[50%] absolute bottom-[-60px] left-[125px] flex justify-center items-center flex-col max-xl:w-[110px] max-xl:h-[110px] max-xl:bottom-[-50px] max-xl:left-[88px]">
              <div className="flex font-[700] text-[30px] text-[#f6b253] items-center">
                <Num3 /> <span className="text-[35px]">+</span>
              </div>
              <p>Courses</p>
            </div>
            <div className="bg-[white] shadow-lg w-[150px] h-[150px] rounded-[50%] absolute top-[125px] left-[-60px] flex justify-center items-center flex-col max-xl:w-[110px] max-xl:h-[110px] max-xl:top-[88px] max-xl:left-[-50px]">
              <div className="flex font-[700] text-[30px] text-[#5cc4f6] items-center">
                <Num4 /> <span className="text-[35px]">+</span>
              </div>
              <p>Courses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trusted;
