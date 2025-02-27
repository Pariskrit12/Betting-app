import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="flex bg-black min-h-screen ">

        <Sidebar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
