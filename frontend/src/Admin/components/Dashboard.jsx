import React from "react";
import Sidebar from "./SidebarDashboard";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="py-[30px] w-[80%] px-[100px] flex flex-col gap-[60px] admin-right-background">
        <h1 className="bg-[#00000093] px-[30px] py-[10px] text-[25px] text-[white] font-bold uppercase rounded-[20px]">
          Dashboard
        </h1>
      </div>
    </div>
  );
}

export default Dashboard;
