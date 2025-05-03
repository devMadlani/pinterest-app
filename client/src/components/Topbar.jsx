import React from "react";
import UserButton from "./UserButton";
import Image from "./Image";

const Topbar = () => {
  return (
    <div className="my-4 flex items-center gap-4 px-2">
      <div className="flex-1 bg-[#f1f1f1] rounded-2xl px-4 py-3  flex items-center gap-2">
        <Image path="/general/search.svg" alt="" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-transparent border-none outline-none"
        />
      </div>
      <UserButton />
    </div>
  );
};

export default Topbar;
