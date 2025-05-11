import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../utils/apiRequest";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({ id }) => {
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
      <CommentForm />
    </div>
  );
};

export default Comments;
