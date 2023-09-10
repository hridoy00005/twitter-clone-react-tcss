import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import image from "../images/Avatar.jpg";
import db from "./firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

const sendTweet=(e)=>{
e.preventDefault();

db.collection('posts').add({
  displayName:'Hridoy Chandra',
  username:'hridoy007',
  verified:true,
  text: tweetMessage,
  image:tweetImage,
  avatar:"https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.6435-9/118260040_2194644570682172_854370153257504953_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGGufHqJXNbngWSJiyBld7z49BWSHYxBajj0FZIdjEFqJuZzkTgw8GA1q4epvEU6LgMTwTxdq63t03jJ8i1CQoQ&_nc_ohc=EJQsqOLAj6IAX9St9hB&_nc_ht=scontent.fzyl1-1.fna&oh=00_AfBOC0bPJ4BFTBxnm2WNKFyrzpETguTxPfI54SEsSrWTXA&oe=65241D35"
});


setTweetMessage("");
setTweetImage("");
}



  return (
    <div className="tweetBox pb-3 pr-3 border-b-8 border-[#e8f5fe]">
      <form className="flex-col">
        <div className="tweetBox__input p-5 flex">
          <Avatar src={image} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            className="flex-1 ml-5 text-xl border-none"
            placeholder="What's heppening"
            type="text"
            value={tweetMessage}
          />
        </div>
        <div className="flex justify-between">
          <input
            value={tweetImage}
            onChange={e=>setTweetImage(e.target.value)}
            className="border-none p-3 ml-3 text-xs"
            placeholder="Enter Image URL"
            type="text"
          />

          <Button type="submit" onClick={sendTweet} className="bg-sky-500 border-none font-black  rounded-[30px] w-[80px] h-[40px] mt-5">
            <span className="text-white capitalize">Tweet</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
