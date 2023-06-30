import React from "react";
import FirstSection from "../components/ContactSection/FirstSection";
import SecondSection from "../components/ContactSection/SecondSection";
import LeaveMessage from "../components/ContactSection/LeaveMessage";

function Contact() {
  return (
    <div>
      <div className="pages-main-bck flex justify-center items-center py-[130px] max-md:flex-col max-md:gap-[50px]">
        <h2 className="uppercase text-[white] font-[600] text-[60px] tracking-[5px] pr-[50px] max-md:pr-0">
          Contact
        </h2>
        <div className="pl-[50px] text-white max-md:pl-0 max-md:text-center">
          {" "}
          <p>THE BEST DEMO EDUCATION</p>
          <span>It is a long established fact that a reade.</span>
        </div>
      </div>
      <FirstSection />
      <SecondSection />
      <LeaveMessage />
    </div>
  );
}

export default Contact;
