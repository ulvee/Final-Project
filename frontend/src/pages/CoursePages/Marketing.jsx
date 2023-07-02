import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import axios from "axios";
import SidebarCourse from "../../components/CoursesSection/sidebarCourse";
import Popular from "../../components/CoursesSection/Popular";
import GetStarted from "../../components/CoursesSection/GetStarted";

function Marketing() {
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

  const filteredData = data.filter((d) => d.category === "Marketing");

  return (
    <div className="flex flex-col">
      <div>
      <div className="pages-main-bck flex justify-center items-center py-[130px] max-md:flex-col max-md:gap-[50px]">
        <h2 className="uppercase text-[white] font-[600] text-[60px] tracking-[5px] pr-[50px] max-md:pr-0">
          Marketing
        </h2>
        <div className="pl-[50px] text-white max-md:pl-0 max-md:text-center">
            <p>THE BEST DEMO EDUCATION</p>
            <span>It is a long established fact that a reade.</span>
          </div>
        </div>
        <Popular />
      </div>
      <div className="max-w-[1200px] w-[100%] mx-auto py-[100px] max-lg:px-[30px] max-xl:px-[30px]">
        <div className="flex justify-between max-md:flex-col max-md:gap-[50px] max-lg:justify-center max-lg:gap-[50px] max-xl:justify-center max-xl:gap-[50px]">
          <div className="w-[75%] flex flex-col gap-[40px] max-md:w-[100%] max-md:px-[30px] max-lg:w-[70%]">
            <div className="w-[100%] flex gap-[50px] justify-between">
              <button
                onClick={toggle}
                className="bg-[#60d3c6] py-[10px] px-[20px] rounded-[7px] text-[white] font-[600] text-[17px] uppercase"
              >
                Sort by price
              </button>
              
            </div>

            <div className="flex flex-wrap gap-[43px] max-lg:gap-[34px] max-xl:gap-[34px]">
              {filteredData
                .sort((a, b) =>
                  sortAsc ? a.price - b.price : b.price - a.price
                )
                .map((d, index) => {
                  return (
                    <div
                      className="w-[30%] flex flex-col bg-[white] pb-[20px] shadow-md gap-[20px] max-md:w-[100%] max-lg:w-[46%] max-xl:w-[30%] courses-card-rad"
                      key={index}
                    >
                      <div className="relative popular-course-img">
                        <img
                          src={d.image}
                          alt=""
                          className="w-[100%] h-[250px] max-md:h-[370px]"
                        />
                        <span className="text-white rounded-l-[5px] bg-[#60d3c6] py-[12px] px-[25px] absolute top-[20px] uppercase font-[600] text-[18px] shadow-md right-0">
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
      <GetStarted />
    </div>
  );
}

export default Marketing;
