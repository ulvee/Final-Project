import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import axios from "axios";
import SidebarCourse from "../../components/CoursesSection/sidebarCourse";
import Popular from "../../components/CoursesSection/Popular";
import GetStarted from "../../components/CoursesSection/GetStarted";

function Technology() {
  const [data, setData] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/courses");
    setData(res.data);
  };

  const toggle = () => {
    setSortAsc((prevSortAsc) => !prevSortAsc);
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredData = data.filter((d) => d.category === "Technology");

  return (
    <div className="flex flex-col">
      <div>
        <div className="pages-main-bck flex justify-center items-center py-[130px]">
          <h2 className="uppercase text-[white] font-[600] text-[60px] tracking-[5px] pr-[50px]">
            Technology
          </h2>
          <div className="pl-[50px] text-white">
            <p>THE BEST DEMO EDUCATION</p>
            <span>It is a long established fact that a reade.</span>
          </div>
        </div>
        <Popular />
      </div>
      <div className="max-w-[1200px] mx-auto py-[100px]">
        <div className="flex justify-between">
          <div className="w-[75%] flex flex-col gap-[40px]">
            <div className="w-[100%] flex gap-[50px] justify-between">
              <button
                onClick={toggle}
                className="bg-[#60d3c6] px-[20px] rounded-[7px] text-[white] font-[600] text-[17px] uppercase"
              >
                Sort by price
              </button>
              <form
                action=""
                className="w-[30%] flex border-b-[1px] py-[5px] px-[10px] border-[#00808085]"
              >
                <input
                  type="text"
                  placeholder="Search our courses..."
                  className=" outline-none w-[100%]"
                />
                <button>
                  <IoSearchSharp className="text-[20px] text-[#00808099]" />
                </button>
              </form>
            </div>

            <div className="flex flex-wrap justify-between gap-[40px]">
              {filteredData
                .sort((a, b) =>
                  sortAsc ? a.price - b.price : b.price - a.price
                )
                .map((d) => {
                  return (
                    <div className="w-[30%] flex flex-col bg-[white] pb-[20px] shadow-md gap-[20px]" key={d.price}>
                      <div className="relative popular-course-img">
                        <img
                          src={d.image}
                          alt=""
                          className="w-[100%] h-[250px]"
                        />
                        <span className="text-white bg-[#60d3c6] py-[12px] px-[25px] absolute top-[20px] uppercase font-[600] text-[18px] shadow-md right-0">
                          {d.category}
                        </span>
                        <span className="bg-white text-[#60d3c6] w-[100px] text-center py-[10px] uppercase absolute bottom-0 left-0">
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
      <GetStarted />
    </div>
  );
}

export default Technology;
