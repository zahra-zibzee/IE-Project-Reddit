import React from "react";
import { useState } from "react/cjs/react.development";

const LinkArea = ({ getLink }) => {
  const [link, setLink] = useState("");

  const handleChange = (urlValue) => {
    setLink(urlValue);
    getLink(urlValue);
  }

  return (
    <input
      className="form-control pb-5"
      type="text"
      placeholder="Url"
      onChange={(e) => handleChange(e.target.value)}
      value={link}
    ></input>
  );
};

export default LinkArea;
