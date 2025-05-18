import React from "react";
import Layer from "../components/Layer";
import Workspace from "../components/Workspace";
import Options from "../components/Options";

const Editor = ({ previewImg }) => {
  return (
    <div className="flex gap-4 ">
      <Layer previewImg={previewImg} />
      <Workspace previewImg={previewImg} />
      <Options previewImg={previewImg} />
    </div>
  );
};

export default Editor;
