import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import React from "react";
import "./Post.css";

function Post({ displayName, userName, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src={avatar} alt="SKS" />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-headerText">
            <h3>
              {displayName}
              <span className="post-headerSpecial">
                {verified && <VerifiedUserIcon className="post-badge" />} @
                {userName}
              </span>
            </h3>
          </div>
          <div className="post-headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img className="post-image" src={image} alt="" />
        <div className="post-footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
