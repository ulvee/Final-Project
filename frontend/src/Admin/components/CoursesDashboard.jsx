import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import axios from "axios";
import Sidebar from "./SidebarDashboard";

function CoursesDashboard() {
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
  return (
    <div className="flex">
      <Sidebar />
      <div className="py-[30px] w-[80%] px-[100px] flex flex-col gap-[40px] bg-[#80808049]">
        <h1 className="bg-[blue] px-[30px] py-[10px]">Courses</h1>
        <div className="max-lg:px-[30px] max-xl:px-[30px]">
          <div className="flex max-md:flex-col max-md:gap-[50px] max-lg:justify-center max-lg:gap-[50px] max-xl:justify-center max-xl:gap-[50px]">
            <div className="w-[100%] flex flex-col gap-[45px] max-md:w-[100%] max-md:px-[30px] max-lg:w-[70%]">
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
                    placeholder="Search our courses..."
                    className=" outline-none w-[100%]"
                  />
                  <button>
                    <IoSearchSharp className="text-[20px] text-[#00808099]" />
                  </button>
                </form>
              </div>

              <div className="flex flex-wrap gap-[50px] max-lg:gap-[34px] max-xl:gap-[34px]">
                {data
                  .sort((a, b) =>
                    sortAsc ? a.price - b.price : b.price - a.price
                  )
                  .map((d) => {
                    return (
                      <div className="w-[30%] flex flex-col bg-[white] pb-[20px] shadow-md gap-[20px] max-md:w-[100%] max-lg:w-[46%] max-xl:w-[30%]">
                        <div className="relative popular-course-img">
                          <img
                            src={d.image}
                            alt=""
                            className="w-[100%] h-[250px] max-md:h-[370px]"
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
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesDashboard;
