import React from "react";
import Popular from "../components/CoursesSection/Popular";
import CoursesDetails from "../components/CoursesSection/CoursesDetails";
import GetStarted from "../components/CoursesSection/GetStarted";
import { Helmet } from "react-helmet";

function Courses() {
  return (
    <div>
      <Helmet>
        <title>Courses</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="pages-main-bck flex justify-center items-center py-[130px] max-md:flex-col max-md:gap-[50px]">
        <h2 className="uppercase text-[white] font-[600] text-[60px] tracking-[5px] pr-[50px] max-md:pr-0">
          Courses
        </h2>
        <div className="pl-[50px] text-white max-md:pl-0 max-md:text-center">
          {" "}
          <p>THE BEST DEMO EDUCATION</p>
          <span>It is a long established fact that a reade.</span>
        </div>
      </div>
      <Popular />
      <CoursesDetails />
      <GetStarted />
    </div>
  );
}

export default Courses;
