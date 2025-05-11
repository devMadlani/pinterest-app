import { useNavigate } from "react-router";
import Image from "./Image";

const GalleryItemCard = ({ item }) => {
  const optimizedHeight = (372 * item.height) / item.width;
  const navigate = useNavigate();
  return (
    <div
      className="flex relative group"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <Image
        src={item.media}
        h={optimizedHeight}
        w={372}
        className=" rounded-2xl  object-cover w-full "
      />

      <div
        onClick={() => navigate(`/pin/${item._id}`)}
        className="hidden group-hover:block group-hover:absolute  cursor-pointer  h-full w-full top-0 left-0 group-hover:bg-black/30 rounded-2xl "
      >
        <button className="bg-[#e50829]  text-sm text-white absolute top-2 right-2 rounded-3xl py-3 px-4 font-medium cursor-pointer w-max">
          Save
        </button>
        <div className="absolute bottom-2 right-2 flex gap-2 items-center">
          <button className="size-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
            <Image path="/general/share.svg" alt="" />
          </button>
          <button className="size-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
            <Image path="/general/more.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryItemCard;
