import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { Link } from "react-router-dom";

function Account() {
  const { user } = useContext(UserContext);
  return (
    <div className="pb-[100px]" id="account-bck">
      <div className="pages-main-bck flex justify-center items-center py-[130px] max-md:flex-col max-md:gap-[50px]">
        <h2 className="uppercase text-[white] font-[600] text-[60px] tracking-[5px] pr-[50px] max-md:pr-0">
          Account
        </h2>
        <div className="pl-[50px] text-white max-md:pl-0 max-md:text-center">
          {" "}
          <p>THE BEST DEMO EDUCATION</p>
          <span>It is a long established fact that a reade.</span>
        </div>
      </div>
      <div className="pt-[70px] flex items-center flex-col">
        <h1 className="text-[60px] font-[500] text-[#555555d0]">Welcome</h1>
        {!!user && (
          <h2 className="text-[40px] font-[500] text-[#6a00ff98]">
            {user.name}!
          </h2>
        )}
      </div>

      <div className="max-w-[550px] mx-auto border-[#1e90ff] border-[3px] rounded-[7px] py-[50px] px-[70px] mt-[50px]">
        <form
          action=""
          className="flex flex-col gap-[50px]"
          id="register-form"
        >
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-center text-[30px] text-[#1e90ff]">LOST PASSWORD</h2>
            <h2 className="text-center text-[27px] text-[#808080e0] font-semibold">
              Lost your password?
            </h2>
            <div className="flex flex-col gap-[30px]">
              <input placeholder="Email..." name="email" type="email" />
            </div>
            <button
              type="submit"
              className="py-[12px] px-[20px] bg-[#1e90ff] rounded-[15px] border border-[white] font-semibold text-[17px] text-[white] hover:bg-[white] hover:border-[#1e90ff] hover:text-[#1e90ff] transition delay-300 ease-in-out duration-300"
            >
              Reset Password
            </button>
            <p className="text-center text-[#808080e1]">Lost your password? Please enter your email address. <br /> You will receive a link to create a new <br /> password via email.</p>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Account;
