import React from "react";
import Leftbar from "../components/Leftbar";
import Topbar from "../components/Topbar";
import Gallery from "../components/Gallery";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex gap-4">
      <Leftbar />
      <div className="flex-1  mr-4">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
