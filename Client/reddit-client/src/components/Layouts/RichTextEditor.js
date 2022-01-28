import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

const RichtextEditor = ({ getText }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    readonly: false,
    height: 400,
  };
  const handleUpdate = (value) => {
    const editorContent = value;
    setContent(editorContent);
    getText(editorContent);
  };

  return (
    <div className="App">
      {/* <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onChange={(e) => handleUpdate(e)}
        onBlur={(e) => handleUpdate(e)}
      /> */}
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
      <textarea
        className="form-control"
        onChange={(e) => handleUpdate(e.target.value)}
      ></textarea>
    </div>
  );
};

export default RichtextEditor;
