import { Avatar, Button } from "@mui/material";
import React from "react";
import image from "../images/Avatar.jpg";

const TweetBox = () => {
  return (
    <div className="tweetBox pb-3 pr-3 border-b-8 border-[#e8f5fe]">
      <form className="flex-col">
        <div className="tweetBox__input p-5 flex">
          <Avatar src={image} />
          <input
            className="flex-1 ml-5 text-xl border-none"
            placeholder="What's heppening"
            type="text"
          />
        </div>
        <div className="flex justify-between">
          <input
            className="border-none p-3"
            placeholder="Optional: Enter Image URL"
            type="text"
          />

          <Button className="bg-sky-500 border-none font-black  rounded-[30px] w-[80px] h-[40px] mt-5">
            <span className="text-white capitalize">Tweet</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
