import React, { useEffect, useState } from "react";
import IKImage from "../components/Image";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router";
import Editor from "./Editor";

const CreatePage = () => {
  const { currentUser } = useAuthStore();
  const [file, setFile] = useState(null);
  const [previewImg, setPreviewImg] = useState({
    url: "",
    width: 0,
    height: 0,
  });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/auth");
    }
  }, [navigate, currentUser]);
  useEffect(() => {
    if (!file) return;
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      setPreviewImg({
        url: URL.createObjectURL(file),
        width: img.width,
        height: img.height,
      });
    };
  }, [file]);

  return (
    <div>
      <div className="border-y border-[#e9e9e9] py-4 flex items-center justify-between ">
        <h1 className="text-xl font-medium">
          {isEditing ? "Design your Pin" : "Create Pin"}
        </h1>
        <button className="bg-[#e50829] text-white py-3 px-4 rounded-4xl text-[15px] cursor-pointer hover:bg-[#c1011e]">
          {isEditing ? "Done" : "Publish"}
        </button>
      </div>
      {isEditing ? (
        <Editor previewImg={previewImg} />
      ) : (
        <div className="mt-8 flex flex-col  lg:flex-row lg:mb-16   justify-center gap-16">
          {previewImg.url ? (
            <div className="w-[375px] relative ">
              <img
                src={previewImg.url}
                alt=""
                className="rounded-4xl w-full "
              />
              <div
                className="absolute top-4 right-4 bg-white w-10 h-10 flex items-center justify-center p-1.5 rounded-full cursor-pointer"
                onClick={() => setIsEditing(true)}
              >
                <IKImage path="/general/edit.svg" />
              </div>
            </div>
          ) : (
            <>
              <label
                htmlFor="file"
                className="bg-[#e9e9e9] cursor-pointer text-lg flex justify-center items-center rounded-4xl border-dashed broder-[#dddddd] w-full  max-w-[375px] h-[574px] p-4 relative"
              >
                <div className="flex flex-col items-center gap-4">
                  <IKImage path="general/upload.svg" />
                  <span>Chooose file</span>
                </div>
                <div className="absolute bottom-8 text-[13px] text-center color-[#808080]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  debitis magnam accusantium.
                </div>
              </label>
              <input
                type="file"
                id="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </>
          )}
          <form className="flex flex-col gap-8 w-full max-w-[584px] ">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-[#808080]" htmlFor="title">
                Title
              </label>
              <input
                className="text-[13px] border-2 border-[#e9e9e9] rounded-2xl  p-4"
                type="text"
                placeholder="Add a title"
                name="title"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-[13px] text-[#808080]"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="text-[13px] border-2 border-[#e9e9e9] rounded-2xl  p-4 resize-none"
                rows={6}
                type="text"
                placeholder="Add a detailed description"
                name="description"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-[#808080]" htmlFor="link">
                Link
              </label>
              <input
                className="text-[13px] border-2 border-[#e9e9e9] rounded-2xl  p-4"
                type="text"
                placeholder="Add a link"
                name="link"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-[#808080]" htmlFor="board">
                Board
              </label>
              <select
                className="text-[13px] border-2 border-[#e9e9e9] rounded-2xl  p-4"
                name="board"
                id="board"
              >
                <option value="">Choose a board</option>
                <option value="1">Board 1</option>
                <option value="2">Board 2</option>
                <option value="3">Board 3</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-[#808080]" htmlFor="tags">
                Tagged topics
              </label>
              <input
                className="text-[13px] border-2 border-[#e9e9e9] rounded-2xl  p-4"
                type="text"
                placeholder="Add tags"
                name="tags"
              />
              <small className="text-[13px] text-[#a6a6a6]">
                Don&apoes;t worry, people won&apoes;t see your tags
              </small>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreatePage;
