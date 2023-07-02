import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./SidebarDashboard";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  Button,
  useDisclosure,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";

function CoursesDashboard() {
  const [data, setData] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [selectedData, setSelectedData] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    id: "",
    image: "",
    title: "",
    category: "",
    price: 0,
  });

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/courses");
    setData(res.data);
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/courses/${id}`);
    await getData();
    onClose();
  };

  const toggle = () => {
    setSortAsc((prevSortAsc) => !prevSortAsc);
  };

  const handleUpdate = (d) => {
    setUpdatedData({
      id: d._id,
      image: d.image,
      title: d.title,
      category: d.category,
      price: d.price,
    });
    setSelectedData(d);
    onOpen();
  };

  const updateData = async () => {
    try {
      await axios.put(
        `http://localhost:8080/courses/${updatedData.id}`,
        updatedData
      );
      await getData();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex">
      <Helmet>
        <title>Admin</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Sidebar />
      <div className="py-[30px] w-[80%] px-[100px] flex flex-col gap-[60px] admin-right-background">
        <h1 className="bg-[#00000093] px-[30px] py-[10px] text-[25px] text-[white] font-bold uppercase rounded-[20px]">
          Courses
        </h1>
        <div className="max-lg:px-[30px] max-xl:px-[30px]">
          <div className="flex max-md:flex-col max-md:gap-[50px] max-lg:justify-center max-lg:gap-[50px] max-xl:justify-center max-xl:gap-[50px]">
            <div className="w-[100%] flex flex-col gap-[20px] max-md:w-[100%] max-md:px-[30px] max-lg:w-[70%]">
              <div className="w-[100%] flex justify-between">
                <button
                  onClick={toggle}
                  className="bg-[#60d3c6] px-[20px] py-[10px] rounded-[7px] text-[white] font-[600] text-[17px] uppercase"
                >
                  Sort by Price
                </button>
              </div>

              <div className="flex flex-wrap gap-[50px] max-lg:gap-[34px] max-xl:gap-[34px]">
                {data
                  .sort((a, b) =>
                    sortAsc ? a.price - b.price : b.price - a.price
                  )
                  .map((d) => {
                    return (
                      <div className="w-[30%] flex flex-col rounded-[5px] bg-[white] pb-[20px] shadow-md gap-[20px] max-md:w-[100%] max-lg:w-[46%] max-xl:w-[30%]">
                        <div className="relative popular-course-img">
                          <img
                            src={d.image}
                            alt=""
                            className="w-[100%] h-[250px] max-md:h-[370px] rounded-t-[5px]"
                          />
                          <span className="text-white bg-[#60d3c6] py-[12px] px-[25px] absolute top-[20px] uppercase font-[600] text-[18px] shadow-md right-0">
                            {d.category}
                          </span>
                          <span className="bg-[#8000ff71] text-[white] w-[100px] font-bold text-[17px] text-center py-[10px] uppercase absolute bottom-0 left-0">
                            $ {d.price}
                          </span>
                        </div>
                        <div className="flex flex-col gap-[20px] pl-[25px]">
                          <p className="text-[17px]">{d.title}</p>
                        </div>
                        <div className="flex justify-between px-[25px]">
                          <Button
                            colorScheme="red"
                            onClick={() => deleteData(d._id)}
                          >
                            Delete Item
                          </Button>

                          <Button
                            colorScheme="blue"
                            onClick={() => handleUpdate(d)}
                          >
                            Update Item
                          </Button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedData && (
        <div>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Update Item
                </AlertDialogHeader>

                <AlertDialogBody>
                  <form className="flex flex-col gap-[20px]" id="register-form">
                    <div className="flex flex-col">
                      <label htmlFor="image" className="px-[5px] pb-[5px]">
                        Image
                      </label>
                      <input
                        type="text"
                        id="image"
                        value={updatedData.image}
                        onChange={(e) =>
                          setUpdatedData({
                            ...updatedData,
                            image: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="title" className="px-[5px] pb-[5px]">
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        value={updatedData.title}
                        onChange={(e) =>
                          setUpdatedData({
                            ...updatedData,
                            title: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="category" className="px-[5px] pb-[5px]">
                        Category
                      </label>
                      <input
                        type="text"
                        id="category"
                        value={updatedData.category}
                        onChange={(e) =>
                          setUpdatedData({
                            ...updatedData,
                            category: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="flex flex-col">
                      {" "}
                      <label htmlFor="price" className="px-[5px] pb-[5px]">
                        Price
                      </label>
                      <input
                        type="number"
                        id="price"
                        value={updatedData.price}
                        onChange={(e) =>
                          setUpdatedData({
                            ...updatedData,
                            price: e.target.value,
                          })
                        }
                      />
                    </div>
                  </form>
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue" onClick={updateData} ml={3}>
                    Update
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </div>
      )}
    </div>
  );
}

export default CoursesDashboard;
