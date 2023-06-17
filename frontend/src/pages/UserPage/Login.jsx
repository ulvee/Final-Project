import React from "react";
import { Input, Spacer, Checkbox } from "@nextui-org/react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="pb-[100px]">
      <div className="pages-main-bck flex justify-center items-center py-[130px]">
        <h2 className="uppercase text-[white] font-[600] text-[60px] tracking-[5px] pr-[50px]">
          Login
        </h2>
        <div className="pl-[50px] text-white">
          {" "}
          <p>THE BEST DEMO EDUCATION</p>
          <span>It is a long established fact that a reade.</span>
        </div>
      </div>
      <div className="max-w-[550px] mx-auto border-[#1e90ff] border-[3px] rounded-[7px] py-[50px] px-[70px] mt-[100px]">
        <form action="" className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-center text-[27px] font-semibold">
              Login with your site account
            </h2>
            <div className="flex flex-col">
              <Input
                clearable
                bordered
                color="primary"
                Placeholder="Username or Email..."
              />
              <Spacer y={1} />
              <Input.Password
                bordered
                color="primary"
                Placeholder="Password..."
              />
            </div>
            <div className="flex justify-between items-center">
              <Checkbox defaultSelected size="sm" color="primary">
                REMEMBER ME
              </Checkbox>
              <Link to={"#"}>
                <li className="list-none">Lost your password?</li>
              </Link>
            </div>
            <button className="py-[12px] px-[20px] bg-[#1e90ff] rounded-[15px] border border-[white] font-semibold text-[17px] text-[white] hover:bg-[white] hover:border-[#1e90ff] hover:text-[#1e90ff] transition delay-300 ease-in-out duration-300">
              Log in
            </button>
          </div>
          <div className="flex justify-center gap-[10px] border-[#1e90ff] border-[1px] rounded-[7px] py-[10px]">
            <p>Don't have an account?</p>
            <Link to={"/register"}>
              <li className="list-none text-[#1e90ff] ">Sign up</li>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;