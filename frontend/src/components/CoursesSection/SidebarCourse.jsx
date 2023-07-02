import React from "react";
import { Link } from "react-router-dom";

function SidebarCourse() {
  return (
    <div className="flex flex-col gap-[30px] max-md:px-[30px]">
      <div className="flex flex-col gap-[30px]">
        <h2 className="text-[23px] uppercase font-medium">Categories</h2>
        <ul className="flex flex-col gap-[20px] text-[17px] text-[gray]">
          <li>
            <Link to={"/courses/category/business"}>Business</Link>
          </li>
          <li>
            <Link to={"/courses/category/design"}>Design</Link>
          </li>
          <li>
            <Link to={"/courses/category/marketing"}>Marketing</Link>
          </li>
          <li>
            <Link to={"/courses/category/photography"}>Photography</Link>
          </li>
          <li>
            <Link to={"/courses/category/technology"}>Technology</Link>
          </li>
          <li>
            <Link to={"/courses/category/webdevelopment"}>Web-Development</Link>
          </li>
          <li>
            <Link to={"/courses/category/music"}>Music</Link>
          </li>
          <li>
            <Link to={"/courses/category/language"}>Language</Link>
          </li>
          <li>
            <Link to={"/courses/category/introductory"}>Introductory</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-[30px] py-[60px] custom-card-o-service">
        <h2 className="text-[23px] uppercase font-medium">LATEST COURSES</h2>
        <div className="flex flex-col gap-[20px]">
          <div className="flex gap-[20px]">
            <div className="w-[40%] max-md:w-[30%]">
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
            <div className="w-[40%] max-md:w-[30%]">
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
            <div className="w-[40%] max-md:w-[30%]">
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
      <div className="flex flex-col gap-[30px] py-[60px] custom-card-o-service">
        <h2 className="text-[23px] uppercase font-medium">LATEST POSTS</h2>
        <div className="flex flex-col gap-[20px]">
          <div className="flex gap-[20px]">
            <div className="w-[40%] max-md:w-[30%]">
              <img
                className="w-[100%]"
                src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/06/highres_454560417-min-109x109.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[15px] justify-center">
              <p>
                A solution built <br /> for teachers
              </p>
              <span className="text-[#60d3c6]">July 21, 2022</span>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div className="w-[40%] max-md:w-[30%]">
              <img
                className="w-[100%]"
                src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/06/shutterstock_184641842-5-e1503472000521-109x109.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[15px] justify-center">
              <p>
                A solution built <br /> for teachers
              </p>
              <span className="text-[#60d3c6]">May 10, 2023</span>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div className="w-[40%] max-md:w-[30%]">
              <img
                className="w-[100%]"
                src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/06/img-slider-home-109x109.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[15px] justify-center">
              <p>
                A solution built <br /> for teachers
              </p>
              <span className="text-[#60d3c6]">March 17, 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarCourse;
