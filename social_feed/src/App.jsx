import React from 'react';
import  WritePost from './components/WritePost';
import PostFeed from './components/PostFeed';
import "./App.css"; 

function App() {

  const [posts, setPosts] = useState([{name:"Greg Reust", body:"Hello hows it going?"}]);

  
  function addNewPost(post){ //recieves post from WritePost
    let tempPostFeed = [post, ...posts]; //puts new post in fromt of all original posts
    setPosts(tempPostFeed);
  }

  return (
    <div id='root'>
      <nav>
        <h2>Social Feed</h2>
      </nav>

      {/* receives new post to add to posts */}
      <WritePost addNewPostInfo={addNewPost}/>  

      {/* sends posts to be displayed */}
      <PostFeed postsArray={posts}/>
    </div>
  );
}

export default App;
