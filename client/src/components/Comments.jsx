import React, { useState } from "react";
import Image from "./Image";
import EmojiPicker from "emoji-picker-react";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../utils/apiRequest";
import Comment from "./Comment";

const Comments = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    isPending,
    error,
    data: comments,
  } = useQuery({
    queryKey: ["boards", id],
    queryFn: () => apiRequest.get(`comments/${id}`).then((res) => res.data),
  });

  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;
  if (!comments) return <h1>Pin not found</h1>;
  return (
    <div className="flex-1 flex flex-col gap-4  min-h-0">
      <div className="flex-1  flex flex-col gap-4 overflow-y-auto">
        <span>
          {comments.length === 0
            ? "No comments"
            : comments?.length + " comments"}
        </span>
        {comments?.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
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
