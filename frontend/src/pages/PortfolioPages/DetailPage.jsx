import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

function DetailPage() {
  const params = useParams();
  const [data, setData] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/projects/${params.id}`
      );
      setData(res.data);
    } catch (error) {
      console.error("Error retrieving project data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-[#8b8b8b37]">
       <Helmet>
        <title>Details</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <div>
      <div className="pages-main-bck flex justify-center items-center py-[130px] max-md:flex-col max-md:gap-[50px]">
        <h2 className="uppercase text-[white] font-[600] text-[60px] tracking-[5px] pr-[50px] max-md:pr-0">
          Project Details
        </h2>
        <div className="pl-[50px] text-white max-md:pl-0 max-md:text-center">
            <p>THE BEST DEMO EDUCATION</p>
            <span>It is a long established fact that a reade.</span>
          </div>
        </div>
      </div>
      <div className="max-w-[500px] mx-auto py-[100px]">
        {data && (
          <div className="shadow-lg rounded-xl flex flex-col gap-[30px] bg-[white] pb-[20px]">
            <img src={data.image} alt="" className="w-[100%] rounded-t-xl h-[300px]" />
            <div className="px-[20px] flex flex-col gap-[20px]">
              <div className="flex gap-[10px]">
                {" "}
                <p className="uppercase font-[700] text-[18px]">
                  Category:
                </p>{" "}
                <span className="text-[#008cff] text-[17px]">
                  {data.category}
                </span>
              </div>
              <div className="flex gap-[10px]">
                {" "}
                <p className="uppercase font-[700] text-[18px]">Title:</p>{" "}
                <span className="text-[#008cff] text-[17px]">
                  Novum Inermis
                </span>
              </div>

              <Link to={"/projects"}>
                <button className=" text-[white] mt-[20px] uppercase font-[700] py-[10px] bg-[green] px-[20px] rounded-[10px]">
                  Go to Projects
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailPage;
