import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import apiRequest from "../utils/apiRequest";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CommentForm = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [desc, setDesc] = useState("");
  const addComment = async (comment) => {
    const res = await apiRequest.post("/comments", comment);
    return res.data;
  };
  const handleEmojiClick = (emoji) => {
    setDesc((prev) => prev + emoji.emoji);
    setIsOpen(false);
  };
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", id] });
      setDesc("");
      setIsOpen(false);
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({ description: desc, pin: id });
  };
  return (
    <form
      className="flex items-center gap-4 p-4 rounded-4xl bg-[#f1f1f1]"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Add a comment"
        className="flex-1  outline-none bg-transparent text-base"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <div className=" cursor-pointer text-xl relative">
        <div onClick={() => setIsOpen(!isOpen)}>😊</div>
        {isOpen && (
          <div className="absolute right-0 bottom-[50px]">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </form>
  );
};

export default CommentForm;
