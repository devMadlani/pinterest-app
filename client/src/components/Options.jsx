import React, { use, useState } from "react";
import useEditorStore from "../store/editorStore";
import { HexColorPicker } from "react-colorful";
const Options = () => {
  const { selectedLayer, textOptions, setTextOptions } = useEditorStore();
  const { isColorPickerOpen, setIsColorPickerOpen } = useState(false);
  return (
    <div className="flex-1">
      {selectedLayer === "text" ? (
        <div>
          <div>
            <span>Font Size</span>
            <input
              type="number"
              value={textOptions.fontSize}
              onChange={(e) =>
                setTextOptions({ ...textOptions, fontSize: e.target.value })
              }
            />
          </div>
          <div>
            <span>Color</span>
            <div>
              <div style={{ backgroundColor: textOptions.color }} />
            </div>
            {isColorPickerOpen && (
              <div>
                <HexColorPicker />
              </div>
            )}
          </div>
        </div>
      ) : (
        <>Canvas</>
      )}
    </div>
  );
};

export default Options;
