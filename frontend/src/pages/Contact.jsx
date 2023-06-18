import React from "react";
import FirstSection from "../components/ContactSection/FirstSection";
import SecondSection from "../components/ContactSection/SecondSection";
import LeaveMessage from "../components/ContactSection/LeaveMessage";

function Contact() {
  return (
    <div>
      <div className="pages-main-bck flex justify-center items-center py-[130px]">
        <h2 className="uppercase text-[white] font-[600] text-[60px] tracking-[5px] pr-[50px]">
          Contact
        </h2>
        <div className="pl-[50px] text-white">
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
