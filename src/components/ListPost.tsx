import React from "react";
import { Post } from "../types/Post";
import "../App.css";

type Props = {
  posts: Post[];
};

export const ListPost: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
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
            <h3>{post.nameAuthor}</h3>
            <p>{post.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
