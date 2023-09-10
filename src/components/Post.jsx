import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
// import image from "../images/Avatar.jpg";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div ref={ref} className="post flex items-start border-b border-[#e8f5fe] pb-3">
        <div className="post_avatar p-5">
          <Avatar src={avatar} />
        </div>
        <div className="post__body flex-1 p-3">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial font-semibold text-xs text-gray-500 ">
                  {verified && (
                    <VerifiedUser className="post__badge text-sm text-sky-500" />
                  )}
                  {"@"}
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription mb-3 text-[	15px]">
              <p>{text}</p>
            </div>
          </div>
          <img className="rounded-[20px] " src={image} />
          <div className="post__footer flex justify-between mt-3">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <Publish fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
