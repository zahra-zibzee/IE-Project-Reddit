import React from "react";

const TextPost = (params) => {
  const text = params.text;
  return (
    <>
      <div className="row p-3">
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextPost;
