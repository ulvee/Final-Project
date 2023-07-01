import React from "react";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  flexbox,
} from "@chakra-ui/react";

import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const PlacementExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  return (
    <>
      <Button onClick={onOpen} colorScheme="whiteAlpha">
        <RxHamburgerMenu className="text-[30px] text-[black]" />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Link to={"/"}>
              <button>
                <img
                  src="	https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/logo-kit.png"
                  alt=""
                />
              </button>
            </Link>
          </DrawerHeader>
          <DrawerBody>
            <Accordion
              allowToggle
              pt={8}
              display="flex"
              flexDirection="column"
              rowGap="20px"
            >
              <div className="border-b border-t py-[5px]">
                <AccordionItem border="none">
                  <h2 className="font-[700] text-[#454545d4]">
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontSize='20'>
                        Home
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} display='flex' flexDirection='column' rowGap='10px' textColor='teal' fontWeight='500' paddingLeft='7'>
                    <Link to={"/"}>
                      <li className="option ">Home</li>
                    </Link>

                    <Link to={"/login"}>
                      <li className="option">Login</li>
                    </Link>

                    <Link to={"/register"}>
                      <li className="option">Register</li>
                    </Link>
                    <Link to={"/account"}>
                      <p className="option">Account</p>
                    </Link>
                  </AccordionPanel>
                </AccordionItem>
              </div>

              <div className="border-b border-t py-[5px]">
                <Link to={"/about"}>
                  <AccordionItem border="none">
                    <h2 className="font-[700] text-[#454545d4]">
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left" fontSize='20'>
                          About
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                </Link>
              </div>

              <div className="border-b border-t py-[5px]">
                <AccordionItem border="none">
                  <h2 className="font-[700] text-[#454545d4]">
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontSize='20'>
                        Courses
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} display='flex' flexDirection='column' rowGap='10px' textColor='teal' fontWeight='500' paddingLeft='7'>
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
                  </AccordionPanel>
                </AccordionItem>
              </div>

              <div className="border-b border-t py-[5px]">
                <AccordionItem border="none">
                  <h2 className="font-[700] text-[#454545d4]">
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontSize='20'>
                        Pages
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} display='flex' flexDirection='column' rowGap='10px' textColor='teal' fontWeight='500' paddingLeft='7'>
                    <Link to={"/gallery"}>
                      <li className="option">Gallery</li>
                    </Link>
                    <Link to={"/projects"}>
                      <p className="option">Portfolio</p>
                    </Link>
                  </AccordionPanel>
                </AccordionItem>
              </div>

              <div className="border-b border-t py-[5px]">
                <Link to={"/contact"}>
                  <AccordionItem border="none">
                    <h2 className="font-[700] text-[#454545d4]">
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left" fontSize='20'>
                          Contact
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                </Link>
              </div>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default PlacementExample;
