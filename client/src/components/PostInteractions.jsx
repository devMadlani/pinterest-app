import React from "react";
import Image from "./Image";

const PostInteractions = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 font-medium">
        <Image path="/general/react.svg" />
        273
        <Image path="/general/share.svg" />
        <Image path="/general/more.svg" />
      </div>
      <button className="bg-[#e50829] cursor-pointer text-white rounded-3xl py-3 px-4 font-bold ">
        Save
      </button>
    </div>
  );
};

export default PostInteractions;
