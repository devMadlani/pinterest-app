import React, { useState } from "react";

const UserButton = () => {
  const currentUser = true;
  const [isOpen, setIsOpen] = useState(false);
  return currentUser ? (
    <div className="hidden sm:flex gap-1 items-center">
      <img src="/general/noAvatar.png" alt="" className="size-8" />
      <div
        className="size-6 relative hover:bg-[#f1f1f1] flex items-center justify-center rounded-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/general/arrow.svg" className="size-3 " />
        {isOpen && (
          <div className="absolute top-[120%] right-0 bg-white  border border-[#e9e9e9] rounded-lg p-4 text-sm shadow-lg">
            <p className="p-2 rounded-lg cursor-pointer hover:bg-[#f1f1f1] text-gray-900">
              Profile
            </p>
            <p className="p-2 rounded-lg cursor-pointer hover:bg-[#f1f1f1] text-gray-900">
              Setting
            </p>
            <p className="p-2 rounded-lg cursor-pointer hover:bg-[#f1f1f1] text-gray-900">
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  ) : (
    <a href="/" className="text-base rounded-2xl p-3 hover:bg-[#f1f1f1]">
      Login / Signup
    </a>
  );
};

export default UserButton;
