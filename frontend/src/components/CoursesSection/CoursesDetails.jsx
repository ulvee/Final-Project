import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import axios from "axios";

function CoursesDetails() {
  const [data, setData] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/courses/technology");
    setData(res.data);
  };

  const toggle = () => {
    setSortAsc((prevSortAsc) => !prevSortAsc);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="py-[100px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between">
          <div className="w-[75%] flex flex-col gap-[40px]">
            <div className="w-[100%] flex gap-[50px] justify-end">
              <button onClick={toggle}>Price</button>
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

            <div className="flex justify-between flex-wrap gap-[30px]">
              {data
                .sort((a, b) =>
                  sortAsc ? a.price - b.price : b.price - a.price
                )
                .map((d) => {
                  return (
                    <div className="w-[30%] flex flex-col bg-[white] pb-[20px] shadow-md gap-[20px]">
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
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px]">
              <h2 className="text-[23px] uppercase font-medium">Categories</h2>
              <ul className="flex flex-col gap-[20px] text-[17px] text-[gray]">
                <li>
                  <Link>Business</Link>
                </li>
                <li>
                  <Link>Design</Link>
                </li>
                <li>
                  <Link>Marketing</Link>
                </li>
                <li>
                  <Link>Photography</Link>
                </li>
                <li>
                  <Link>Technology</Link>
                </li>
                <li>
                  <Link>Web-Development</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[30px] py-[60px]">
              <h2 className="text-[23px] uppercase font-medium">
                LATEST COURSES
              </h2>
              <div className="flex flex-col gap-[20px]">
                <div className="flex gap-[20px]">
                  <div className="w-[40%]">
                    <img
                      className="w-[100%]"
                      src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/08/pexels-photo-40120-e1500018015404-1-109x109.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-[15px] justify-center">
                    <p>
                      The Ultimate <br /> Ethical Hacking
                    </p>
                    <span className="text-[#60d3c6]">FREE</span>
                  </div>
                </div>
                <div className="flex gap-[20px]">
                  <div className="w-[40%]">
                    <img
                      className="w-[100%]"
                      src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/08/home-1-bg-e1503477367706-109x109.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-[15px] justify-center">
                    <p>
                      The Ultimate <br /> Ethical Hacking
                    </p>
                    <span className="text-[#60d3c6]">$22.00</span>
                  </div>
                </div>
                <div className="flex gap-[20px]">
                  <div className="w-[40%]">
                    <img
                      className="w-[100%]"
                      src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/06/layer-9-min-109x109.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-[15px] justify-center">
                    <p>
                      The Ultimate <br /> Ethical Hacking
                    </p>
                    <span className="text-[#60d3c6]">$46.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesDetails;
