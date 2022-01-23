import React from "react";
import post from "../../../assets/media/post.png";

const PostGuide = () => {
  return (
    <>
      <div className="bg-white rounded w-75 mt-4">
        <ul className="list-group p-2">
          <li className="list-group-item fw-bold">
            <img src={post} width={40} />
            {" Posting to Reddit"}
          </li>
          <li className="list-group-item">1. Remember the human</li>
          <li className="list-group-item">
            2. Behave like you would in real life
          </li>
          <li className="list-group-item">
            3. Look for the original source of content
          </li>
          <li className="list-group-item">
            4. Search for duplicates before posting
          </li>
          <li className="list-group-item">5. Read the community’s rules</li>
        </ul>
      </div>
      <p className="text-muted pt-4 w-75">
        Please be mindful of reddit's{" "}
        <a
          href="https://www.reddit.com/help/contentpolicy"
          className="fw-primary fw-bold"
        >
          content policy
        </a>{" "}
        and practice good{" "}
        <a
          href="https://www.reddit.com/wiki/reddiquette"
          className="fw-primary fw-bold"
        >
          reddiquette
        </a>
        .
      </p>
    </>
  );
};

export default PostGuide;
