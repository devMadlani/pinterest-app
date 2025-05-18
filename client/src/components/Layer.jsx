import React from "react";
import Image from "./Image";
import useEditorStore from "../store/editorStore";

const Layer = () => {
  const { selectedLayer, setSelectedLayer, addText } = useEditorStore();
  const handleSelectedLayer = (layer) => {
    setSelectedLayer(layer);

    if (layer === "text") addText();
  };
  return (
    <div className="flex-1 flex flex-col gap-4 mt-8">
      <div>
        <h3 className="text-xl font-medium">Layer</h3>
        <p className="text-sm text-[#a6a6a6] mt-1">Select a layer to edit</p>
      </div>
      <div
        onClick={() => handleSelectedLayer("text")}
        className={`flex items-center gap-2 p-2 rounded-2xl cursor-pointer font-light text-sm hover:bg-[#f0f0f0] ${
          selectedLayer === "text" ? "bg-[#f0f0f0]" : ""
        }`}
      >
        <div className="size-12 rounded-lg overflow-hidden">
          <Image path="/general/text.png" w={48} h={48} />
        </div>
        <span>Add Text</span>
      </div>
      <div
        onClick={() => handleSelectedLayer("canvas")}
        className={`flex items-center gap-2 p-2 rounded-2xl cursor-pointer font-light text-sm hover:bg-[#f0f0f0] ${
          selectedLayer === "canvas" ? "bg-[#f0f0f0]" : ""
        }`}
      >
        <div
          style={{ backgroundColor: "teal" }}
          className="size-12 rounded-lg overflow-hidden"
        ></div>
        <span>Canvas</span>
      </div>
    </div>
  );
};

export default Layer;
