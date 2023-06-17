import React from "react";

function Create() {
  return (
    <section className="bg-[url('http://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/header-search-bk.png?id=6825)')] bg-cover bg-no-repeat bg-center h-[100%] pt-[150px] flex justify-center items-end">
      <div className="flex flex-col gap-[50px]">
        <div className="text-center">
          <p className="text-[27px]">Create and sell your</p>
          <h2 className="text-[38px]">own beautiful online courses</h2>
        </div>
        <form action="" className="mx-auto bg-white flex justify-between pl-[45px] pr-[13px] py-[10px] w-[100%] shadow-lg rounded-[35px]" id="sec-1-form">
          <input type="text" placeholder="What do you wnat to learn today?" className="w-[85%] py-[10px] outline-none"/>
          <button className="px-[20px] w-[15%] py-[13px] uppercase font-[600]">Search</button>
        </form>
        <img
          src="	https://coursebuilder.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/header-search.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default Create;
