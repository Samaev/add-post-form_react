import React, { useEffect, useState } from "react";
import { Post } from "../types/Post";
import "../App.css";

type Props = {
  posts: Post[];
};

export const TopList: React.FC<Props> = ({ posts }) => {
  const [topPosts, setTopPosts] = useState(posts);

  useEffect(() => {
    setTopPosts(
      posts.filter((post, index) => {
        if (index < 5) {
          return post;
        }
        return null;
      })
    );
  }, [posts]);

  return (
    <div>
      <p>TopList of 5 newest Posts</p>
      {topPosts.map((post) => (
        <div key={post.id} className="post-container">
          <div className="image-container">
            <img
              className="author-avatar"
              src={
                post.imageUrl ||
                "https://gravatar.com/avatar/8e3076a8da343bb0b3590fe23a25e2d6?s=400&d=robohash&r=x"
              }
              alt="author avatar"
            />
          </div>
          <div>
            <p>{post.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
