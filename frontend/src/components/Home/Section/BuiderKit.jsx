import React from "react";
import { Link } from "react-router-dom";

function BuiderKit() {
  return (
    <section
      className="pb-[150px] max-md:px-[30px] max-lg:px-[30px] max-xl:px-[30px]"
      id="buider-kit"
    >
      <div className="max-w-[1200px] mx-auto flex gap-[50px] items-center max-md:flex-col max-md:items-center">
        <div className="w-full max-md:w-[80%] max-lg:w-[50%]">
          <img
            src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/img-1.png"
            alt=""
            className="max-md:w-[100%]"
          />
        </div>
        <div className="flex flex-col gap-[30px] items-start w-full max-md:w-[80%] max-lg:w-[50%]">
          <div>
            <p className="text-[25px]">Welcome to</p>
            <h2 className="text-[37px]">Course Collections</h2>
          </div>
          <p className="text-[gray]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim{" "}
            <br />
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut{" "}
            <br />
            aliquip. Adipisicing elit, sed do eiusmod tempor incididunt.
          </p>
          <button className="w-[33%] py-[13px] uppercase font-[600]">
            <Link to={"/courses/collections"}>VIEW ALL</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default BuiderKit;
