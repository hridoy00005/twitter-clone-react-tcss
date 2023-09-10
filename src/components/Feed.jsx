import React, { useEffect, useState } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move";
// import avatar from "../images/Avatar.jpg";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed flex-[0.4] border-r border-[#e8f5fe] min-w-fit overflow-y-scroll">
      {/* Header */}
      <div className="feed-header sticky top-0 bg-white z-10 border border-[#e8f5fe] py-4 px-5">
        <h2 className="text-xl font-extrabold">Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
          key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
