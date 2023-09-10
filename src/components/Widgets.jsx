import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import Search from "@mui/icons-material/Search";

const Widgets = () => {
  return (
    <div className="widgets flex-[0.3]">
      <div className="widgets__input flex items-center bg-[#e8f5fe] p-3 rounded-[20px] mt-5 ml-5">
        <Search className="widgets__searchIcon text-gray-400" />
        <input className="border-none bg-[#e8f5fe]" placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer mt-4 ml-5 p-5 bg-gray-50 rounded-[20px]">
        <h2 className="text-lg font-extrabold">What's happening</h2>
        <TwitterTweetEmbed tweetId={"933354946111705097"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="hridoy007"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/hridoy005"}
          options={{ text: "#reactjs is awesome", via: "hridoy007" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
