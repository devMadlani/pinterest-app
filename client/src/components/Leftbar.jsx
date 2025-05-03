import React from "react";
import Image from "./Image";
import { Link } from "react-router";

const Leftbar = () => {
  return (
    <div className="flex flex-col justify-between items-center w-[72px] h-screen sticky top-0 py-4 border-r border-[#e9e9e9] overflow-y-auto ">
      <div className="flex flex-col items-center gap-6">
        <Link
          to=""
          className="size-6 hover:bg-[#f1f1f1] flex items-center justify-center"
        >
          <Image path="/general/logo.png" alt="" className="size-6" />
        </Link>
        <Link
          to=""
          className="size-12 hover:bg-[#f1f1f1] flex items-center justify-center"
        >
          <Image path="/general/home.svg" alt="" />
        </Link>
        <Link
          to="/create"
          className="size-12 hover:bg-[#f1f1f1] flex items-center justify-center"
        >
          <Image path="/general/create.svg" alt="" />
        </Link>
        <Link
          to=""
          className="size-12 hover:bg-[#f1f1f1] flex items-center justify-center"
        >
          <Image path="/general/updates.svg" alt="" />
        </Link>
        <Link
          to=""
          className="size-12 hover:bg-[#f1f1f1] flex items-center justify-center"
        >
          <Image path="/general/messages.svg" alt="" />
        </Link>
      </div>
      <Link href="" className="size-12 flex items-center justify-center">
        <Image path="/general/settings.svg" alt="" />
      </Link>
    </div>
  );
};

export default Leftbar;
