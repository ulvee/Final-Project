import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post(
        "/register",
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Successful. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pb-[100px]">
      <div className="pages-main-bck flex justify-center items-center py-[130px]">
        <h2 className="uppercase text-[white] font-[600] text-[60px] tracking-[5px] pr-[50px]">
          Register
        </h2>
        <div className="pl-[50px] text-white">
          {" "}
          <p>THE BEST DEMO EDUCATION</p>
          <span>It is a long established fact that a reade.</span>
        </div>
      </div>
      <div className="max-w-[550px] mx-auto border-[#1e90ff] border-[3px] rounded-[7px] py-[50px] px-[70px] mt-[100px]">
        <form
          action=""
          onSubmit={registerUser}
          className="flex flex-col gap-[50px]"
          id="register-form"
        >
          <div className="flex flex-col gap-[20px] ">
            <h2 className="text-center text-[27px] font-semibold">
              Login with your site account
            </h2>
            <div className="flex flex-col gap-[30px] ">
              <input
                placeholder="Name"
                type="name"
                name="name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />

              <input
                placeholder="Email"
                name="email"
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />

              <input
                placeholder="Password"
                name="password"
                type="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <div className="flex justify-between items-center"></div>
            <button
              type="submit"
              className="py-[12px] px-[20px] bg-[#1e90ff] rounded-[10px] border border-[white]  font-semibold text-[17px] text-[white] hover:bg-[white] hover:border-[#1e90ff] hover:text-[#1e90ff] transition delay-300 ease-in-out duration-300"
            >
              Sign up
            </button>
          </div>
          <div className="flex justify-center gap-[10px] border-[#1e90ff] border-[1px] rounded-[7px] py-[10px]">
            <p>Have an account?</p>
            <Link to={"/login"}>
              <li className="list-none text-[#1e90ff] ">Login</li>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
