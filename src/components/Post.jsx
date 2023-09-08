import { Avatar } from "@mui/material";
import React from "react";
import image from "../images/Avatar.jpg";
import { VerifiedUser } from "@mui/icons-material";

const Post = () => {
  //   displayName, username, verified, text, image, avatar;
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src={image} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Hridoy Chandra{" "}
              <span>
                <VerifiedUser className="post__badge" />
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>This is the first post to the twitter!</p>
          </div>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Post;
