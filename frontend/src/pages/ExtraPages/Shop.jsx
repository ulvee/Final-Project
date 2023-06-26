import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";

function Galeri() {
  const [veri, setVeri] = useState([]);
  const [secilenResim, setSecilenResim] = useState(null);
  const [modalAcikMi, setModalAcikMi] = useState(false);

  const veriAl = async () => {
    const cevap = await axios.get("http://localhost:8080/gallery");
    setVeri(cevap.data);
  };

  useEffect(() => {
    veriAl();
  }, []);

  const resmiSec = (resim) => {
    setSecilenResim(resim);
    setModalAcikMi(true);
  };

  return (
    <div>
      <div>
        <div className="pages-main-bck flex justify-center items-center py-[130px]">
          <h2 className="uppercase text-[white] font-[600] text-[60px] tracking-[5px] pr-[50px]">
            Galeri
          </h2>
          <div className="pl-[50px] text-white">
            <p>EN İYİ DEMO EĞİTİM</p>
            <span>Okuyucunun, bir yayınevinin düzenlemesiyle Lorem Ipsum kullanmanın birinin düşünülemez olduğu gerçeğe bakılarak</span>
          </div>
        </div>
      </div>
      <div className="py-[100px] max-w-[1200px] mx-auto">
        <div className="flex flex-wrap gap-[45px]">
          {veri.map((d) => (
            <div className="w-[22%]" key={d.id}>
              <img
                src={d.image}
                alt=""
                onClick={() => resmiSec(d.image)}
              />
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={modalAcikMi} onRequestClose={() => setModalAcikMi(false)}>
        {secilenResim && <img src={secilenResim} alt="" />}
      </Modal>
    </div>
  );
}

export default Galeri;
