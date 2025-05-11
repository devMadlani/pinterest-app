import React from "react";
import GalleryItemCard from "./GalleryItemCard";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

const Gallery = ({ search, userId, boardId }) => {
  const fetchPins = async ({ pageParam, search, userId, boardId }) => {
    const res = await axios(
      `${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${pageParam}&search=${
        search || ""
      }&userId=${userId || ""}&boardId=${boardId || ""}`
    );
    return res.data;
  };
  const {
    data: pins,
    fetchNextPage,
    hasNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["pins", search, userId],
    queryFn: ({ pageParam = 0 }) =>
      fetchPins({ pageParam, search, userId, boardId }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
  });

  if (status === "error") {
    return <h1>Something went wrong</h1>;
  }
  if (status === "pending") {
    return <h1>Loading...</h1>;
  }
  const allPins = pins?.pages.flatMap((page) => page.pins) || [];

  return (
    <InfiniteScroll
      dataLength={allPins.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading...</h4>}
      endMessage={<h4>Yay! You have seen it all</h4>}
    >
      <div className="grid grid-cols-2  gap-4 auto-rows-[10px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7  ">
        {allPins.map((item) => (
          <GalleryItemCard key={item._id} item={item} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
