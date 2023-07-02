import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";

function Gallery() {
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
    <div>
      <div>
      <div className="pages-main-bck flex justify-center items-center py-[130px] max-md:flex-col max-md:gap-[50px]">
        <h2 className="uppercase text-[white] font-[600] text-[60px] tracking-[5px] pr-[50px] max-md:pr-0">
          Gallery
        </h2>
        <div className="pl-[50px] text-white max-md:pl-0 max-md:text-center">
            <p>THE BEST DEMO EDUCATION</p>
            <span>It is a long established fact that a reade.</span>
          </div>
        </div>
      </div>
      <div className="py-[100px] max-w-[1200px] flex flex-col gap-[30px] mx-auto max-xl:px-[30px]">
        <h2 className="text-center uppercase text-[23px] font-[600] border-[#00bdbd72] border-b-[1px] pb-[10px]">All Images</h2>
        <div className="flex flex-wrap gap-[48px] border-[#00bdbd72] border-b-[1px] pb-[30px] max-xl:gap-[33px] max-lg:gap-[42px] max-lg:justify-center">
          {data.map((d) => {
            return (
              <div className="w-[22%] relative max-xl:w-[31%] max-lg:w-[47%] max-md:w-[100%]" id="gallery-img" key={d.image}>
                <img
                  src={d.image}
                  alt=""
                  onClick={() => choosePhote(d.image)}
                  className="gallery-photo w-[100%] h-[250px]"
                />
                <p onClick={() => choosePhote(d.image)} className="absolute text-[white] cursor-pointer top-0 gallery-zoom text-center pt-[105px] flex uppercase font-[900] text-[30px]">Click me</p>
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

export default Gallery;
