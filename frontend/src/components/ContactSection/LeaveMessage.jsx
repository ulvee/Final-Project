import React from "react";

function LeaveMessage() {
  return (
    <div className="py-[100px]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[50px]">
        <div className="flex flex-col items-center gap-[20px]">
          <h2 className="text-[44px]">Leave a Message</h2>
          <p className="text-[gray]">
            Your email address will not be published. Required fields are
            marked.
          </p>
        </div>
        <form action="" className="flex flex-col gap-[30px] justify-center items-center w-[100%]">
          <div className="flex justify-between w-[100%]">
            <input
              type="text"
              placeholder="Name"
              className="border-[1px] border-[#80808081] rounded-[5px] w-[32%] py-[10px] px-[20px] placeholder:italic placeholder:font-[500] outline-none hover:border-[#60d3c6]"
            />
            <input
              type="text"
              placeholder="Email"
              className="border-[1px] border-[#80808081] rounded-[5px] w-[32%] py-[10px] px-[20px] placeholder:italic placeholder:font-[500] outline-none hover:border-[#60d3c6]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border-[1px] border-[#80808081] rounded-[5px] w-[32%] py-[10px] px-[20px] placeholder:italic placeholder:font-[500] outline-none hover:border-[#60d3c6]"
            />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="border-[1px] w-[100%] border-[#80808081] rounded-[5px] pt-[20px] px-[20px] placeholder:italic placeholder:font-[500] outline-none hover:border-[#60d3c6]"
          ></textarea>
          <button className="bg-[#60d3c6] text-[white] py-[13px] px-[45px] uppercase rounded-[30px] font-[500] text-[17px]">Send Your Message</button>
        </form>
      </div>
    </div>
  );
}

export default LeaveMessage;
