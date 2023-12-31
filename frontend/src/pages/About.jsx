import React, { useRef } from "react";
import OurStory from "../components/AboutSection/OurStory";
import OurValues from "../components/AboutSection/OurValues";
import OurEducation from "../components/AboutSection/OurEducation";
import OurService from "../components/AboutSection/OurService";
import OurContact from "../components/AboutSection/OurContact";
import {Helmet} from "react-helmet";

function About() {
  const ourStoryRef = useRef(null);
  const ourValuesRef = useRef(null);
  const ourEducationRef = useRef(null);
  const ourServiceRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="about-page-main">
      <Helmet>
        <title>About</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="pages-main-bck flex justify-center items-center py-[130px] max-md:flex-col max-md:gap-[50px]">
        <h2 className="uppercase text-[white] font-[600] text-[60px] tracking-[5px] pr-[50px] max-md:pr-0">
          About Us
        </h2>
        <div className="pl-[50px] text-white max-md:pl-0 max-md:text-center">
          {" "}
          <p>THE BEST DEMO EDUCATION</p>
          <span>It is a long established fact that a reade.</span>
        </div>
      </div>
      <div
        className="flex max-w-[1200px] text-[gray] text-[17px] font-[600] mx-auto gap-[50px] justify-center items-center py-[50px] max-md:flex-col"
        id="custom-about-pagination"
      >
        <div className="flex gap-[50px]">
          <li
            className="cursor-pointer"
            onClick={() => scrollToRef(ourStoryRef)}
          >
            OUR STORY
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToRef(ourValuesRef)}
          >
            OUR VALUES
          </li>
        </div>

        <div className="flex gap-[50px]">
          <li
            className="cursor-pointer"
            onClick={() => scrollToRef(ourEducationRef)}
          >
            OUR EDUCATIONS
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToRef(ourServiceRef)}
          >
            OUR SERVICE
          </li>
        </div>
      </div>
      <div ref={ourStoryRef}>
        <OurStory />
      </div>
      <div ref={ourValuesRef}>
        <OurValues />
      </div>
      <div ref={ourEducationRef}>
        <OurEducation />
      </div>
      <div ref={ourServiceRef}>
        <OurService />
      </div>
      <OurContact />
    </div>
  );
}

export default About;
