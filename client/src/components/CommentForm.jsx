import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

const CommentForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
  );
};

export default CommentForm;
