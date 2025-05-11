import React from "react";
import UserButton from "./UserButton";
import Image from "./Image";
import { useNavigate } from "react-router";

const Topbar = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate(`/search?search=${e.target[0].value}`);
  };
  return (
    <div className="my-4 flex items-center gap-4 px-2">
      <form
        onSubmit={handleSubmit}
        className="flex-1 bg-[#f1f1f1] rounded-2xl px-4 py-3  flex items-center gap-2"
      >
        <Image path="/general/search.svg" alt="" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-transparent border-none outline-none"
        />
      </form>
      <UserButton />
    </div>
  );
};

export default Topbar;
