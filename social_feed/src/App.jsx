import React from 'react';
import  WritePost from './components/WritePost';
import PostFeed from './components/PostFeed';
import "./App.css"; 

function App() {
  return (
    <div id='root'>
      <nav>
        <h2>Social Feed</h2>
      </nav>
      <WritePost/>
      <PostFeed/>
    </div>
  );
}

export default App;
