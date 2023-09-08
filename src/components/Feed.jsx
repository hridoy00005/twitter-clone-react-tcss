import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed flex-[0.4] border-r border-[#e8f5fe] min-w-fit overflow-y-scroll">
      {/* Header */}
      <div className="feed-header sticky top-0 bg-white z-10 border border-[#e8f5fe] py-4 px-5">
        <h2 className="text-xl font-extrabold">Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <Post />
     
    </div>
  );
};

export default Feed;
