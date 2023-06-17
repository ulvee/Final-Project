import React from "react";
import LogoKit from "../assets/images/logo-kit.png";
import BckFooter from "../assets/images/bk-footer-ct.png";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineAndroid, AiOutlineApple } from "react-icons/ai";

function Footer() {
  return (
    <div className="custom-footer pt-[100px] bp-[30px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col">
          <div className="footer-first-item flex justify-between items-center">
            <div className="footer-bck relative">
              <img src={BckFooter} alt="" className="w-[100%]" />
              <div className="bg-[white] flex flex-col w-[85%] gap-[30px] py-[30px] px-[20px] rounded-[10px] absolute top-[10px] left-[20px]">
                <div>
                  <img src={LogoKit} alt="" />
                </div>
                <div className="flex flex-col gap-[10px] text-[gray]">
                  <p className="flex items-center gap-[12px]">
                    {" "}
                    <BsTelephoneFill className="text-[#ffa0a0] text-[18px]" />{" "}
                    (04) 3245-6988
                  </p>
                  <p className="flex items-center gap-[12px]">
                    {" "}
                    <IoMail className="text-[#84cdf0] text-[19px]" />{" "}
                    support@constructor.com
                  </p>
                  <p className="flex items-center gap-[12px]">
                    {" "}
                    <MdLocationOn className="text-[#eec387] text-[20px]" />
                    A26BT5 Building, SilverC <br /> Street, London, England
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-[50px] text-[white] ">
              <div className="flex flex-col gap-[20px]">
                <h2 className="text-[20px] uppercase font-[700]">
                  Useful Links
                </h2>
                <div className="flex flex-col gap-[10px]">
                  <li>About us</li>
                  <li>Blog</li>
                  <li>Buddy Profile</li>
                  <li>Become an Instructor</li>
                  <li>Membership</li>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <h2 className="text-[20px] uppercase font-[700]">Categories</h2>
                <div className="flex flex-col gap-[10px]">
                  <li>Web Development</li>
                  <li>Design</li>
                  <li>Business</li>
                  <li>Photography</li>
                  <li>Technology</li>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] w-[35%] ">
              <div className="flex gap-[20px]">
                <button className="bg-[#2b2b2b] text-[white] rounded-[8px] py-[12px] px-[30px] flex items-center uppercase gap-[10px]">
                  <AiOutlineApple className="text-[white] text-[25px]" /> App
                  Store
                </button>
                <button className="bg-[#2b2b2b] text-[white] rounded-[8px] py-[12px] px-[30px] flex items-center uppercase gap-[10px]">
                  <AiOutlineAndroid className="text-[white] text-[25px]" />{" "}
                  Google Play
                </button>
              </div>
              <div className="flex flex-col gap-[20px]">
                <h2 className="text-white text-[20px] uppercase font-[700]">
                  SUBCRIBE NEW LETTERS
                </h2>
                <p className="text-white">
                  Enter your email and we'll send you more information.
                </p>
                <form
                  action=""
                  className="mx-auto flex justify-between pl-[30px] pr-[5px] py-[5px] w-[100%] shadow-lg rounded-[35px]"
                  id="footer-form"
                >
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    className="w-[85%] py-[10px] bg-transparent outline-none placeholder:text-[white]"
                  />
                  <button className="px-[20px] py-[10px] rounded-[30px] uppercase font-[700] text-[#6f6f6f]">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center py-[20px]">
            <div className="text-[white] flex items-center gap-[5px]">
              <p className="font-[700] cursor-pointer">
                Course Builder | Corporate Training WordPress Theme{" "}
              </p>
              <p>© Powered by</p>
              <p className="font-[700] cursor-pointer">ThimPress.</p>
            </div>
            <div className="flex gap-[20px] items-center">
              <p className="cursor-pointer text-[18px] text-[white]">
                Tearm of use
              </p>
              <p className="cursor-pointer text-[18px] text-[white]">
                Privacy policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
