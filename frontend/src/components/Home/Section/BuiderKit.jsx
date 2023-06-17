import React from "react";

function BuiderKit() {
  return (
    <section className="pb-[150px]" id="buider-kit">
      <div className="max-w-[1100px] mx-auto flex justify-between items-center">
        <div>
          <img
            src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/img-1.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[30px] items-start">
          <div>
            <p className="text-[25px]">Welcome to</p>
            <h2 className="text-[37px]">CourseBuider Kit</h2>
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
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
}

export default BuiderKit;
