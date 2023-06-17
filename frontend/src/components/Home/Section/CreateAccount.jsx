import React from "react";
import ContactImg from "../../../assets/images/contact-img.png";

function CreateAccount() {
  return (
    <section className="create-account py-[15px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col items-start justify-center gap-[40px]">
            <h2 className="text-[30px]">Create Your Free Account</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </p>
            <button className="text-[17px] uppercase font-[700] py-[12px] px-[40px] bg-[white] text-[black] rounded-[25px] hover:text-[white] hover:bg-[#3eddbf]">Create Now</button>
          </div>
          <div>
            <img src={ContactImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateAccount;
