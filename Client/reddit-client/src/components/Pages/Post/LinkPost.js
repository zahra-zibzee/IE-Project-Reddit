import React from "react";
import linkLogo from "../../../assets/media/link.png";

const LinkPost = (params) => {
  const link = params.link;
  return (
    <>
      <a href={link}>
        <div className="contaier p-4 border border-info border-1 rounded w-25 m-auto mt-3">
          <img className="ms-3" src={linkLogo} width="60" />
        </div>
      </a>
      <div className="row mt-2">
        <a href={link} className="m-auto container text-center">{link}</a>
      </div>
    </>
  );
};

export default LinkPost;
