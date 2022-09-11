import React, { useEffect, useState } from 'react';
import './App.css';
import {InputForm} from './components/InputForm';
import {ListPost} from './components/ListPost';
import {TopList} from './components/TopList';
import { getLocalPosts } from './lib/utils';
import { Post } from './types/Post';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(()=>{
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(()=>{
    getLocalPosts(setPosts)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <InputForm
          posts={posts}
          onCreatePost={setPosts}  
        />
         <TopList posts={posts}/>
      </header>
      <main>
        <ListPost posts={posts}/>
      </main>
    </div>
  );
}

export default App;
