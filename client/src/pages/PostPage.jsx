import React from "react";
import Image from "../components/Image";
import PostInteractions from "../components/PostInteractions";
import { Link, useParams } from "react-router";
import Comments from "../components/Comments";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../utils/apiRequest";
const PostPage = () => {
  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["pin", id],
    queryFn: () => apiRequest.get(`pins/${id}`).then((res) => res.data),
  });

  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;
  if (!data) return <h1>Pin not found</h1>;
  return (
    <div className="flex justify-center gap-8">
      <button>Go back</button>
      <div className="w-full flex-1    md:w-[70%] md:max-h-[820px] flex flex-col md:flex-row border border-[#e9e9e9] rounded-4xl overflow-hidden">
        <div className="flex-1 bg-[#c0a68c]  ">
          <Image
            src={data.media}
            w={736}
            alt=""
            className="size-full object-cover"
          />
        </div>
        <div className="flex-1 h-full flex flex-col gap-8 p-4 overflow-hidden">
          <PostInteractions />
          <Link
            to={`/${data.user.username}`}
            className="flex items-center gap-2"
          >
            <Image
              src={data.user.img}
              alt=""
              className="size-8 rounded-full "
            />
            <span className="text-sm">{data.user.displayName}</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
