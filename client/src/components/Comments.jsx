import React, { useState } from "react";
import Image from "./Image";
import EmojiPicker from "emoji-picker-react";

const Comments = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex-1 flex flex-col gap-4  min-h-0">
      <div className="flex-1  flex flex-col gap-4 overflow-y-auto">
        <span>5 comments</span>
        <div className="flex gap-4">
          <Image
            path="/general/noAvatar.png"
            className="size-8 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">John Deo</span>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              ea? Quisquam, dolor?
            </p>
            <span className="text-xs text-[#a6a6a6]">1 hour ago</span>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            path="/general/noAvatar.png"
            className="size-8 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">John Deo</span>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              ea? Quisquam, dolor?
            </p>
            <span className="text-xs text-[#a6a6a6]">1 hour ago</span>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            path="/general/noAvatar.png"
            className="size-8 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">John Deo</span>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              ea? Quisquam, dolor?
            </p>
            <span className="text-xs text-[#a6a6a6]">1 hour ago</span>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            path="/general/noAvatar.png"
            className="size-8 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">John Deo</span>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              ea? Quisquam, dolor?
            </p>
            <span className="text-xs text-[#a6a6a6]">1 hour ago</span>
          </div>
        </div>
      </div>
      <form className="flex items-center gap-4 p-4 rounded-4xl bg-[#f1f1f1]">
        <input
          type="text"
          placeholder="Add a comment"
          className="flex-1  outline-none bg-transparent text-base"
        />
        <div className=" cursor-pointer text-xl relative">
          <div onClick={() => setIsOpen(!isOpen)}>😊</div>
          {isOpen && (
            <div className="absolute right-0 bottom-[50px]">
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Comments;
