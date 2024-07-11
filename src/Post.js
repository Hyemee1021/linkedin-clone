import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p> {message} </p>
      </div>
      {/* 1:35:58 */}
      <div className="post__buttons">
        <InputOption Icon={ThumbUpIcon} title="Like" color="gray" />
      </div>
    </div>
  );
};

export default Post;
