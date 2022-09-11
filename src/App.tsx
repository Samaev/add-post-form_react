import React, { useEffect, useState } from "react";
import "./App.css";
import { InputForm } from "./components/InputForm";
import { ListPost } from "./components/ListPost";
import { TopList } from "./components/TopList";
import { Post } from "./types/Post";

function App() {
  const [posts, setPosts] = useState<Post[]>(() => {
    const storedPosts = localStorage.getItem("posts");
    return storedPosts ? JSON.parse(storedPosts) : [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="App">
      <header className="App-header">
        <InputForm posts={posts} onCreatePost={setPosts} />
        <TopList posts={posts} />
      </header>
      <main>
        <button className="button" onClick={() => setPosts([])}>
          Очистить все посты
        </button>
        <ListPost posts={posts} />
      </main>
    </div>
  );
}

export default App;
