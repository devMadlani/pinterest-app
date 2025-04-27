import React from "react";

const GalleryItemCard = ({ item }) => {
  return (
    <div
      className="flex relative"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <img src={item.media} className="w-full rounded-lg object-cover" alt="" />
    </div>
  );
};

export default GalleryItemCard;
