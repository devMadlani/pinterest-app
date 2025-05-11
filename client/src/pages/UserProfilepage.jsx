import React, { useState } from "react";
import Image from "../components/Image";
import Gallery from "../components/Gallery";
import Collection from "../components/Collection";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../utils/apiRequest";

const UserProfilepage = () => {
  const [isActive, setIsActive] = useState(0);
  const { username } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["profile", username],
    queryFn: () => apiRequest.get(`users/${username}`).then((res) => res.data),
  });

  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;
  if (!data) return <h1>User not found</h1>;
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        src={data.img || "general/noAvatar.png"}
        w={100}
        h={100}
        className="rounded-full object-cover"
      />
      <h1 className="text-4xl font-medium">{data.displayName}</h1>
      <span className="text-gray-400 font-medium">@{data.username}</span>
      <div className="font-medium ">10 followers - 10 following</div>
      <div className="flex items-center gap-8">
        <Image path="general/share.svg" />
        <div className="flex gap-4">
          <button className="p-4 rounded-4xl font-bold cursor-pointer bg-gray-200/70">
            Message
          </button>
          <button className="p-4 rounded-4xl font-bold cursor-pointer bg-[#e50829] text-white hover:bg-[#c1011e]">
            follow
          </button>
        </div>
        <Image path="general/more.svg" />
      </div>
      <div className="flex gap-4 mt-8 mb-4 font-medium">
        <span
          className={`cursor-pointer py-2 hover:text-[#808080] ${
            isActive === 0 && "border-b-[3px] border-black"
          } `}
          onClick={() => setIsActive(0)}
        >
          Created
        </span>
        <span
          className={`cursor-pointer py-2 hover:text-[#808080] ${
            isActive === 1 && "border-b-[3px] border-black"
          } `}
          onClick={() => setIsActive(1)}
        >
          Saved
        </span>
      </div>
      {isActive === 0 ? <Gallery userId={data._id} /> : <Collection />}
    </div>
  );
};

export default UserProfilepage;
