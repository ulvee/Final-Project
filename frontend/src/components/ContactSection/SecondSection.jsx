import React from "react";
import LayerImg from "../../assets/images/layer-23.png";
import SliderEffect from "./SliderEffect-";
import { VscQuote } from "react-icons/vsc";

function SecondSection() {
  return (
    <div className="pt-[100px]">
      <div className="max-w-[1200px] mx-auto w-[100%] border-b-2">
        <div className="w-[100%] flex items-center">
          <div className="w-[50%]">
            <img src={LayerImg} alt="" />
          </div>
          <div className="w-[50%] relative">
            <VscQuote className="text-[50px] text-[#60d3c6] absolute top-[40px] left-[-10px]"/>
            <SliderEffect />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
