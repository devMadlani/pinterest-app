import React from "react";
import useEditorStore from "../store/editorStore";
import Image from "./Image";

const Workspace = ({ previewImg }) => {
  const { textOptions, setTextOptions } = useEditorStore();
  return (
    <div className="flex-3 flex items-center justify-center bg-[#e9e9e9] py-16">
      <div className="w-[375px] rounded-4xl overflow-hidden flex items-center justify-center relative">
        <img src={previewImg.url} alt="" className="w-full" />
        {textOptions.text && (
          <div
            style={{
              left: textOptions.left,
              top: textOptions.top,
              fontSize: `${textOptions.fontSize}px`,
            }}
            className="absolute z-[999] max-w-full border border-dashed border-[#ff0000]"
          >
            <input
              className="w-full cursor-grab text-inherit outline-none"
              type="text"
              value={textOptions.text}
              onChange={(e) =>
                setTextOptions({ ...textOptions, text: e.target.value })
              }
              style={{
                color: textOptions.color,
              }}
            />
            <div
              className="absolute -top-9 right-0 bg-white w-8 h-8 flex items-center justify-center p-2 rounded-full cursor-pointer"
              onClick={() => setTextOptions({ ...textOptions, text: "" })}
            >
              <Image path="/general/delete.svg" alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workspace;
