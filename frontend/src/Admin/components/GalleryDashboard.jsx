import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
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

function GalleryDashboard() {
  const [data, setData] = useState([]);
  const [choosedPhoto, setChoosedPhoto] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [selectedData, setSelectedData] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    id: "",
    image: "",
  });

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/gallery");
    setData(res.data);
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/gallery/${id}`);
    await getData();
    onClose();
  };

  const handleUpdate = (d) => {
    setUpdatedData({
      id: d._id,
      image: d.image,
    });
    setSelectedData(d);
    onOpen();
  };

  const updateData = async () => {
    try {
      await axios.put(
        `http://localhost:8080/gallery/${updatedData.id}`,
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
      <Sidebar />
      <div className="px-[100px] py-[30px] w-[80%] flex flex-col gap-[70px] mx-auto max-xl:px-[30px] admin-right-background">
      <h1 className="bg-[#00000093] px-[30px] py-[10px] text-[25px] text-[white] font-bold uppercase rounded-[20px]">Gallery</h1>
        <div className="flex flex-wrap gap-[48px] max-xl:gap-[33px] max-lg:gap-[42px] max-lg:justify-center">
          {data.map((d) => {
            return (
              <div
                className="w-[30%] bg-white shadow-md flex flex-col gap-[30px] pb-[20px] rounded-[10px] max-xl:w-[31%] max-lg:w-[47%] max-md:w-[100%]"
                
                key={d.image}
              >
                <img
                  src={d.image}
                  alt=""
                  onClick={() => choosePhote(d.image)}
                  className="gallery-photo w-[100%] h-[270px] rounded-t-[10px]"
                />
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
        className="bg-[#0000008a] w-[600px] h-[600px]"
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        overlayClassName="modal-overlay"
      >
        {choosedPhoto && <img src={choosedPhoto} alt="" className="w-[100%]" />}
      </Modal>
    </div>
  );
}

export default GalleryDashboard;
