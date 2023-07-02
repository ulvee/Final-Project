import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
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

function PortfolioDashboard() {
  const [data, setData] = useState([]);
  const [choosedPhoto, setChoosedPhoto] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [selectedData, setSelectedData] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    id: "",
    image: "",
    category: "",
  });

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/projects");
    setData(res.data);
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/projects/${id}`);
    await getData();
    onClose();
  };

  const navigate = useNavigate();

  const handleUpdate = (d) => {
    setUpdatedData({
      id: d._id,
      image: d.image,
      category: d.category,
    });
    setSelectedData(d);
    onOpen();
  };

  const updateData = async () => {
    try {
      await axios.put(
        `http://localhost:8080/projects/${updatedData.id}`,
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

  const choosePhote = (image) => {
    setChoosedPhoto(image);
    setOpenModal(true);
  };
  return (
    <div className="flex">
      <Helmet>
        <title>Admin</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <Sidebar />
      <div className="px-[100px] py-[30px] flex flex-col gap-[30px] w-[80%] mx-auto max-xl:px-[30px] max-md:py-[50px] admin-right-background">
      <h1 className="bg-[#00000093] px-[30px] py-[10px] text-[25px] text-[white] font-bold uppercase rounded-[20px]">Projects</h1>
        <div className="flex justify-center mt-[40px] gap-[30px] border-indigo-500 border-b-[1px] pb-[10px] max-md:flex-col">
          <div className="flex justify-center gap-[30px]">
            <button
              className="px-[10px] bg-indigo-500 py-[7px] w-[150px] rounded-[7px] uppercase font-[600] text-[17px] text-white"
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
            <button
              className="bg-indigo-500 px-[10px] py-[7px] w-[150px] rounded-[7px] uppercase font-[600] text-[17px] text-white"
              onClick={() => setSelectedCategory("Language")}
            >
              Language
            </button>
          </div>
          <div className="flex justify-center gap-[30px]">
            {" "}
            <button
              className="bg-indigo-500 px-[10px] py-[7px] w-[150px] rounded-[7px] uppercase font-[600] text-[17px] text-white"
              onClick={() => setSelectedCategory("Marketing")}
            >
              Marketing
            </button>
            <button
              className="bg-indigo-500 px-[10px] py-[7px] w-[150px] rounded-[7px] uppercase font-[600] text-[17px] text-white"
              onClick={() => setSelectedCategory("Courses")}
            >
              Courses
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-[45px] border-indigo-500 border-b-[1px] pb-[30px] max-xl:gap-[33px] max-lg:gap-[42px] max-lg:justify-center">
          {data
            .filter(
              (d) =>
                selectedCategory === "All" || d.category === selectedCategory
            )
            .map((d) => {
              return (
                <div
                  className="w-[30%] relative rounded-[10px] bg-white pb-[20px] flex flex-col gap-[30px] max-xl:w-[31%] max-lg:w-[47%] max-md:w-[100%] max-md:h-[330px]"
                  id="gallery-img"
                  key={d.image}
                >
                  <img
                    src={d.image}
                    alt=""
                    onClick={() => choosePhote(d.image)}
                    className="gallery-photo w-[100%] h-[250px] rounded-t-[10px]"
                  />
                  <span className="absolute top-[20px] rounded-l-[5px] right-0 bg-emerald-500 text-white font-semibold text-[18px] px-[15px] py-[5px]">{d.category}</span>
                  <div className="flex justify-between px-[25px]">
                    <Button colorScheme="red" onClick={() => deleteData(d._id)}>
                      Delete Item
                    </Button>

                    <Button colorScheme="blue" onClick={() => handleUpdate(d)}>
                      Update Item
                    </Button>
                  </div>
                </div>
              );
            })}
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

      <Modal
        className="bg-[#0000007e] w-[600px] h-[600px]"
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        overlayClassName="modal-overlay"
      >
        {choosedPhoto && (
          <img src={choosedPhoto} alt="" className="w-[100%] h-[100%]" />
        )}
      </Modal>
    </div>
  );
}

export default PortfolioDashboard;
