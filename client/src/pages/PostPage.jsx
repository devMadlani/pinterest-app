import React from "react";
import Image from "../components/Image";
import PostInteractions from "../components/PostInteractions";
import { Link } from "react-router";
import Comments from "../components/Comments";
const PostPage = () => {
  return (
    <div className="flex justify-center gap-8">
      <button>Go back</button>
      <div className="w-full flex-1    md:w-[70%] md:max-h-[820px] flex flex-col md:flex-row border border-[#e9e9e9] rounded-4xl overflow-hidden">
        <div className="flex-1 bg-[#c0a68c]  ">
          <Image
            path={"/pins/pin1.jpeg"}
            w={736}
            alt=""
            className="size-full object-cover"
          />
        </div>
        <div className="flex-1 h-full flex flex-col gap-8 p-4 overflow-hidden">
          <PostInteractions />
          <Link to="/john" className="flex items-center gap-2">
            <Image
              path="/general/noAvatar.png"
              className="size-8 rounded-full "
            />
            <span className="text-sm">John Deo</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
