import React, { useState } from "react";
import { Checkbox } from "@nextui-org/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function Admin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/admin/courses");
      }
    } catch (error) {}
  };
  return (
    <div className="pb-[100px]">
       <Helmet>
        <title>Admin</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <div className="max-w-[550px] mx-auto border-[#1e90ff] border-[3px] rounded-[7px] py-[50px] px-[70px] mt-[100px]">
        <form
          action=""
          onSubmit={loginUser}
          className="flex flex-col gap-[50px]"
          id="register-form"
        >
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-center text-[27px] font-semibold">Login</h2>
            <div className="flex flex-col gap-[30px]">
              <input
                placeholder="Email..."
                name="email"
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <input
                placeholder="Password..."
                name="password"
                type="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
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
            <button
              type="submit"
              className="py-[12px] px-[20px] bg-[#1e90ff] rounded-[15px] border border-[white] font-semibold text-[17px] text-[white] hover:bg-[white] hover:border-[#1e90ff] hover:text-[#1e90ff] transition delay-300 ease-in-out duration-300"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin;
