// import React from 'react';
// import Post from './Post';

// postsToDisplay = []; //make this an array of singular post objects

const [postFeed, setPostFeed] = useState([{name: '', date: '', time: '', body: ''}])

  function addNewPost(post){ //recieves post from write post
    let tempPostFeed = [post, ...postFeed]; //puts new post in fromt of all original posts
    setPostFeed(tempPostFeed);
  }

// const PostFeed = () => {
//     return ( 
        
//     );
// }
 
// export default PostFeed;