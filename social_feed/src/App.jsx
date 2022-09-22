import React, { useState } from "react";
import  WritePost from './components/WritePost';
import PostFeed from "./components/PostFeed";

function App() {

  const [posts, setPosts] = useState([
    { name: "Greg Reust", body: "Hello how's it going?", date: "9/21/2022", time: "10:00"},
  ]);

  function addNewPost(post) {
    //recieves post from WritePost
    let tempPostFeed = [post, ...posts]; //puts new post in fromt of all original posts
    setPosts(tempPostFeed);
  }

  return (
    <div id="root">
      <header>
        <nav>
          <h1>Social Feed</h1>
        </nav>
      </header>
      <div class="container">
        {/* receives new post to add to posts */}
        <WritePost addNewPostInfo={addNewPost}/>   
      </div>
      <div class="container">
        <div class="posts-container"> 
          {/* sends posts to be displayed */}
          <PostFeed postsArray={posts} />
        </div>
      </div>
    </div>
  );
}

export default App;
