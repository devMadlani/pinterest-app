import React from "react";
import Image from "./Image";
import { format } from "timeago.js";

const Comment = ({ comment }) => {
  return (
    <div key={comment._id} className="flex gap-4">
      <Image
        src={comment.user.img || "/general/noAvatar.png"}
        className="size-8 rounded-full object-cover"
      />
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium">{comment.user.displayName}</span>
        <p className="text-sm ">{comment.description}</p>
        <span className="text-xs text-[#a6a6a6]">
          {format(comment.createdAt)}
        </span>
      </div>
    </div>
  );
};

export default Comment;
