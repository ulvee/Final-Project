import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import modalimg from "../assets/images/modal-image.png";
import { Input, Spacer, Checkbox } from "@nextui-org/react";

function Header() {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownOpen1 = () => {
    setIsDropdownOpen1(true);
  };

  const handleDropdownClose1 = () => {
    setIsDropdownOpen1(false);
  };

  const handleDropdownOpen2 = () => {
    setIsDropdownOpen2(true);
  };

  const handleDropdownClose2 = () => {
    setIsDropdownOpen2(false);
  };

  const handleDropdownOpen3 = () => {
    setIsDropdownOpen3(true);
  };

  const handleDropdownClose3 = () => {
    setIsDropdownOpen3(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <header className="py-[15px]" id="header">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <button>
            <img
              src="	https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/logo-kit.png"
              alt=""
            />
          </button>
        </Link>
        <div className="flex gap-[100px]">
          <nav>
            <ul className="flex gap-[30px] items-center">
              <div className="dropdown-container z-50">
                <div
                  className={`dropdown ${isDropdownOpen1 ? "open" : ""}`}
                  onMouseEnter={handleDropdownOpen1}
                  onMouseLeave={handleDropdownClose1}
                >
                  <Link to={"/"}>
                    <div className="selected-option flex items-center gap-[8px] text-[17px]">
                      {selectedOption1 ? selectedOption1 : "Home"}
                      <IoIosArrowDown className="mt-[4px] text-[14px]" />
                    </div>
                  </Link>
                  <div className="options px-[15px] min-w-[300px] z-30 left-0">
                    <Link to={"/"}>
                      <li className="option ">Home</li>
                    </Link>

                    <Link to={"/login"}>
                      <li className="option">Login</li>
                    </Link>

                    <Link to={"/register"}>
                      <li className="option">Register</li>
                    </Link>
                    <Link to={"№"}>
                      <p className="option">Account</p>
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/about">
                <li className="text-[17px]">About</li>
              </Link>

              <li>
                <div className="dropdown-container">
                  <div
                    className={`dropdown ${isDropdownOpen2 ? "open" : ""}`}
                    onMouseEnter={handleDropdownOpen2}
                    onMouseLeave={handleDropdownClose2}
                  >
                    <Link to={"/courses"} className="hover:text-[#3eddbf]">
                      <div className="selected-option flex items-center gap-[8px] text-[17px]">
                        {selectedOption2 ? selectedOption2 : "Courses"}
                        <IoIosArrowDown className="mt-[4px] text-[14px]" />
                      </div>
                    </Link>
                    <div className="options min-w-[1000px] left-[-400px] z-50 pt-[20px] pb-[40px] px-[30px]">
                      <div className="flex justify-between">
                        <div className="option">
                          <h2 className="mb-[20px]">ABOUT COURSES</h2>
                          <Link to={"/courses"}>
                            <p className="option">Courses</p>
                          </Link>
                          <Link to={"/courses/category/business"}>
                            <p className="option">Business</p>
                          </Link>
                          <Link to={"/courses/category/design"}>
                            <p className="option">Design</p>
                          </Link>
                          <Link to={"/courses/category/photography"}>
                            <p className="option">Photography</p>
                          </Link>
                          <Link to={"/courses/category/marketing"}>
                            <p className="option">Marketing</p>
                          </Link>
                          <Link to={"/courses/category/webdevelopment"}>
                            <p className="option">Web-Development</p>
                          </Link>
                          <Link to={"/courses/category/technology"}>
                            <p className="option">Technology</p>
                          </Link>
                        </div>
                        <div className="flex gap-[30px]">
                          <div
                            className="option flex flex-col gap-[20px]"
                            id="cours-drop"
                          >
                            <div id="drop-img">
                              <img
                                src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/08/pexels-photo-40120-e1500018015404-1-300x300.jpg"
                                alt=""
                              />
                            </div>
                            <div className="flex flex-col gap-[20px]">
                              <h3 className="text-center">
                                LearnPress Master Web <br /> Design in Photoshop
                              </h3>
                              <span className="text-[red] text-center">
                                FREE
                              </span>
                            </div>
                          </div>
                          <div className="option">
                            <img
                              src="https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2017/06/menu-image_360.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <div className="dropdown-container">
                <div
                  className={`dropdown ${isDropdownOpen3 ? "open" : ""}`}
                  onMouseEnter={handleDropdownOpen3}
                  onMouseLeave={handleDropdownClose3}
                >
                  <Link className="hover:text-[#3eddbf]">
                    <div className="selected-option flex items-center gap-[8px] text-[17px]">
                      {selectedOption3 ? selectedOption3 : "Pages"}
                      <IoIosArrowDown className="mt-[4px] text-[14px]" />
                    </div>
                  </Link>
                  <div className="options px-[15px] min-w-[300px] z-50 left-0">
                    <Link to={"#"}>
                      <li className="option">Shop</li>
                    </Link>
                    <Link to={"/gallery"}>
                      <li className="option">Gallery</li>
                    </Link>
                    <Link to={"/projects"}>
                      <li className="option">Portfolio</li>
                    </Link>
                    <Link to={"/projects/:id"}>
                      <li className="option">Detail Page</li>
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/contact">
                {" "}
                <li className="text-[17px]">Contact</li>
              </Link>
            </ul>
          </nav>
          <div className="flex gap-10">
            <button onClick={openModal} className="flex gap-[5px] items-center">
              {" "}
              <BsFillPersonFill /> Login
            </button>
            {isOpen && (
              <div className="modal-overlay z-50" onClick={handleOverlayClick}>
                <div className="modal-content flex">
                  <div className="h-[550px] w-[400px]">
                    <img className="w-[100%] h-[100%]" src={modalimg} alt="" />
                  </div>
                  <div className="flex flex-col bg-white w-[400px] relative items-center justify-center px-[20px]">
                    <button
                      onClick={closeModal}
                      className="text-[25px] absolute top-0 right-0 py-[3px] px-[3px]"
                    >
                      {" "}
                      <IoClose />{" "}
                    </button>
                    <form action="" className="flex flex-col gap-[30px]">
                      <h2 className="text-center text-[27px] font-semibold">
                        Login to your account
                      </h2>
                      <div className="flex flex-col">
                        <Input
                          clearable
                          bordered
                          color="success"
                          Placeholder="Username or Email..."
                        />
                        <Spacer y={1} />
                        <Input.Password
                          bordered
                          color="success"
                          Placeholder="Password..."
                        />
                      </div>
                      <div className="flex gap-[30px] items-center">
                        <Checkbox defaultSelected size="sm" color="success">
                          REMEMBER ME
                        </Checkbox>
                        <Link to={"#"}>
                          <li className="list-none">Lost your password?</li>
                        </Link>
                      </div>
                      <button className="py-[12px] px-[20px] bg-teal-400 rounded-[25px] uppercase font-semibold text-[17px] text-[white]">
                        Login
                      </button>
                      <div className="flex justify-center gap-[10px]">
                        <p>Don't have an account?</p>
                        <Link to={"/register"}>
                          <li className="list-none text-[#1e90ff] ">Sign up</li>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
            <button
              className="py-[5px] px-[25px] uppercase font-[600]"
              id="buy-course"
            >
              Buy course
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
