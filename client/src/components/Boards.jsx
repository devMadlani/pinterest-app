import React from "react";
import Image from "./Image";
import apiRequest from "../utils/apiRequest";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";
import { Link } from "react-router";
const Boards = ({ userId }) => {
  const {
    isPending,
    error,
    data: boards,
  } = useQuery({
    queryKey: ["boards", userId],
    queryFn: () => apiRequest.get(`boards/${userId}`).then((res) => res.data),
  });

  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;
  if (!boards) return <h1>Pin not found</h1>;
  return (
    <div className="w-full  grid grid-cols-2  gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
      {boards?.map((board) => (
        <Link
          to={`/search?boardId=${board._id}`}
          key={board._id}
          className="cursor-pointer flex flex-col gap-2"
        >
          <Image
            src={board.firstPin.media}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="flex flex-col">
            <h1 className="text-base font-medium">{board.title}</h1>
            <span className="text-[13px] text-[#808080]">
              {board.PinCount} - {format(board.createdAt)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Boards;
