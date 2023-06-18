import React from "react";
import Popular from "../components/CoursesSection/Popular";
import CoursesDetails from "../components/CoursesSection/CoursesDetails";

function Courses() {
  return (
    <div>
      <div className="pages-main-bck flex justify-center items-center py-[130px]">
        <h2 className="uppercase text-[white] font-[600] text-[60px] tracking-[5px] pr-[50px]">
          Courses
        </h2>
        <div className="pl-[50px] text-white">
          {" "}
          <p>THE BEST DEMO EDUCATION</p>
          <span>It is a long established fact that a reade.</span>
        </div>
      </div>
      <Popular />
      <CoursesDetails />
    </div>
  );
}

export default Courses;
