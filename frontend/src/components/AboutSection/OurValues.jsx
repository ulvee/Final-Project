import React from "react";
import CompPhoto from "../../assets/images/ourstory-2.png";

function OurValues() {
  return (
    <div>
      <div className="flex max-md:flex-col-reverse max-lg:flex-col-reverse">
        <div className="our-about-bck w-[50%] flex flex-col justify-center items-end gap-[30px] px-[50px] max-md:w-[100%] max-md:items-start max-lg:w-[100%] max-lg:items-start">
          <div className="flex flex-col items-end max-md:items-start max-lg:items-start">
            <h2 className="text-[40px] text-[#000000b4]">Our Values</h2>
            <p className="text-[17px] text-[gray]">
              It is a long established fact that a reade.
            </p>
          </div>
          <div>
            <p className="text-[17px] text-[gray] text-right max-md:text-left max-lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              aperiam <br /> iure praesentium ipsam voluptatem ex tenetur{" "}
              accusantium <br /> dignissimos! Laborum provident at fugiat esse
              aliquam.
              <br /> Fuga veroquam nobis placeat cupiditate enim,
              <br /> odio reprehenderit amet, non deleniti <br /> maiores unde
              ad deserunt!
            </p>
          </div>
        </div>
        <div className="w-[50%] relative max-md:w-[100%] max-lg:w-[100%]">
          <img src={CompPhoto} alt="" className="w-[100%]" />
          <span className="text-[120px] font-[700] text-[white] absolute top-[70px] left-[50px]">
            02
          </span>
        </div>
      </div>
    </div>
  );
}

export default OurValues;
