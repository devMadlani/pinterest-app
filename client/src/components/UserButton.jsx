import React, { useState } from "react";
import Image from "./Image";
import apiRequest from "../utils/apiRequest";
import { Link, useNavigate } from "react-router";
import useAuthStore from "../store/authStore";

const UserButton = () => {
  const { currentUser, removeCurrentUser } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async (req, res) => {
    try {
      await apiRequest.post("/users/auth/logout");
      removeCurrentUser();
      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };
  return currentUser ? (
    <div className="hidden sm:flex gap-1 items-center">
      <Image
        path={currentUser.img || "/general/noAvatar.png"}
        alt=""
        className="size-8"
      />
      <div
        className="size-6 relative hover:bg-[#f1f1f1] flex items-center justify-center rounded-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image path="/general/arrow.svg" className="size-3 " />
        {isOpen && (
          <div className="absolute z-50 top-[120%] right-0 bg-white  border border-[#e9e9e9] rounded-lg p-4 text-sm shadow-lg">
            <Link
              to={`/profile/${currentUser.username}`}
              className="p-2 rounded-lg cursor-pointer hover:bg-[#f1f1f1] text-gray-900"
            >
              Profile
            </Link>
            <p className="p-2 rounded-lg cursor-pointer hover:bg-[#f1f1f1] text-gray-900">
              Setting
            </p>
            <p
              onClick={handleLogout}
              className="p-2 rounded-lg cursor-pointer hover:bg-[#f1f1f1] text-gray-900"
            >
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  ) : (
    <Link to="/auth" className="text-base rounded-2xl p-3 hover:bg-[#f1f1f1]">
      Login / Signup
    </Link>
  );
};

export default UserButton;
