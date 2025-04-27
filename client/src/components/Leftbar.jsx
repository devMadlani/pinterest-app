import React from "react";

const Leftbar = () => {
  return (
    <div className="flex flex-col justify-between items-center w-[72px] h-screen sticky top-0 py-4 border-r border-[#e9e9e9] overflow-y-auto ">
      <div className="flex flex-col items-center gap-6">
        <a
          href=""
          className="size-6 hover:bg-[#f1f1f1] flex items-center justify-center"
        >
          <img src="/general/logo.png" alt="" className="size-6" />
        </a>
        <a
          href=""
          className="size-12 hover:bg-[#f1f1f1] flex items-center justify-center"
        >
          <img src="/general/home.svg" alt="" />
        </a>
        <a
          href=""
          className="size-12 hover:bg-[#f1f1f1] flex items-center justify-center"
        >
          <img src="/general/create.svg" alt="" />
        </a>
        <a
          href=""
          className="size-12 hover:bg-[#f1f1f1] flex items-center justify-center"
        >
          <img src="/general/updates.svg" alt="" />
        </a>
        <a
          href=""
          className="size-12 hover:bg-[#f1f1f1] flex items-center justify-center"
        >
          <img src="/general/messages.svg" alt="" />
        </a>
      </div>
      <a href="" className="size-12 flex items-center justify-center">
        <img src="/general/settings.svg" alt="" />
      </a>
    </div>
  );
};

export default Leftbar;
