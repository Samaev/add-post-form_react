import { Post } from "../types/Post";

export const getLocalPosts = (setPosts: (arg0: Post[])=> void) => {
  if (localStorage.getItem('posts') === null) {
    localStorage.setItem('posts', JSON.stringify([]));
  } else {
    setPosts(JSON.parse(localStorage.getItem('posts') || ''));
  }
};