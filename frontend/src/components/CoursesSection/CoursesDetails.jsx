import React from "react";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

function CoursesDetails() {
  return (
    <div className="py-[100px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between">
          <div className="w-[85%] flex flex-col gap-[40px]">
            <div className="w-[100%] flex justify-end">
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

            <div className="flex justify-between">
              <div className="w-[30%] flex flex-col bg-[white] pb-[20px] shadow-md gap-[20px]">
                <div className="relative popular-course-img">
                  <img
                    src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/08/pexels-photo-40120-e1500018015404-1-365x405.jpg"
                    alt=""
                    className="w-[100%]"
                  />
                  <span className="text-white bg-[#60d3c6] py-[12px] px-[25px] absolute top-[20px] uppercase font-[600] text-[18px] shadow-md right-0">
                    Business
                  </span>
                  <span className="bg-white text-[#60d3c6] w-[100px] text-center py-[10px] uppercase absolute bottom-0 left-0">
                    $ 255
                  </span>
                </div>
                <div className="flex flex-col gap-[20px] pl-[25px]">
                  <p className="text-[17px]">Lorem, ipsum dolor.</p>
                  <p className="text-[gray]"> August 16, 2022 / 2 Comments </p>
                </div>
              </div>

              <div className="w-[30%] flex flex-col bg-[white] pb-[20px] shadow-md gap-[20px]">
                <div className="relative popular-course-img">
                  <img
                    src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/08/pexels-photo-40120-e1500018015404-1-365x405.jpg"
                    alt=""
                    className="w-[100%]"
                  />
                  <span className="text-white bg-[#60d3c6] py-[12px] px-[25px] absolute top-[20px] uppercase font-[600] text-[18px] shadow-md right-0">
                    Business
                  </span>
                  <span className="bg-white text-[#60d3c6] w-[100px] text-center py-[10px] uppercase absolute bottom-0 left-0">
                    $ 255
                  </span>
                </div>
                <div className="flex flex-col gap-[20px] pl-[25px]">
                  <p className="text-[17px]">Lorem, ipsum dolor.</p>
                  <p className="text-[gray]"> August 16, 2022 / 2 Comments </p>
                </div>
              </div>

              <div className="w-[30%] flex flex-col bg-[white] pb-[20px] shadow-md gap-[20px]">
                <div className="relative popular-course-img">
                  <img
                    src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/08/pexels-photo-40120-e1500018015404-1-365x405.jpg"
                    alt=""
                    className="w-[100%]"
                  />
                  <span className="text-white bg-[#60d3c6] py-[12px] px-[25px] absolute top-[20px] uppercase font-[600] text-[18px] shadow-md right-0">
                    Business
                  </span>
                  <span className="bg-white text-[#60d3c6] w-[100px] text-center py-[10px] uppercase absolute bottom-0 left-0">
                    $ 255
                  </span>
                </div>
                <div className="flex flex-col gap-[20px] pl-[25px]">
                  <p className="text-[17px]">Lorem, ipsum dolor.</p>
                  <p className="text-[gray]"> August 16, 2022 / 2 Comments </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] py-[60px]">
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
        </div>
      </div>
    </div>
  );
}

export default CoursesDetails;
