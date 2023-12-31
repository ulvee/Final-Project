import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { ProjectSchema } from "../../schema/ProjectForm";
import Sidebar from "../SidebarDashboard";
import { Helmet } from "react-helmet";

function ProjectPost() {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProjectSchema),
  });

  const postData = async () => {
    const values = getValues();
    await axios.post("http://localhost:8080/projects", {
      image: values.image,
      category: values.category,
    });
    reset();
  };

  return (
    <div className="flex">
      <Helmet>
        <title>Admin</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <Sidebar />
      <div className="w-[80%] flex flex-col justify-center relative px-[100px] admin-right-background">
        <h1 className="bg-[#00000093] px-[30px] py-[10px] text-[25px] text-[white] absolute w-[83%] top-[30px] font-bold uppercase rounded-[20px] max-xl:w-[80%] max-lg:w-[70%] max-md:w-[60%]">
          Project add item
        </h1>
        <form
          action=""
          onSubmit={handleSubmit(postData)}
          className="flex flex-col max-w-[600px] mx-auto gap-[30px] w-[100%]"
          id="register-form"
        >
          <div className="flex flex-col">
            <label htmlFor="image" className="px-[10px] pb-[5px]">
              Image
            </label>
            <input
              type="text"
              {...register("image")}
              name="image"
              placeholder="Image"
            />
            {errors.image?.message && (
              <p className="text-[red]">{errors.image?.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="category" className="px-[10px] pb-[5px]">
              Category
            </label>
            <input
              type="text"
              {...register("category")}
              name="category"
              placeholder="Category"
            />
            {errors.category?.message && (
              <p className="text-[red]">{errors.category?.message}</p>
            )}
          </div>
          <button className="py-[12px] px-[20px] bg-[#1e90ff] rounded-[10px] border-[1px] border-[#1e90ff] text-[white] uppercase text-[20px] font-[700] hover:bg-green-700 hover:border-green-700 duration-500">
            Add Items
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProjectPost;
