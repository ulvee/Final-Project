import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import axios from "axios";
import SidebarCourse from "./sidebarCourse";

function CoursesDetails() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/courses");
    setData(res.data);
  };

  const checkData = (e) => {
    setValue(e.target.value);
  };

  const toggle = () => {
    setSortAsc((prevSortAsc) => !prevSortAsc);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="py-[100px]">
      <div className="max-w-[1200px] mx-auto max-lg:px-[30px] max-xl:px-[30px]">
        <div className="flex justify-between max-md:flex-col max-md:gap-[50px] max-lg:justify-center max-lg:gap-[50px] max-xl:justify-center max-xl:gap-[50px]">
          <div className="w-[75%] flex flex-col gap-[40px] max-md:w-[100%] max-md:px-[30px] max-lg:w-[70%]">
            <div className="w-[100%] flex gap-[50px] justify-between">
              <button
                onClick={toggle}
                className="bg-[#60d3c6] px-[20px] rounded-[7px] text-[white] font-[600] text-[17px] uppercase"
              >
                Sort by Price
              </button>
              <form
                action=""
                className="w-[30%] flex border-b-[1px] py-[5px] px-[10px] border-[#00808085] max-md:w-[50%]"
              >
                <input
                  type="text"
                  value={value}
                  onChange={checkData}
                  placeholder="Search our courses..."
                  className=" outline-none w-[100%]"
                />
                <button>
                  <IoSearchSharp className="text-[20px] text-[#00808099]" />
                </button>
              </form>
            </div>

            <div className="flex flex-wrap gap-[43px] max-lg:gap-[34px] max-xl:gap-[34px]">
              {data
                .filter((item) =>
                  item.category.toLowerCase().includes(value.toLowerCase())
                )
                .sort((a, b) =>
                  sortAsc ? a.price - b.price : b.price - a.price
                )
                .map((d) => {
                  return (
                    <div className="w-[30%] flex flex-col bg-[white] rounded-[10px] pb-[20px] shadow-md gap-[20px] max-md:w-[100%] max-lg:w-[46%] max-xl:w-[30%]">
                      <div className="relative popular-course-img">
                        <img
                          src={d.image}
                          alt=""
                          className="w-[100%] h-[250px] max-md:h-[370px]"
                        />
                        <span className="text-white bg-[#60d3c6] rounded-l-[5px] py-[12px] px-[25px] absolute top-[20px] uppercase font-[600] text-[18px] shadow-md right-0">
                          {d.category}
                        </span>
                        <span className="bg-[#006195bd] text-[white] rounded-r-[5px] font-[700] text-[18px] w-[100px] text-center py-[10px] uppercase absolute bottom-0 left-0">
                          $ {d.price}
                        </span>
                      </div>
                      <div className="flex flex-col gap-[20px] pl-[25px]">
                        <p className="text-[17px]">{d.title}</p>
                        <p className="text-[gray]">
                          {" "}
                          August 16, 2022 / 2 Comments{" "}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
            <SidebarCourse />
        </div>
      </div>
    </div>
  );
}

export default CoursesDetails;
