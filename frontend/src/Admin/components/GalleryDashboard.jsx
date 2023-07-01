import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import Sidebar from "./SidebarDashboard";

function GalleryDashboard() {
  const [data, setData] = useState([]);
  const [choosedPhoto, setChoosedPhoto] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/gallery");
    setData(res.data);
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
      <div className="px-[100px] py-[30px] w-[80%] flex flex-col gap-[50px] mx-auto max-xl:px-[30px] bg-[#80808049]">
      <h1 className="bg-[blue] px-[30px] py-[10px]">Gallery</h1>

        <div className="flex flex-wrap gap-[48px] max-xl:gap-[33px] max-lg:gap-[42px] max-lg:justify-center">
          {data.map((d) => {
            return (
              <div
                className="w-[30%] relative max-xl:w-[31%] max-lg:w-[47%] max-md:w-[100%]"
                id="gallery-img"
                key={d.image}
              >
                <img
                  src={d.image}
                  alt=""
                  onClick={() => choosePhote(d.image)}
                  className="gallery-photo w-[100%]"
                />
                <p
                  onClick={() => choosePhote(d.image)}
                  className="absolute text-[white] cursor-pointer top-0 gallery-zoom text-center pt-[105px] flex uppercase font-[900] text-[30px]"
                >
                  Click me
                </p>
              </div>
            );
          })}
        </div>
      </div>

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
