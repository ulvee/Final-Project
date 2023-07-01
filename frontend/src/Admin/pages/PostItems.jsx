import React from "react";
import Sidebar from "../components/SidebarDashboard";

function PostItems() {
  return (
    <div className="flex">
      <Sidebar />
        <div className="px-[100px] py-[30px] flex gap-[50px] w-[80%] mx-auto max-xl:px-[30px] max-md:py-[50px] bg-[#80808049]">
          <h1 className="bg-[blue] px-[30px] py-[10px]">Project</h1>
          <div>
            <form action="">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <button></button>
            </form>
          </div>
        </div>
    </div>
  );
}

export default PostItems;
