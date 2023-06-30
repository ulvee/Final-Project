import React from "react";
import Client1 from "../../../assets/images/client-1.png";
import Client2 from "../../../assets/images/client-2.png";
import Client3 from "../../../assets/images/client-3.png";
import Client4 from "../../../assets/images/client-4.png";
import Client5 from "../../../assets/images/client-5.png";

function Logos() {
  return (
    <section className="bg-[#e7e7e7] py-[100px]">
      <div className="max-w-[1200px] mx-auto max-lg:mx-[20px] max-xl:px-[20px]">
        <div className="flex justify-between items-center">
          <div className="client-img">
            <img src={Client1} alt="" />
          </div>
          <div className="client-img">
            <img src={Client2} alt="" />
          </div>
          <div className="client-img">
            <img src={Client3} alt="" />
          </div>
          <div className="client-img">
            <img src={Client4} alt="" />
          </div>
          <div className="client-img">
            <img src={Client5} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logos;
