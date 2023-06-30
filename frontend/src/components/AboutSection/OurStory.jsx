import React from "react";
import GirlPhoto from "../../assets/images/girl-1797769.png";

function OurStory() {
  return (
    <div>
      <div className="flex max-md:flex-col max-lg:flex-col">
        <div className="w-[50%] relative max-md:w-[100%] max-lg:w-[100%]">
          <img src={GirlPhoto} alt="" className="w-[100%]" />
          <span className="text-[120px] font-[700] text-[white] absolute top-[70px] right-[50px]">
            01
          </span>
        </div>

        <div className="our-about-bck w-[50%] flex flex-col justify-center gap-[30px] px-[50px] max-md:w-[100%] max-lg:w-[100%]">
          <div>
            <h2 className="text-[40px] text-[#000000b4]">Our Story</h2>
            <p className="text-[17px] text-[gray]">
              It is a long established fact that a reade.
            </p>
          </div>
          <div>
            <p className="text-[17px] text-[gray]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              aperiam <br /> iure praesentium ipsam voluptatem ex tenetur {" "}
              accusantium <br /> dignissimos! Laborum provident at
               fugiat esse aliquam.<br /> Fuga veroquam nobis placeat 
              cupiditate enim,<br /> odio reprehenderit amet, non deleniti <br /> maiores
              unde ad deserunt!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
