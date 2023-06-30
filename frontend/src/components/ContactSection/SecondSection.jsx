import React from "react";
import LayerImg from "../../assets/images/layer-23.png";
import SliderEffect from "./SliderEffect-";
import { VscQuote } from "react-icons/vsc";

function SecondSection() {
  return (
    <div className="pt-[100px]">
      <div className="max-w-[1200px] mx-auto w-[100%] border-b-2">
        <div className="w-[100%] flex items-center max-md:flex-col">
          <div className="w-[50%] max-md:w-[80%]">
            <img src={LayerImg} alt="" />
          </div>
          <div className="w-[50%] relative max-md:w-[70%]">
            <VscQuote className="text-[50px] text-[#60d3c6] absolute top-[40px] left-[-10px] con-quote"/>
            <SliderEffect />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
