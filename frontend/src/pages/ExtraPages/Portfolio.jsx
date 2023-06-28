import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

function Portfolio() {
  const [data, setData] = useState([]);
  const [choosedPhoto, setChoosedPhoto] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/projects");
    setData(res.data);
  };

  const navigate = useNavigate();

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
        <div className="pages-main-bck flex justify-center items-center py-[130px]">
          <h2 className="uppercase text-[white] font-[600] text-[60px] tracking-[5px] pr-[50px]">
            Projects
          </h2>
          <div className="pl-[50px] text-white">
            <p>THE BEST DEMO EDUCATION</p>
            <span>It is a long established fact that a reade.</span>
          </div>
        </div>
      </div>
      <div className="py-[100px] max-w-[1200px] flex flex-col gap-[30px] mx-auto">
        <div className="flex justify-center gap-[30px] border-[#00bdbd72] border-b-[1px] pb-[10px]">
          <button
            className="bg-[#00bdbd72] px-[10px] py-[7px] w-[150px] rounded-[7px] uppercase font-[600] text-[17px] text-white"
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          <button
            className="bg-[#00bdbd72] px-[10px] py-[7px] w-[150px] rounded-[7px] uppercase font-[600] text-[17px] text-white"
            onClick={() => setSelectedCategory("Language")}
          >
            Language
          </button>
          <button
            className="bg-[#00bdbd72] px-[10px] py-[7px] w-[150px] rounded-[7px] uppercase font-[600] text-[17px] text-white"
            onClick={() => setSelectedCategory("Marketing")}
          >
            Marketing
          </button>
          <button
            className="bg-[#00bdbd72] px-[10px] py-[7px] w-[150px] rounded-[7px] uppercase font-[600] text-[17px] text-white"
            onClick={() => setSelectedCategory("Courses")}
          >
            Courses
          </button>
        </div>
        <div className="flex flex-wrap gap-[42px] border-[#00bdbd72] border-b-[1px] pb-[30px]">
          {data
            .filter(
              (d) =>
                selectedCategory === "All" || d.category === selectedCategory
            )
            .map((d) => {
              return (
                <div
                  className="w-[31%] relative h-[250px]"
                  id="gallery-img"
                  key={d.image}
                >
                  <img
                    src={d.image}
                    alt=""
                    onClick={() => choosePhote(d.image)}
                    className="gallery-photo h-[100%] w-[100%]"
                  />
                  <div className="absolute text-[white] bg-[blue] top-0 gallery-zoom pt-[70px] text-center">
                    <button className="uppercase rounded-[7px] bg-[#00747fa4] px-[15px] py-[2px] font-[700] text-[17px]" onClick={() => choosePhote(d.image)}>Zoom</button>
                    <br />
                    <br />
                    <p className="text-[red] text-[20px]">{d.category}</p>
                    <br />
                    <button className="text-[green] bg-white px-[15px] py-[2px] font-[700] text-[18px] rounded-[7px]" onClick={() => navigate(d._id)}>Details</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

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

export default Portfolio;
