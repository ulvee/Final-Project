import React from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function Sidebar() {
  return (
    <div className="py-[30px] px-[30px] w-[20%] h-[100vh] bg-[#2b008089] sticky top-0">
      <div className="flex flex-col gap-[50px] w-[100%]">
        <Link to={"/"}>
          <button>
            <img
              src="	https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/logo-kit.png"
              alt=""
            />
          </button>
        </Link>
          <Accordion
              allowToggle
              display="flex"
              flexDirection="column"
              rowGap="20px"
            >
              <div className="border-b border-t py-[5px]">
                <Link to={"/admin/courses"}>
                  <AccordionItem border="none">
                    <h2 className="font-[700] text-[white]">
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left" fontSize='20'>
                          Courses
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                </Link>
              </div>
              <div className="border-b border-t py-[5px]">
                <Link to={"/admin/gallery"}>
                  <AccordionItem border="none">
                    <h2 className="font-[700] text-[white]">
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left" fontSize='20'>
                          Gallery
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                </Link>
              </div>
              <div className="border-b border-t py-[5px]">
                <Link to={"/admin/project"}>
                  <AccordionItem border="none">
                    <h2 className="font-[700] text-[white]">
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left" fontSize='20'>
                          Project
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                </Link>
              </div>
              <div className="border-b border-t py-[5px]">
                <AccordionItem border="none">
                  <h2 className="font-[700] text-[white]">
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontSize='20'>
                        Post
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} display='flex' flexDirection='column' rowGap='10px' textColor='white' paddingLeft='7'>
                    <Link to={"/"}>
                      <li className="option ">Courses</li>
                    </Link>

                    <Link to={"/login"}>
                      <li className="option">Gallery</li>
                    </Link>

                    <Link to={"/register"}>
                      <li className="option">Project</li>
                    </Link>
                  </AccordionPanel>
                </AccordionItem>
              </div>
            </Accordion>
      </div>
    </div>
  );
}

export default Sidebar;
